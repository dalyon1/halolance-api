const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Route: Freestyle bar generator
app.get('/api/freestyle', (req, res) => {
  const target = req.query.target || 'your foe';
  const bars = [
    `They talk tough 'til I black out the sun.`,
    `You can't measure this level — I already won.`,
    `Every line’s a landmine when I'm in the zone.`,
    `I don't battle ${target}, I bury the echo of their tone.`
  ];
  const line = bars[Math.floor(Math.random() * bars.length)];
  res.json({ target, bar: line });
});

// Route: Beat DNA (placeholder)
app.get('/api/beats/generate', (req, res) => {
  const beats = ['orchestral-glitch', 'drillwave', 'trap noir', 'gothic grime'];
  const pick = beats[Math.floor(Math.random() * beats.length)];
  res.json({ beat: pick });
});

// Placeholder routes
app.get('/api/art/prompt', (req, res) => {
  res.json({ message: 'Art prompt route coming soon!' });
});

app.get('/api/video/script', (req, res) => {
  res.json({ message: 'Video script route coming soon!' });
});

app.get('/api/voice/suggestion', (req, res) => {
  res.json({ message: 'Voice suggestion route coming soon!' });
});

app.get('/api/suno/prompt', (req, res) => {
  res.json({ message: 'Suno prompt route coming soon!' });
});

// Listen
app.listen(PORT, () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});


// 👇 Crucial Web Binding
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Halolance API is live on port ${PORT}`);
});
