const graphql = require('graphql');
const { Company } = require('../../models/Tables');
const CompanyType = require('./CompType');

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

        uuid: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt },
        address: { type: GraphQLString },
        aadhar: { type: GraphQLInt },
        doc_id:{type:GraphQLInt},
        company: { type:CompanyType },
       
    }),

})
module.exports = UserType