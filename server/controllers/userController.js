const bcrypt = require('bcrypt');
const { User } = require('../../models/index');

exports.register = async (req, res) => {
    const email = req.body.email;
    
    const user = await User.findOne({ where: { email } });

    if (user) {
        res.status(400).json({
            errorMessage: 'User with such email already exists'
        });
        return;
    }

    const hash = await bcrypt.hash(req.body.password, 10)
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        token: token
      });

    res.status(200).json({
        token
    });
}; 

exports.login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await User.findOne({ where: { email: username } });

    if (!user || !await bcrypt.compare(password, user.password)) {
        res.status(404).json({
            errorMessage: 'Account not found'
        });
        return;
    }

    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    user.update({token: token});

    res.status(200).json({
        token
    });
};

exports.logout = async (req, res) => {
    const token = req.body.token;

    const user = await User.findOne({ where: { token } });

    if (!user) {
        res.status(404).json({
            errorMessage: 'User not found'
        });
        return;
    }

    try {
        await user.update({ token: null })

        res.status(200).json({
            message: 'Logout success'
        });

    } catch (err) {
        res.status(400).json({
            errorMessage: err.message
        });
    }
};

exports.isLoggedIn = async (req, res) => {
    const token = req.body.token;

    if (!token) {
        res.status(404).json({
            errorMessage: 'User not found'
        });
        return;
    }

    const user = await User.findOne({ where: { token } });

    if (!user) {
        res.status(404).json({
            errorMessage: 'User not found'
        });
        return;
    }

    res.status(200).json({
        message: 'Success'
    });
};