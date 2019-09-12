import config from './../config/config'
import app from './express'
import template from './../template'
import mongoose from 'mongoose'
import path from 'path'
import { MongoClient } from 'mongodb'


//const CURRENT_WORKING_DIR = process.cwd()
//app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


app.get('/', (req, res) => {
     res.status(200).send(template())
})


let port = process.env.PORT || 8181
app.listen(config.port, (err) => {  
    if (err) {  
          console.log(err)  
        }  
        console.info('Server started on port %s.', config.port)
    })
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
  })