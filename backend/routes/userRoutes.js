// const express = require('express');
// const { registeraccount, loginaccount, logoutaccount, shopaccount } = require('../controllers/user.controllers');
// const IsLoggedIn = require("../middlewares/auth.middleware")
// const router = express.Router();

// // register account
// router.post("/register", registeraccount)

// router.post("/login", loginaccount)

// router.get("/logout", logoutaccount)

// router.get("/shop",IsLoggedIn, shopaccount);


// module.exports = router



const express = require('express');
const { registeraccount, loginaccount, logoutaccount, shopaccount } = require('../controllers/user.controllers');
const { IsLoggedIn, IsAdmin } = require('../middlewares/auth.middleware');
const router = express.Router();

// Register account
router.post('/register', registeraccount);

// Login account
router.post('/login', loginaccount);

// Logout account
router.get('/logout', logoutaccount);

// User routes
router.get('/shop', IsLoggedIn, shopaccount);

// Admin routes
router.get('/admin/dashboard', [IsLoggedIn, IsAdmin], (req, res) => {
    res.status(200).json({ success: true, message: "Admin Page" });
});

module.exports = router;


