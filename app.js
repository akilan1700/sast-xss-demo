const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  res.send(`<h1>${req.query.q}</h1>`); // Vulnerable
});

app.listen(3001, () => console.log("Running on 3001"));