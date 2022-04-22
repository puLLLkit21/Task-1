const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const db = {}


db.sequelize = sequelize

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync')

    })

db.users = require('./Tables')


module.exports = db;
