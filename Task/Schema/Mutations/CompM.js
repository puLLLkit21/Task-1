
const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const UserType = require('../TypeDefs/UserType')
const StatusType = require('../TypeDefs/StatusType.js');
const { people, Company } = require('../../models/Tables');
const CompanyType = require('../TypeDefs/CompType');
//const logger = require('../Loggers/logger');


module.exports.COMPANY_ADD =
{
    type: CompanyType,
    args: {
        doc_id:{type:GraphQLInt},
        Company: { type: GraphQLString },
        pos: { type: GraphQLString },
        location: { type: GraphQLString },
    },
    async resolve(parent, args) {
        await Company.create({
            doc_id:args.doc_id,
            Company: args.Company,
            pos: args.pos,
            location: args.location,
           
        })
        return args
    }
}




module.exports.COMPANY_UPDATE =
{
    type: StatusType,
    args: {
        Company: { type: GraphQLString },
        pos: { type: GraphQLString },
        
        location: { type: GraphQLString }

    },
    async resolve(parent, args) {

        await Company.update({
            
            pos: args.pos,
            location: args.location,
        }, {
            where: {
                Company: args.Company
            }
        })
        return {
            success: true, message: "updated successfully", error: ""
        }
    }
}


module.exports.DELETE_COMPANY =
{
    type: StatusType,
    args: {
        Company: { type:GraphQLString },

    },
    resolve: async (parent, args) => {

        await Company.destroy({

            where: {
                Company: args.Company
            }
        })
        return {
            success: true, message: "deleted successfully", error: ""
        }
    }
}
