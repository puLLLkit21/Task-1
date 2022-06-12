const Sequelize = require('sequelize');
const logger=require('../Schema/Loggers/logger')


const sequelize=new Sequelize('test25','root','root',{
    host:'localhost',
    dialect:'mysql',
    //logging:(message)=>{;logger.info(message)}
    logging:false
    
})

sequelize.authenticate()

.then(()=>{
    console.log('connected')
})
.catch(e=> {
    console.log('error'+e)
})
module.exports=sequelize;