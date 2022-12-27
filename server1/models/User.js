import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    lastname:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        reuired:true,
        unique:true
    },
    password:{
        type:String,
        reuired:true,
        min:5,
        max:50,
    },

    
},
    { collection: 'user-data' }
)

const User = mongoose.model('User', User)

export default User;