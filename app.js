const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// * Settings
require('dotenv').config({ path: './.env' })
app.set('port', process.env.PORT || 3000);
app.use(cors());

// * Middlewares
app.use(morgan('dev'));
app.use(express.json());

// * Routes
app.use(require('./routes/index'));

// * 404
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found',
  });
});

module.exports = app;