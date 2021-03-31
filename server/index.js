const express = require('express');
const path = require('path');
const db = require('../database/index');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/test', (req, res) => {
  db.getGuests((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

app.post('/test', (req, res) => {
  db.addGuest(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(204).send(data);
    }
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log('server ready');
});
