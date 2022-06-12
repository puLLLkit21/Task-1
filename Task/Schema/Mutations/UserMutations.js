
const { GraphQLList, GraphQLInt, GraphQLString, GraphQLFloat } = require('graphql');
const UserType = require('../TypeDefs/UserType')
const StatusType = require('../TypeDefs/StatusType.js');
const { people, Company } = require('../../models/Tables');
const logger = require('../Loggers/logger');
const CompanyType = require('../TypeDefs/CompanyType.js');

module.exports.USER_ADD =
{
    type: UserType,
    args: {
        userName: { type: GraphQLString },
        userAge: { type: GraphQLInt },
        userEmail: { type: GraphQLString },
        userPhone: { type: GraphQLString },
        userAddress: { type: GraphQLString },
        userAadhar: { type: GraphQLInt },
        doc_id: { type: GraphQLInt },
        Company: { type: GraphQLString },
        position: { type: GraphQLString },
        location: { type: GraphQLString }
    },
    async resolve(parent, args) {
        try {
            await people.create({
                userName: args.userName,
                userAge: args.userAge,
                userEmail: args.userEmail,
                userPhone: args.userPhone,
                userAddress: args.userAddress,
                userAadhar: args.userAadhar,
            })
            await Company.create({
                doc_id: args.doc_id,
                Company: args.Company,
                position: args.position,
                location: args.location
            })
            logger.log('info', 'Created New User with the following Aadhar ID : ' + args.userAadhar)
        }
        catch (e) {
            console.log(e);
            logger.log('error','CREATE USER QUERY FAILED')
        }   
        return args
    }
}

module.exports.USER_UPDATE =
{
    type: StatusType,
    args: {
        userAadhar: { type: GraphQLInt },
        userName: { type: GraphQLString },
        userPhone: { type: GraphQLString },
        userAddress: { type: GraphQLString },
        Company: { type: GraphQLString },
        position: { type: GraphQLString },
        location: { type: GraphQLString },
    },
    async resolve(parent, args) {
        try {
            var a = await people.update({
                userName: args.userName,
                userPhone: args.userPhone,
                userAddress: args.userAddress,
            }, {
                where: {
                    userAadhar: args.userAadhar
                }
            })
           var b= await Company.update({
                Company: args.Company,
                position: args.position,
                location: args.location,
            }, {
                where: {
                    doc_id: args.userAadhar
                },
    
            })
            console.log(a);
            console.log(b);
            logger.log('info', ' Updated user with Aadhar Number as  ' + args.userAadhar)
        }
        catch (e) {
            console.log(e);
            logger.log('error','UPDATE USER QUERY FAILED')
        }
        if (a == 1 && b==1) {
            return {
                success: true, message: "updated successfully", error: ""
            }
        } else if (a == 1 || b==0) {
            return {
                success: true, message: "updated successfully", error: ""
            }
        }else if (a == 0 || b==1) {
            return {
                success: true, message: "updated successfully", error: ""
            }
        }
        else {
            return {
                success: false, message: "failed to update the Details", error: "failed to update both tables"
            }

        }

    },
}


module.exports.DELETE_USER =
{
    type: StatusType,

    args: {
        userAadhar: { type: GraphQLInt },

    },
    async resolve(parent, args) {
        try {
            var a = await people.destroy({
                where: {
                    userAadhar: args.userAadhar,

                },

            })


            console.log(a);

            
            logger.log('info', ' Deleted user with Aadhar Number as  ' + args.userAadhar)
        }
        catch (e) {
            console.log(e);
            logger.log('error', 'DELETE USER QUERY FAILED')
        }
        if (a == 1) {
            return {
                success: true, message: "record deleted successfully", error: ""
            }
        } else {
            return {
                success: false, message: "failed to delete the record", error: "failed to delete "
            }

        }


    }

}
