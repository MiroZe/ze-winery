
require('dotenv').config()
const dbConnect = require('./config/db');
const cors = require('cors');
const config = require('./config/config');
const apiRouter = require('./router');
const { errorHandler } = require('./utils');

dbConnect()
.then(() => {

   const app = require('express')();
   require('./config/express')(app);

   app.use(cors({
    origin:config.origin,
    credentials:true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
   }));

app.use('/', apiRouter)
app.use(errorHandler)


   app.listen(config.port, console.log(`The server is listening on port ${config.port}`))

})
.catch(console.error)