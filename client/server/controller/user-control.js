import { response } from "express";
import User from "../module/user-schema.js";

export const userSignup=async (request,response)=>{
    try{
        const exist = await User.findOne({username: request.body.username});
    if(exist){
       return response.status(401).json({message:'Username already existing'});
    }

    const user= request.body;
    const newUser= new User(user);
    await newUser.save();
    
    response.status(200).json({message: user});

    }catch(error){
        response.status(500).json({message: error.message});
    }
} 

export const userLogin =async(request,response)=>{
    try{
        
        const usernme= request.body.username;
        const passwrd= request.body.password;
        // console.log(request.body) ==>>>  { username: 'Virat', password: 'something' }      ;
        const user= await User.findOne({Username: usernme, Password: passwrd})

        if(user){
            return response.status(200).json({data: user});
        }
        else{
            return response.status(401).json(`Invalid User`);
        }


    }catch(error){
        response.status(500).json({message: error.message});
    }
}
