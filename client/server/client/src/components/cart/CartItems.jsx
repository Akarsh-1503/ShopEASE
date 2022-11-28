import { Box, Button, styled, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addEllipsis } from "../../utils/AddEllipsis";
import { GroupedButton } from "./GroupedButton";
import { removeFromCart } from "../../redux/actions/CartAction";

const Component= styled(Box)`
    display:flex;
    border-top: 2px solid #f0f0f0;
    background-color: #fff;

`

const LeftComponent= styled(Box)`
    margin: 22px;
    display:flex;
    flex-direction: column;
    background-color: #fff;
`
const SmallText= styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;

`

const Remove =styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight:551

`
const CartItem=({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch= useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }


    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="img" style={{height:101}}/>
                <GroupedButton/>
            </LeftComponent>
            <Box style={{margin: 20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: SuperIndia
                    <Box component="span"><img src={fassured} alt="flip" style={{width:50, marginLeft: 10}}/></Box>
                </SmallText>
                <Typography>
                    <Box component="span" style={{fontWeight:600, fontSize: 18}}>₹{item.price.cost}</Box> &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:"#878787"}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=> removeItemFromCart(item.id)}>
                    Remove
                </Remove>
            </Box>
        </Component>
    )
}


export default CartItem;