const logger = require('../utils/logger');
const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.json({ status: 401, error: "Access Denied!" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            logger.error(err);
            return res.status(403).send('Invalid Token!');
        }
        req.user = user;
        next();
    });
}

module.exports = {
    verifyToken,
    generateAccessToken
}