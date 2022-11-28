
import { products } from "./constants/data.js";
import Product from "./module/product-schema.js"

const DefaultData= async()=>{
    try {
        await Product.deleteMany({})
        await Product.insertMany(products);                              
        console.log('Successfully Loaded Data');
    } catch (error) {
        console.log('Error while inserting default data');
    }
}

export default DefaultData; 