const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();
const carsRouter = require('./routers/carsRouter');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/cars', carsRouter);

module.exports = server;