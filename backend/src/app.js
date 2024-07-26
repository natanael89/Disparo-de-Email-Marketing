const express = require('express');
const app = express();
const emailRoutes = require('./routes/emailRoutes');


app.use(express.json());
app.use('/api', emailRoutes)

module.exports = app;