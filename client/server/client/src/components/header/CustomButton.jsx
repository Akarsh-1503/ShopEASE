import { Badge, Box, Button, styled,Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from "react";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// const Wrapper=styled(Box)`
//     width:70%;
//     justify-content: space-between;
//     font-size:12px;
// `

const LoginButton=styled(Button)`
    background:white;
    color: #2874f0;
    margin:auto;
    text-transform:none;
    padding: 2px 20px;
    box-shadow:none;
    font-weight:600;
`

const CustomButtonWrapper=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'70%',
    justifyContent: 'space-between',
    fontSize:'12px',
    [theme.breakpoints.down('lg')]:{
        flexDirection:'column',
    }
}))

export const CustomButton=() =>{
    const [open,setopen] =useState(false);

    const openDialog=()=>{
        setopen(true);
    }


const Container= styled(Link)`
    display: flex;
    color:inherit;
    text-decoration:none;
    margin:auto;
`
const {account,setAccount}= useContext(DataContext);

    const {cartItems}= useSelector(state=> state.Cart);

    console.log(cartItems.length);

    return (
        <CustomButtonWrapper>
       {/* <Wrapper> */}
        {
            account ? <Profile account={account} setAccount={setAccount}/> :
            <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>

        }
            <Typography style={{margin:'auto', width:120}}>Become a Seller</Typography>
            <Typography style={{margin:'auto'}}>More</Typography>
            <Container to="/cart">
                    <Badge badgeContent={cartItems?.length} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                        <Typography style={{marginLeft: 7}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setopen={setopen}/>
       {/* </Wrapper> */}
       </CustomButtonWrapper>
       )
}
