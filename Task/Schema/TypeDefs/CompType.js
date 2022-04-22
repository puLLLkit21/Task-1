const graphql=require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const CompanyType = new GraphQLObjectType({
    name: 'company',
    fields: () => ({
        Company:{type:GraphQLString},
        pos:{type:GraphQLString},
        location:{type:GraphQLString},
    }),
})
module.exports=CompanyType