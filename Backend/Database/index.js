
const mongoose = require('mongoose')
const {conn_string} = require('../config/index')

//const  conectionstring = "mongodb+srv://Tehniyat_Fatima_Fareed:yudc9411@cluster0.4zyocie.mongodb.net/?retryWrites=true&w=majority"
//const  conectionstring = "mongodb+srv://alikhan26308:aegon2630@cluster0.ofu3ul6.mongodb.net/"
const  conectionstring = "mongodb://localhost:27017"

const dbconnect = async () => {

    try {
        const conn = await mongoose.connect(conectionstring);
        console.log ("database is connected")
    } catch (error) {
        console.log("database is not connected", error)
        
    }
}

module.exports = dbconnect;