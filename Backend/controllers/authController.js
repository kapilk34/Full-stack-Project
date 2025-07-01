const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Registering:", email);
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, 'secret123', { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler');
// const User = require('../Models/User.model');
// const transporter = require('../Config/Nodemailer');

// const createUser = asyncHandler(async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         res.status(400);
//         throw new Error('Please fill all the required fields');
//     }

//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         res.status(400);
//         throw new Error('User already exists');
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const user = await User.create({
//         name,
//         email,
//         password: hashedPassword
//     });

//     if (!user) {
//         res.status(400);
//         throw new Error('Invalid user data');
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: '7d'
//     });

//     // Set cookie
//     res.cookie('token', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'strict',
//         maxAge: 7 * 24 * 60 * 60 * 1000 
//     });

//     // Send welcome email before sending response
//     const mailOptions = {  
//         from: "Chintan Admin Panel" <${process.env.SENDER_EMAIL}>,
//         to: email,
//         subject: "Welcome to Chintan Portal Admin Dashboard",
//         text: Hello ${name},\n\nThank you for registering on the Chintan Portal Admin Dashboard. We are excited to have you on board!\n\nBest regards,\nChintan Portal Team
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//     } catch (err) {
//         // Optionally log or handle email errors
//         console.error('Email sending failed:', err);
//     }

//     res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email
//     });
// });


// const loginUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         res.status(400);
//         throw new Error('Please fill all the required fields');
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.status(401).json({ 
//             success: false,
//             message: 'Invalid email or password' 
//         });
// }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//         return res.status(401).json({
//             success: false,
//             message: 'Invalid email or password'
//         });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: '7d'
//     });

//     res.cookie('token', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'None',
//         maxAge: 7 * 24 * 60 * 60 * 1000 
//     });

//     res.status(200).json({
//         success: true,
//         user: {
//             _id: user._id,
//             name: user.name,
//             email: user.email
//         },
//         message: 'Login Successful'
//     });
// })

// const getUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }
//     res.status(200).json(user);
// });

// const logoutUser = asyncHandler(async (req, res) => {
//     res.cookie('token', '', {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'strict',
//         maxAge: 0 
//     });

//     res.status(200).json({ message: 'Logged out successfully' });
// });

// const sendVerificationOTP = asyncHandler(async (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         res.status(400);
//         throw new Error('Email is required');
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     if (user.isAccountVerified) {
//         res.status(400);
//         return res.json({message: 'Account is already verified'});
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     user.verifyOTP = otp;
//     user.verifyOTPExpireAt = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
//     await user.save();

//     const mailOptions = {
//         from: "Chintan Admin Panel" <${process.env.SENDER_EMAIL}>,
//         to: email,
//         subject: "Verification OTP",
//         text: Your verification OTP is ${otp}. It is valid for 10 minutes.
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (err) {
//         console.error('Email sending failed:', err);
//         // Rollback the OTP if email fails
//         user.verifyOTP = '';
//         user.verifyOTPExpireAt = 0;
//         await user.save();
//         res.status(500).json({ message: 'Failed to send OTP' });
//     }
// });

// const verifyEmail = asyncHandler(async (req, res) => {
//     const { email, otp } = req.body;

//     if (!email || !otp) {
//         res.status(400);
//         throw new Error('Email and OTP are required');
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     if (user.verifyOTP !== otp || user.verifyOTPExpireAt < Date.now()) {
//         res.status(400);
//         return res.json({ message: 'Invalid or expired OTP' });
//     }

//     user.isAccountVerified = true;
//     user.verifyOTP = '';
//     user.verifyOTPExpireAt = 0;

//     await user.save();
//     res.status(200).json({ message: 'Email verified successfully' });
// });

// const isAuthenticated = asyncHandler(async (req, res) => {
//     if (!req.user) {
//         res.status(401);
//         throw new Error('Not authorized, no user found');
//     }
//     res.status(200).json({ authenticated: true, user: req.user });
// });

// const sendResetOTP = asyncHandler(async (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         res.status(400);
//         throw new Error('Email is required');
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     user.resetOTP = otp;
//     user.resetOTPExpireAt = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
//     await user.save();

//     const mailOptions = {
//         from: "Chintan Admin Panel" <${process.env.SENDER_EMAIL}>,
//         to: email,
//         subject: "Password Reset OTP",
//         text: Your password reset OTP is ${otp}. It is valid for 10 minutes.
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (err) {
//         console.error('Email sending failed:', err);
//         // Rollback the OTP if email fails
//         user.resetOTP = '';
//         user.resetOTPExpireAt = 0;
//         await user.save();
//         res.status(500).json({ message: 'Failed to send OTP' });
//     }
// });

// const resetPassword = asyncHandler(async (req, res) => {
//     const { email, otp, newPassword } = req.body;

//     if (!email || !otp || !newPassword) {
//         res.status(400);
//         throw new Error('Email, OTP and new password are required');
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     if (user.resetOTP !== otp || user.resetOTPExpireAt < Date.now() || user.resetOTP === '') {
//         res.status(400);
//         return res.json({ message: 'Invalid or expired OTP' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     user.resetOTP = '';
//     user.resetOTPExpireAt = 0;

//     await user.save();
//     res.status(200).json({ message: 'Password reset successfully' });
// });

// module.exports = {
//     createUser,
//     loginUser,
//     getUserProfile,
//     logoutUser,
//     sendVerificationOTP,
//     verifyEmail,
//     isAuthenticated,
//     sendResetOTP,
//     resetPassword
// };
