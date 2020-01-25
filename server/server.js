const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.get('/api/hello', (req, res) => {
    res.json({greeting: 'Hello there'});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});