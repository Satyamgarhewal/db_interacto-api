const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 9000;
const db = require('./config/config');
const cors = require('cors');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.listen(port, () => {
  console.log('listening on port', port);
});

app.get('/', (req, res) => {
  res.send(
    'Welcome to DB Interactor, here you can interact directly with local DB in your system'
  );
});

app.get('/get', db.getUsers);
