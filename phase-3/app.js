require('express-async-errors');
require('dotenv').config();
const express = require('express');
const { sequelize } = require('../phase-2/db/models');
const app = express();

app.use(express.json());

// import the model !
const { WarehouseItem } = require('./db/models');

// Q1
app.get('/items', (req, res) => {
  const items = await 
})









if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
