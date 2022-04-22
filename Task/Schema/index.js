const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const { USER_LIST,USER_DETAILS, COMPANY_LIST } = require('./Queries/Users')

const { USER_ADD, USER_UPDATE, DELETE_USER } = require('./Mutations/UserM')
const { COMPANY_ADD, COMPANY_UPDATE, DELETE_COMPANY } = require('./Mutations/CompM')

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {

        userList: USER_LIST,

        userDetail: USER_DETAILS,
        compList: COMPANY_LIST
    }
})
const Mutation = new GraphQLObjectType({
    name: 'mutation',
    
    fields: {
        createUser: USER_ADD,
        //createCompany:COMPANY_ADD,

        userUpdate: USER_UPDATE,
        //companyUpdate:COMPANY_UPDATE,

        deleteUser: DELETE_USER,
        //deleteCompany:DELETE_COMPANY,

    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })