
const mongoose = require('mongoose')

const  conectionstring = "mongodb+srv://Tehniyat_Fatima_Fareed:yudc9411@cluster0.4zyocie.mongodb.net/?retryWrites=true&w=majority"

const dbconnect = async () => {

    try {
        const conn = await mongoose.connect(conectionstring);
        console.log ("database is connected")
    } catch (error) {
        console.log("database is not connected")
        
    }
}

module.exports = dbconnect;