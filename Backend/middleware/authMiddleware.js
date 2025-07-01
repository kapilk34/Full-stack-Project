const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token required' });
  try {
    req.user = jwt.verify(token, 'secret123');
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};



// const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler');
// const User = require('../Models/User.model');

// const userAuth = asyncHandler(async (req, res, next) => {
//     let token;

//     // Check for token in cookies or Authorization header
//     if (req.cookies && req.cookies.token) {
//         token = req.cookies.token;
//     } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         token = req.headers.authorization.split(' ')[1];
//     }

//     if (!token) {
//         res.status(401);
//         throw new Error('Not authorized, no token');
//     }

//     try {
//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log(Decoded: ${decoded});

//         // Attach full user object (without password) to req.user
//         const user = await User.findById(decoded.id).select('-password');
//         if (!user) {
//             res.status(401);
//             throw new Error('Not authorized, user not found');
//         }
//         req.user = user;
//         next();
//     } catch (error) {
//         console.error('JWT Error:', error);
//         res.status(401);
//         throw new Error('Not authorized, token failed');
//     }
// });

// module.exports = userAuth;
