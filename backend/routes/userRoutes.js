
const express = require('express');
const { registeraccount, loginaccount, logoutaccount, shopaccount, adminaccount } = require('../controllers/user.controllers');
const { IsLoggedIn, IsAdmin } = require('../middlewares/auth.middleware');
const router = express.Router();

// Register account
router.post('/register', registeraccount);

// Login account
router.post('/login', loginaccount);

//logout account
router.put("/logout", IsLoggedIn, logoutaccount)

//admin dashboard
router.post('/admin/dashboard', [IsLoggedIn, IsAdmin], adminaccount );
 
module.exports = router;


