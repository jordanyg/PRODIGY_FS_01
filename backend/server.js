const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

connectDB()

app.use(cors())
app.use(express.json())//body parser for raw json
app.use(express.urlencoded({extended:false}))// for urlencoded



app.use(errorHandler)


app.use('/api/users' , require('./routes/userRoutes'))


app.listen(port , ()=>    console.log(`server has started at port ${port}`)
)