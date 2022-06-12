const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const {UUIDV4 } = require("uuid");
const {DataTypes,} = require("sequelize");
const {v4 : uuidv4} = require('uuid')


const people = sequelize.define("users", {
    UUID: {
        type: DataTypes.UUID,
        defaultValue:uuidv4(),
        allowNull: true,     
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userAge: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            len: { args: [2,3], msg: 'Invalid Age' },
        }
        
    },
    userEmail: {
        type: Sequelize.STRING,
        allowNull: true,  
    },
    userPhone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: { args: [10,10], msg: 'Phone Number should be of 10 digits.' },
        }
    },
    userAddress: {
        type: Sequelize.STRING,
        allowNull: true,   
    },
    userAadhar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
        primaryKey:true,
        onDelete:'CASCADE'

    },
    createdAt: {

        type: Sequelize.DATE(6),
        defaultValue: new Date(),
        allowNull: false
    },
    updatedAt: {

        type: Sequelize.DATE(6),

        defaultValue: new Date(),
        allowNull: false
    },
    

})
const Company = sequelize.define("companies", {
    doc_id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        required:true,
        onDelete:'CASCADE',
        
        references: {
            model: people,
            key: 'userAadhar'
        }
    },

        Company: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        position: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {

            type: Sequelize.DATE(6),
            defaultValue: new Date(),
            allowNull: false
        },
        updatedAt: {

            type: Sequelize.DATE(6),

            defaultValue: new Date(),
            allowNull: false
        },

    });
    module.exports = {people,Company}    
    

    people.Company=people.hasOne(Company,{
        foreignKey:'doc_id'
    })


    Company.people=Company.belongsTo(people,{
        foreignKey:'doc_id'
    })
 
    


