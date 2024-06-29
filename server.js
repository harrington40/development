const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

const cors = require('cors');
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve menu items from src/app/data
app.get('/api/menu', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/app/data/menu.json'));
});

// Endpoint to serve images from the public/image directory
app.get('/image/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const options = {
    root: path.join(__dirname, 'public/image'),
  };
  res.sendFile(imageName, options, (err) => {
    if (err) {
      res.status(404).send('Image not found');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
