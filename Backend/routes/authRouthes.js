const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
module.exports = router;





// const express = require('express');
// const userAuth = require('../Middlewares/userAuth');
// const router = express.Router();

// const authController = require('../Controllers/Auth.Controller');

// router.post('/register', authController.createUser);
// router.post('/login', authController.loginUser);
// router.post('/send-reset-otp', authController.sendResetOTP);
// router.post('/reset-password', authController.resetPassword);

// router.get('/profile', userAuth, authController.getUserProfile);
// router.post('/logout', userAuth, authController.logoutUser);
// router.get('/is-authenticated', userAuth, authController.isAuthenticated);
// router.post('/send-otp', userAuth, authController.sendVerificationOTP);
// router.post('/verify-account', userAuth, authController.verifyEmail);

// module.exports = router;