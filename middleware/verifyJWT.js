const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;
	if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

	const token = authHeader.split(' ')[1];
	if (!token)
		return res
			.status(401)
			.json({ message: "No token, authorization denied" });

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.status(403).json({ message: err.message });
		req.user = { id: decoded.id };
		next();
	});
};

module.exports = { verifyJWT };
