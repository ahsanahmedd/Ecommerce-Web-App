
const express = require('express');
const { registeraccount, loginaccount, logoutaccount, shopaccount, adminaccount, loginWithGoogle } = require('../controllers/user.controllers');
const { IsLoggedIn, IsAdmin } = require('../middlewares/auth.middleware');
const router = express.Router();

// Register account
router.post('/register', registeraccount);

// Login account
router.post('/login', loginaccount);

// login with google
router.post('/google/login', loginWithGoogle);

//logout account
router.get("/logout", IsLoggedIn, logoutaccount)

//admin dashboard
router.get('/admin/dashboard', [IsLoggedIn, IsAdmin], adminaccount );
 

module.exports = router;
