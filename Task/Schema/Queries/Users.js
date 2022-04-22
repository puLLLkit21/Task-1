
const { GraphQLList, GraphQLInt, GraphQLString, GraphQLObjectType } = require('graphql');
const UserType = require('../TypeDefs/UserType')
const CompanyType = require('../TypeDefs/CompType')
const { people, Company } = require('../../models/Tables')
const logger = require('../Loggers/logger')



module.exports.USER_LIST =
{
    type: new GraphQLList(UserType),

    resolve(parent, args) {

        let data = people.findAll()
        return data
    }
},

    module.exports.COMPANY_LIST =
    {
        type: new GraphQLList(CompanyType),
        resolve(parent, args) {

            let data = Company.findAll()
            return data
        }
    }
module.exports.USER_DETAILS =
{
    type: UserType,
   
    args: {
        aadhar: { type: GraphQLInt }
    },
    async resolve(parent,args) {
        console.log(args.aadhar)
try{
        let data = await people1234.findAll({
            where: { aadhar: args.aadhar },
            include: [{
                model: Company,
                attributes: ["Company", "pos", "location"],
            }]
        })

    }
    catch{
        logger.log('error','Could not find user details')

    }
      
        logger.log('info',' Displayed User Details with Document  ID as  ' + args.aadhar)
        console.log(JSON.stringify(data))
        //console.log(data)
        return data[0];
        
    }
}