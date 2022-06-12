const express = require('express');
const app = express();
const PORT = 4001;
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
app.post('/users',(req,res)=>{
    res.sendStatus(200)
})

app.listen(PORT, () => {
    logger.info('app is listening at http://localhost:${PORT}')
})
module.export=app