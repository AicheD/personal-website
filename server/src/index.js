const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Use the CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
