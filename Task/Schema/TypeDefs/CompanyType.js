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
        doc_id:{type:GraphQLInt},
        Company:{type:GraphQLString},
        position:{type:GraphQLString},
        location:{type:GraphQLString},
    }),
})
module.exports=CompanyType