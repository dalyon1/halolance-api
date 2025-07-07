const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.json({ msg: 'Halolance API — Ready for Lyrical Domination.' });
});

// Lyrical Diss
app.get('/api/lyrics/assassinate', (req, res) => {
  const target = req.query.target || 'your clone';
  const bars = [
    `I saw ${target} on stage — and left with secondhand shame.`,
    `${target} raps like they buffering — I spit in 8K pain.`,
    `${target}? That’s a glitch in the matrix. I'm the reboot.`,
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

// 👇 Crucial Web Binding
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});
