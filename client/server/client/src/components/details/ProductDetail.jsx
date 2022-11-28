
import {Box,Typography} from '@mui/material';

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


const ProductDetail=({product})=>{
    
    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:'5px', color:'#878787', fontSize: 14}}> 
            22 Ratings & 16 Reviews
            <Box component='span'>
                <img src={fassured} style={{width: 77, marginLeft: '12px'}} alt="fassured"/>
            </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box> &nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            
        </>
    )
}


export default ProductDetail;