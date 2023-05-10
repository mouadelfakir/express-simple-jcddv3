const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const cors = require('cors');
const orders = require('./orders.json');

app.use(cors());

app.get('/getOrdersWithoutImages', (req, res) => {
  res.send(orders);
});

app.get('/getImageUrl', (req, res) => {
  const key = req.query.key;
  res.send({
    imageUrl: 'https://picsum.photos/1200/1200?random=' + key,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
