import mongoose from "mongoose";



const Connection= async(URL)=>{
     try{
            await mongoose.connect(URL,{useUnifiedTopology:true,useNewURLParser:true});
            console.log('Database Connected');
    }catch(error){
        console.log('Error while connecting',error.message);
    }
}

export default Connection;

