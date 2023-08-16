
const express = require('express');
const dbconnect = require('./Database/index')
const {PORT} = require('./config/index')
const router = require  ('./routes/index')

const app = express();
const port = 3000;

dbconnect();
app.use(express.json());
app.use(router);





app.listen(port , console.log(`backend is running on http://localhost:${port}`));