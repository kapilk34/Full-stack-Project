// src/components/stack/CardStackGSAP.jsx
import React, {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import '../Style/CardSwap.css'; 

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const CardStackGSAP = ({
  width = 400,
  height = 500,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 3000,
  pauseOnHover = false,
  skewAmount = 6,
  easing = "elastic",
}) => {
  const cards = [
    {
      label: "Customizable",
      image: "props-product-photography.webp",
      title: "Design Your Way",
      description: "Tailor your interface exactly how you want it.",
    },
    {
      label: "Reliable",
      image: "photo-1505740420928-5e560c06d30e.jpeg",
      title: "Rock-Solid Stability",
      description: "Count on us for dependable performance.",
    },
    {
      label: "Smooth",
      image: "what makes a good product image.jpg",
      title: "Seamless Experience",
      description: "Enjoy intuitive and silky-smooth interactions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const refs = useMemo(() => cards.map(() => React.createRef()), [cards.length]);
  const order = useRef(Array.from({ length: cards.length }, (_, i) => i));
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;

      const tl = gsap.timeline();

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, "return");
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
        setActiveIndex(rest[0]);
      });
    };

    swap();
    intervalRef.current = setInterval(swap, delay);

    return () => clearInterval(intervalRef.current);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <div className="min-h-screen bg-transparent overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12">
      <div className="relative flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
        <div
          ref={container}
          className="card-swap-container"
          style={{ width, height }}
        >
          {cards.map((card, i) => (
            <Card
              key={i}
              ref={refs[i]}
              style={{ width: "100%", height: "100%" }}
              className="rounded-xl overflow-hidden /20 shadow-2xl"
            >
             <div className="h-12 bg-gradient-to-r from-green-900 to-teal-300 flex items-center px-4">

                <div className="w-3 h-3 bg-white rounded-full mr-2" />
                <span className="text-white text-sm font-medium">{card.label}</span>
              </div>
              <img
                src={card.image}
                alt={card.label}
                className="w-full h-[calc(100%-3rem)] object-cover"
              />
            </Card>
          ))}
        </div>
      </div>

      <div className="text-left text-black w-full md:w-1/2 order-2 md:order-1 transition-all duration-500 dark:text-white">
        <h1 className="text-4xl font-bold leading-tight mb-4">{activeCard.title}</h1>
        <p className="text-lg text-gray-400 mb-2">{activeCard.description}</p>
        <p className="text-sm text-gray-500">Change every {delay / 500}s</p>
      </div>
    </div>
  );
};

export default CardStackGSAP;