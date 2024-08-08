

const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
const userModel = require('../models/user.model');

config();

const secretKey = process.env.JWT_SECRET_KEY;

function IsLoggedIn(req, res, next) {
    // const token = req.cookies.token;
    const token = req.body.token || req.cookies.token;
    if (!token) {
        return res.status(401).json({ success: false, message: "Please sign in to continue" });
    }
    
    try {
        const data = jwt.verify(token, secretKey);
        req.user = data;
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


function IsAdmin(req, res, next) {
    if (req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ success: false, message: "Access denied, admin only" });
    }
}

module.exports = { IsLoggedIn, IsAdmin };
