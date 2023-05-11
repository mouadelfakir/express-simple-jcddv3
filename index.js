const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const cors = require('cors');
const https = require('https');
const axios = require('axios');

const orders = require('./orders.json');

app.use(cors());

app.get('/getOrdersWithoutImages', (req, res) => {
  res.send(orders);
});

app.get('/getOrdersWithImages', (req, res) => {
  const endpoints = [];
  orders.forEach((order) =>
    endpoints.push(
      'https://express-simple-rpwg.onrender.com/getImageUrl?key=' + order.key
    )
  );

  axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((data) => {
    data.forEach((image, index) => {
      orders[index]['imageUrl'] = image.data.imageUrl;
    });
  });

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
