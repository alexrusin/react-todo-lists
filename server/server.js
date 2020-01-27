const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');

const bcrypt = require('bcrypt');
const db = require('../models/index');


//app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.static(publicPath));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/api/register', async (req, res) => {

    const email = req.body.email;
    
    const user = await db.User.findOne({ where: { email } });

    if (user) {
        res.status(400).json({
            errorMessage: 'User with such email already exists'
        });
        return;
    }

    const hash = await bcrypt.hash(req.body.password, 10)
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    await db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        api_token: token
      });

    res.status(200).json({
        token
    });
});

app.get('/api/hello', (req, res) => {
    res.json({greeting: 'Hello there'});
});

app.post('/api/logout', (req, res) => {
    res.json({greeting: 'Hello there'});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3030, () => {
    console.log('Server is running on port 3030')
});
