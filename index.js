require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const sequelize = require('./db');

const PORT = process.env.PORT;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
