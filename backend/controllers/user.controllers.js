




const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const secretKey = process.env.JWT_SECRET_KEY;

exports.registeraccount = async (req, res) => {
    try {
        const { username, email, password, isAdmin } = req.body;

        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(403).json({ success: false, message: "User already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (!secretKey) {
            throw new Error('JWT_SECRET_KEY environment variable is not set');
        }

        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
            isAdmin: isAdmin || false
        });

        const token = jwt.sign({ email: newUser.email, userid: newUser._id, isAdmin: newUser.isAdmin },
            secretKey, { algorithm: 'HS256', expiresIn: '1h' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(200).json({ success: true, newUser,token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.loginaccount = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(403).json({ success: false, message: "Please fill the details" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not registered, please register to login" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign({ email: user.email, userid: user._id, isAdmin: user.isAdmin }, secretKey, { expiresIn: '1h' });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(200).json({ success: true, user,token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.logoutaccount = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logout successful" });
};



exports.adminaccount  = async (req, res) => {
    const user = await userModel.findOne({email : req.user.email});
    res.status(200).json({ success: true, user });
}

