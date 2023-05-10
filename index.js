const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
var cors = require('cors');

app.use(cors());

app.get('/getImageUrl', (req, res) => {
  console.log('getImageUrl');
  const key = req.query.key;
  res.send({
    imageUrl: 'https://picsum.photos/1200/1200?random=' + key,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
