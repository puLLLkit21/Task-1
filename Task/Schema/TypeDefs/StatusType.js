const graphql=require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} = graphql;

const StatusType = new GraphQLObjectType({
    name: 'status',
    fields: () => ({
        success: { type: GraphQLString },
        message: { type: GraphQLString },
        error: { type: GraphQLString },
       
    })
})
module.exports=StatusType;
