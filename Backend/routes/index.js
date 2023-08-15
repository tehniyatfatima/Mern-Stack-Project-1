const express = require ('express');

const router = express.Router();


// testing 
// router.get('/test',(res,req) =>(
//     res.json({msg : 'working'})
// ));

router.get('/test', (req, res)=>res.json({msg:"Working"}));   



//user
//login
//register
//logout
// refresh

// blog
//crud
//create
//read all blogs
// read blog by id 
//update 
//delete

//comment
//create comment
//read comment by blog id

module.exports = router;
