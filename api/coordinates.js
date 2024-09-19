const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

const coordinates = [
  {
    start: { lat: 28.2380, lng: 83.9956 },
    end: { lat: 28.2385, lng: 83.9951 },
  },
  {
    start: { lat: 28.2400, lng: 83.9960 },
    end: { lat: 28.2405, lng: 83.9965 },
  },
];

app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.get('/api/coordinates', (req, res) => {
  res.json(coordinates);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
