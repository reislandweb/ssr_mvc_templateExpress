const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_mongo');

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('Conexion con MongoDB estable'));

module.exports = mongoose