import {User} from "../model/user.model.js";

export async function signup(req, res) {

    try {
        const {email, password, username} = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({success: false, message: 'All fields are required'});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({success: false, message: 'Invalid email'});
        }

        if (password.length < 6) {
            return res.status(400).json({success: false, message: 'Password must be at least 6 characters'});
        }

        const existingUserByEmail = await User.findOne({email: email});

        if (existingUserByEmail) {
            return res.status(400).json({success: false, message: 'User with this email already exists'});
        }

        const existingUserByUsername = await User.findOne({username: username});

        if (existingUserByUsername) {
            return res.status(400).json({success: false, message: 'User with this username already exists'});
        }

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const user = new User({email, password, username, image});
        await user.save();
        return res.status(201).json({success: true, message: 'User created successfully'});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export async function login(req, res) {
    res.send('login');
}

export async function logout(req, res) {
    res.send('logout');
}