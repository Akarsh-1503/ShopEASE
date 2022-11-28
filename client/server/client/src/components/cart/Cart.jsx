
import CartItem from "./CartItems";
import { useSelector } from 'react-redux';
import { Grid, Typography, Box, styled, Button } from "@mui/material";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { removeFromCart } from "../../redux/actions/CartAction";
import { Payment } from "./Payment";
import { useNavigate } from "react-router-dom";


const Container = styled(Grid)`
    padding: 30px 135px;
    background-color: #F2F2F2;
`
const Header = styled(Box)`
    padding: 15px 22px;
    background-color: #fff;

`

const ButtonWrapper= styled(Box)`
    padding: 16px 22px;
    background-color: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`
const StyledButton= styled(Button)`
    display: flex;
    margin-left: auto;
    background-color: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
`
const Cart=()=>{
    const {cartItems} = useSelector(state => state.Cart);

    const navigate= useNavigate();

    const PaymentMaker=()=>{
        cartItems.length=0;
        navigate('/payment');
    }
    return (
        <>
        {   cartItems.length ?
                <Container container>
                    <Grid item lg={9} md={9} sm={12} xs={12} style={{paddingRight: 15}}>
                        <Header>
                        <Typography style={{fontWeight: 600}}>My cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item=>(
                                <CartItem item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton onClick={()=>PaymentMaker()}>
                                Place Order
                            </StyledButton>
                        </ButtonWrapper>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
            : 
            <EmptyCart/>
        }
        </>

    )
}


export default Cart;