const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const cors = require('cors');


//app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.static(publicPath));

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
