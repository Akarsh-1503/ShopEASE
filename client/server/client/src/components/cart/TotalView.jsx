import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const Heading = styled(Box)`
    padding: 15px 24px;
    background-color:#fff;
    border-bottom: 1px solid #f0f0f0;
`
const Container= styled(Box)`
    padding: 15px 24px;
    background-color: #fff;
    
    & > p {
        margin-bottom: 20px;
        font-size:14px;
    }
    & > h6 {
        margin-bottom:22px;
    }
`
const ShiftRight = styled(Box)`
    float: right;
`
const TotalView =({cartItems})=>{

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const totalAmount = ()=>{
        let price=0, discount=0;

        cartItems.map(item=>{
            price+= item.price.mrp;
            discount+= (item.price.mrp - item.price.cost);
    })
    
        setPrice(price);
        setDiscount(discount);
    }

    useEffect(()=>{
        totalAmount();
    }, [cartItems])

    return (
        <Box>
            <Heading>
                <Typography style={{color: '#878787'}}>PRICE DETAILS</Typography>
            </Heading>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                    <ShiftRight component="span">₹{price}</ShiftRight>
                </Typography>
            
                <Typography>Discount
                    <ShiftRight component="span">₹{discount}</ShiftRight>
                </Typography>
           
                <Typography>Delivery Charges 
                    <ShiftRight component="span">₹40</ShiftRight>
                </Typography>
         
                <Typography variant='h6'>Total Amount
                    <ShiftRight component="span">₹{price - discount}</ShiftRight>
                </Typography>
            
                <Typography style={{ color: 'green' }}>You will save ₹{discount - 40} on this order
                </Typography>
            </Container>
        </Box>
    )

}


export default TotalView;