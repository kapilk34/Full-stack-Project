import React from 'react'
import Testimonials from '../Components/Testimonials'
import TrustedPatners from '../Components/TrustedPartners'
import NewsLetter from '../Components/NewsLetter'
import RotatingCube from '../Components/RotatingCube'
import CardStackGSAP from '../Components/CardStackGSAP'
import ProductCarousel from '../Components/ProductCarousel'
import TreandingProducts from '../Components/TreandingProducts'


function Home() {
  return (
    <>
    <RotatingCube />
    <div className='text-5xl text-center font-semibold'>Our Products</div>
    <CardStackGSAP />
    <ProductCarousel />
    <div className='text-5xl text-center p-6 m-5 font-semibold'>Treanding Products</div>
    <TreandingProducts />
    <Testimonials />
    <TrustedPatners />
    </>
  )
}

export default Home