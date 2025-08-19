const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const todoRouter = require('./routes/Todo/todoRouter');
const cors = require('cors');
const userRouter = require('./routes/User/userRouter')

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cors())

//routes
app.use('/api/todo', todoRouter);
app.use('api/users', userRouter)

module.exports = app;

