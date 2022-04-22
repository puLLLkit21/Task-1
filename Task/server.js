const express = require('express');
const app = express();
const PORT = 4242;
const {graphqlHTTP} = require('express-graphql');
const logger=require('./Schema/Loggers/logger');


require('./models/ind')

const schema = require('./Schema/index');
app.use(express.json())

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql:true
    }),
);

app.listen(PORT, () => {
    logger.info('app is listening at http://localhost:${PORT}')
})