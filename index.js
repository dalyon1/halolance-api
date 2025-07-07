const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/rapline', (req, res) => {
  const target = req.query.target || 'them';
  const bars = [
    `I don't battle ${target}, I bury the echo of their voice.`
  ];
  res.json({ target, bar: bars[Math.floor(Math.random() * bars.length)] });
});

// Beat DNA
app.get('/api/beats/generate', (req, res) => {
  const beats = [ /* ...same as before... */ ];
  res.json(beats[Math.floor(Math.random() * beats.length)]);
});

// Art Prompt
app.get('/api/art/prompt', (req, res) => { /* ... */ });

// Video Script
app.get('/api/video/script', (req, res) => { /* ... */ });

// Voice Suggestion
app.get('/api/voice/suggestion', (req, res) => { /* ... */ });

// Suno Prompt
app.get('/api/suno/prompt', (req, res) => { /* ... */ });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});

// 👇 Crucial Web Binding
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});
