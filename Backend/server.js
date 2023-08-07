
const express = require('express');
const dbconnect = require('./Database/index')
const app = express();
const port = 3000;


dbconnect();

app.get("/", (req,res) => 
res.json({msg : "hello world"})

);

app.listen(port , console.log(`backend is running on http://localhost:${port}`));