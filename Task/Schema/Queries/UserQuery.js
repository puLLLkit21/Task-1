
const { GraphQLList, GraphQLInt, GraphQLString, GraphQLObjectType } = require('graphql');
const UserType = require('../TypeDefs/UserType')
const CompanyType = require('../TypeDefs/CompanyType')
const UserDetailType=require("../TypeDefs/UserDetailType")
const { people, Company } = require('../../models/Tables')
const logger = require('../Loggers/logger')
var data;
module.exports.USER_DETAILS =
{
    type: UserDetailType,
   
    args: {
        userAadhar: { type: GraphQLInt }
    },
    async resolve(parent,args) {
     try{
        console.log(args.userAadhar)

        data = await people.findAll({
            where: { userAadhar: args.userAadhar},
            include: [{
                model: Company,
                attributes: ["Company", "position", "location"],
            }]
        })
        logger.log('info',' Displayed User Details with Document  ID as  ' + args.userAadhar)
    }
    catch(e){
        console.log(e);
        logger.log('error','FAILED TO DISPLAY USER DETAILS')
    }     
        
        //console.log(JSON.stringify(data))
        //console.log(data)
        return data[0];
        
    }
}