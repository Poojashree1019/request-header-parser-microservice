const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route for handling request header parsing
app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const language = req.headers['accept-language'].split(',')[0];
    const software = req.headers['user-agent'];

    res.json({
        ipaddress: ip,
        language: language,
        software: software
    });
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
