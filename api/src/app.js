const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(
  "mongodb+srv://lune:bakami@database.ffovn.mongodb.net/diadoamburguer?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(cors(
  {
    origin: '*'
  }
));

app.use(routes);

app.listen('3333');