const graphql = require('graphql');
const { Company } = require('../../models/Tables');
const CompanyType = require('./CompanyType');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLJson,
    GraphQLList,
    GraphQLInputObjectType
} = graphql;

const UserDetailType = new GraphQLObjectType({
    name: 'userDetail',
    fields: () => ({


        userName: { type: GraphQLString },
        userAge: { type: GraphQLInt },
        userEmail: { type: GraphQLString },
        userPhone: { type: graphql.GraphQLFloat },
        userAddress: { type: GraphQLString },
        userAadhar: { type: GraphQLInt },
        doc_id: { type: GraphQLInt },
        position: { type: GraphQLString },
        location: { type: GraphQLString },
        company: { type:CompanyType },

    }),

})
module.exports = UserDetailType