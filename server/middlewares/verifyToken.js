const logger = require('../logger');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.json({ status: 401, error: "Access Denied!" });
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (e) {
        logger.error(e);
        res.status(400).send('Invalid Token!');
    }
}