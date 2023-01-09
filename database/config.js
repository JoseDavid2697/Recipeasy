const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new ('Error initializing the database');
    }
}

module.exports = {
    dbConnection
}