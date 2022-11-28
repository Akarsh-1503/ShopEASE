import express from 'express';
import Connection from './database/db.js';
import dotenv from'dotenv';
import cors from 'cors';
import DefaultData from './default_data.js'
import Router from './route/route.js';
import bodyParser from 'body-parser';


const app = express();

dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);

const PORT = process.env.PORT || 8000;
 

const username= process.env.DB_USERNAME
const password= process.env.DB_PASSWORD

const URL= process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@flipkart.xrcgduf.mongodb.net/?retryWrites=true&w=majority`
  
Connection(URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}


app.listen(PORT, ()=> console.log(`Server has Runned on ${PORT}`));

DefaultData();






