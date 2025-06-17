const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username }).exec();
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        const accessToken = jwt.sign(
            {
                id: user.id,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "1d",
            }
        );
        res.json({
            message: "User is logged in!",
            id: user.id,
            accessToken,
        });
    } else {
        res.status(401).json({ message: "Incorrect Password" });
    }
};

module.exports = { login };
