const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Simple test route
app.get('/', (req, res) => {
  res.send('🎤 Halolance API is alive!');
});

// Example route
app.get('/api/beats/generate', (req, res) => {
  const beats = ['Dark Trap', 'Soulful Boom Bap', 'G-Funk Synthwave'];
  const random = beats[Math.floor(Math.random() * beats.length)];
  res.json({ beat: random });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});


// Listen
app.listen(PORT, () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});


// 👇 Crucial Web Binding
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});
