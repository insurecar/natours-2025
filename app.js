const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'shdbf',
  });
});

app.post('/', (req, res) => {
  res.status(201).json({
    message: 'ok',
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
