const { User } = require('../../models/index');
const wrapAsync = require('../utils/wrapAsync');

const authMiddleware =  wrapAsync(async (req, res, next) => {
    const authHeader = req.header('Authorization');

    const error = new Error('Unauthorized');
    error.name = 'AuthenticationError'
    
    if (!authHeader) throw error;

    const token = authHeader.split(" ").pop();

    if (!token) throw error;

    const user = await User.findOne({ where: { token } });

    if (!user) throw error;

    req.user = user;

    next();
});

module.exports = authMiddleware;
