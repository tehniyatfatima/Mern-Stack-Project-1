
const express = require('express');
const dbconnect = require('./Database/index')
const {PORT} = require('./config/index')
const router = require  ('./routes/index')

const app = express();
const port = 3000;

// Middleware function
// const myMiddleware = (req, res, next) => {
//     // Do something before passing control to the next middleware or route handler
//     console.log('Middleware executed');
//     next(); // Call next() to pass control to the next middleware or route handler
//   };

// app.use(myMiddleware);
app.use(router);

// app.get('/test' , (res,req) =>{

//     res.json({msg : "working "})
// });


dbconnect();

// app.get("/", (req,res) => 
// res.json({msg : "hello world"})

// );

app.listen(port , console.log(`backend is running on http://localhost:${port}`));