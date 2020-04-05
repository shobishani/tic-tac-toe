const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();
const gameRoutes = require('./routes/game-routes');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1/games', gameRoutes);

module.exports = app;