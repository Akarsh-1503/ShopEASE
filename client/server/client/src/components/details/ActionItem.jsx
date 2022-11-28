
import {Box, Button, styled} from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
                                                                        // same as below
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart} from '../../redux/actions/CartAction.js';
import { useState } from 'react';


const LeftConatiner =styled(Box)`
    padding: 40px 0 0 80px;
    min-width:40%;

`
const Image =styled('img')({
    padding: '15px 40px',
    height: '220px'
})

const StylerButt = styled(Button)`

    width: 48%;
    height: 50px;
    border-radius: 2px;

`

const ActionItem =({product})=>{
    const {cartItems} = useSelector(state => state.Cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;

    const [quantity, setQuantity] = useState(1);

    const addItemToCart=()=>{
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const PaymentMaker=()=>{
        cartItems.length=0;
        navigate('/payment');
    }

    return (
        <LeftConatiner>
                <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0',
                width: '90%'}}>
                <Image src={product.url}/>
            </Box>
            <StylerButt variant="contained" style={{marginRight: '10px', background: '#ff9f00'}} onClick={()=> addItemToCart()}>
                <Cart/>Add To Cart
            </StylerButt>
            <StylerButt variant="contained" style={{background: '#fb541b'}} onClick={()=>PaymentMaker()}>
                <Flash/>Buy Now
            </StylerButt>

        </LeftConatiner>
        
    )
}

export default ActionItem;
