const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3002;
const cors = require('cors');

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to serve menu.json
app.get('/api/menu', (req, res) => {
    const menuPath = path.join(__dirname, 'src', 'data', 'menu.json');
    fs.readFile(menuPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read menu data' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
