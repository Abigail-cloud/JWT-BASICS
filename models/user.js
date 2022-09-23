const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "user name required"]
    },
    email: {
        type:String,
        required:[true, "user name required"]
    },
},

{
    timestamps:true,
    }
)

module.exports = mongoose.model('User', userSchema)