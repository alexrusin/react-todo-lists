const errorHandler =  (err, req, res, next) => {
    if (err.name === 'AuthenticationError') {
        res.status(401).json({
            errorMessage: 'Unathorized'
        });
        return
    }
    
    throw err;
}

module.exports = errorHandler