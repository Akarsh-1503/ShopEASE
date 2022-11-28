import { Box, styled, Typography } from "@mui/material";


const Component=styled(Box)`
    height:450px;
    width:80%;
    background: #fff;
    margin: 80px 130px;

`

const EmptyCart =()=>{

    
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        
        <Component>
            <Box style={{textAlign: 'center', paddingTop:70}}>
                <img src={imgurl} alt="Empty" style={{width: '22%'}}/>
                <Typography>Your Cart Is Empty</Typography>
                <Typography>Add Items To It Now!!!</Typography>
            </Box>
        
        </Component>
    )
                
}


export default EmptyCart;