
const dotenv = require('dotenv').config();

const port = process.env.port;
const conn_string = process.env.conn_string;

module.exports = {
    port,
    conn_string
}