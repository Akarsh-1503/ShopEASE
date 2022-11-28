import  express  from "express";
import { userLogin, userSignup } from "../controller/user-control.js";
import { getProducts , getProductById} from "../controller/product-controller.js";


const Router= express.Router();

Router.post('/signup',userSignup);

Router.post('/login',userLogin);

Router.get('/products',getProducts);

Router.get('/product/:id',getProductById);

export default Router; 
