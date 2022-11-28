import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    Firstname:{
        type: String,
        trim: true
    },
    Lastname:{
        type:String
    },
    Phone: {
        type:Number
    },
    Username:{
        type:String,
        index:true,
        unique:true
    },
    Password:{
        type:String
    }

});


const User= mongoose.model('user',userSchema);
export default User;

