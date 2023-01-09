const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

require('dotenv').config();

//Creates the server
const app = express();

//DB
dbConnection();

app.use(cors());

//Use the public directory
app.use(express.static('public'));

//Read and parse of body
app.use(express.json());

//Routes 
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log('Server on port', process.env.PORT)
});