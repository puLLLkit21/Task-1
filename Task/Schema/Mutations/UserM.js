
const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const UserType = require('../TypeDefs/UserType')
const StatusType = require('../TypeDefs/StatusType.js');
const { people, Company } = require('../../models/Tables');
const logger = require('../Loggers/logger')

module.exports.USER_ADD =
{
    type: UserType,
    args: {
        uuid: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt },
        address: { type: GraphQLString },
        aadhar: { type: GraphQLInt }, 
        doc_id:{type:GraphQLInt},
        Company:{type:GraphQLString},
        pos:{type:GraphQLString},
        location:{type:GraphQLString}  
    },
    async resolve(parent, args) {
        await people.create({
            uuid: args.uuid,
            name: args.name,
            age: args.age,
            email: args.email,
            phone: args.phone,
            address: args.address,
            aadhar: args.aadhar,
        })
        await Company.create({
            doc_id:args.doc_id,
            Company:args.Company,
            pos:args.pos,
            location:args.location
        })
        logger.log('info','Created New User with the following unique ID : ' +args.uuid)
        return args
    }
}

module.exports.USER_UPDATE =
{
    type: StatusType,
   
    args: {
        aadhar: { type: GraphQLInt },

        name: { type: GraphQLString },
        phone: { type: GraphQLInt },
        address: { type: GraphQLString },
        Company: { type: GraphQLString },
        pos: { type: GraphQLString },
        location: { type: GraphQLString },

    
    },
    async resolve(parent, args) {

        await people.update({
            name: args.name,
            phone: args.phone,
            address: args.address,
        }, {
            where: {
                aadhar: args.aadhar
            }
        })
        await Company.update({
            Company: args.Company,
            pos: args.pos,
            location: args.location,
        }, {
            where: {
                doc_id: args.aadhar
            },

        })
        logger.log('info',' Updated user with Unique ID as  ' + args.uuid)
        
        return {
            
            success: true, message: "updated successfully", error: ""
        }
    },
   

}


module.exports.DELETE_USER =
{
    type: StatusType,
    
    args: {
        aadhar: { type: GraphQLInt },
    
    },
    async resolve(parent, args) {
try{
        await peopleee.destroy({
            where: {
                aadhar: args.aadhar,

            },

        })

        await Company.destroy({
            where: {
                doc_id: args.aadhar
            },
        })
    }
    catch(e){
      //  console.log("Could not perform delete operation")
        logger.log('error','DELETE USER QUERY FAILED')
    }   

     logger.log('info',' Deleted user with document ID  ' +args.aadhar)
        return {
            success: true, message: "deleted successfully", error: ""
        }

    }

}
