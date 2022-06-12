const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const { USER_LIST,USER_DETAILS, COMPANY_LIST } = require('./Queries/UserQuery')
const { USER_ADD, USER_UPDATE, DELETE_USER } = require('./Mutations/UserMutations')

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        userDetail: USER_DETAILS,        
    }
})
const Mutation = new GraphQLObjectType({
    name: 'mutation', 
    fields: {
        createUser: USER_ADD,
        userUpdate: USER_UPDATE,
        deleteUser: DELETE_USER,
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })