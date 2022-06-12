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

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({


        userName: { type: GraphQLString },
        userAge: { type: GraphQLInt },
        userEmail: { type: GraphQLString },
        userPhone: { type: graphql.GraphQLFloat },
        userAddress: { type: GraphQLString },
        userAadhar: { type: GraphQLInt },
        doc_id: { type: GraphQLInt },
        Company: { type: GraphQLString },
        position: { type: GraphQLString },
        location: { type: GraphQLString },

    }),

})
module.exports = UserType