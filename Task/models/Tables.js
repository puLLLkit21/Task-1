const Sequelize = require("sequelize");
const sequelize = require("../config/db");



const people = sequelize.define("users", {
    uuid: {
        type: Sequelize.INTEGER,
        
        allowNull: false,
        
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aadhar: {
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
            key: 'aadhar'
        }
    },

        Company: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pos: {
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
    

    people.hasOne(Company, { 
        foreignKey:"doc_id",
        sourceKey:"aadhar",
        onDelete:'CASCADE',
        hooks:true
    });
    Company.belongsTo(people,{
        foreignKey:"doc_id",
        sourceKey:"aadhar",
        onDelete:'CASCADE',
        hooks:true

    });
 
    


