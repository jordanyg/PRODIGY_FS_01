const { timeStamp } = require('console')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true , 'please add name']

    },
    email:{
        type:String,
        required:[true , 'please add password'],
        unique:true
    },
    password:{
        type: String,
        required:[true , 'please add name']
    }

},
{timeStamps:true})


module.exports = mongoose.model('User', userSchema)