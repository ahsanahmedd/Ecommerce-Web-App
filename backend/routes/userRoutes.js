const express = require('express');
const { registeraccount, loginaccount, logoutaccount } = require('../controllers/user.controllers');
const router = express.Router();

// register account
router.post("/register", registeraccount)

router.post("/login", loginaccount)

router.get("/logout", logoutaccount)

module.exports = router



