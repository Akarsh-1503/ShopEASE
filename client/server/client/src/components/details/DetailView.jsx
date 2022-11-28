
import { useEffect } from "react";
import { getProductDetail } from "../../redux/actions/productActions";
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {Box, Typography, styled, Grid,Table, TableBody, TableRow, TableCell} from '@mui/material';
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import {LocalOffer as Badge} from '@mui/icons-material';


const Component=styled(Box)`
    background: #F2F2F2;
    margin-top: 54px;
`

const Container=styled(Grid)`
    background: #FFFFFF;
    
`
const RightContainer=styled(Grid)`
    margin-top: 54px;
    margin-left: 54px;
`

const SmallText=styled(Box)`

    vertical-align:baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }

`
const StyledBadge=styled(Badge)`
    font-size:17px;
    color:#00CC00;
    margin-right: 10px;

`

const DetailView =()=>{

    const dispatch= useDispatch();
    const {loading, product} = useSelector(state => state.getProductDetail)
    const {id}= useParams();

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date= new Date(new Date().getTime() + (5 * 60 * 60 * 1000))


    useEffect(()=>{
        if(product && id!==product.id)
            dispatch(getProductDetail(id))  
    },[dispatch, id, product, loading])
    return (
        <Component>
        {            
            product && Object.keys(product).length && 
                                                    // if proudct main koi value hai tb hi aage jayega vrna nhi
             <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product}/>    
                </Grid> 
                <RightContainer item lg={6} md={6} sm={8} xs={12}>
                        <ProductDetail product={product}/>
                        
                    <Typography>Available Offers</Typography>
                <SmallText>
                    <Typography><StyledBadge/>Get extra 20% off upto Rs.50 on 1 item(s) T&C</Typography>
                    <Typography><StyledBadge/>Get extra 17% off (price inclusive of discount) T&C</Typography>
                    <Typography><StyledBadge/>Pay Akarsh Srivastav Rs.50 to avail discount of Rs.100</Typography>
                    <Typography><StyledBadge/>Buy 2 items save 5%, Buy 3 or more save 10% T&C</Typography>
                    <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card</Typography>
                    <Typography><StyledBadge/>No Cost EMI on JAI JAWAN JAI KISAN card T&C</Typography>
                </SmallText>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight: 600}}>Delivery By {date.toDateString()} |  ₹40</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{color: '#878787'}}>Seller</TableCell>
                            <TableCell>
                                <Box component="span" style={{color:'#2874f0'}}>SuperIndia</Box>
                                <Typography>GST Invoice available</Typography>
                                <Typography>View more Sellers</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colspan={2}>
                                <img src={adURL} style={{width:'390px'}} alt="ad"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{color:'#878787'}}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
                </RightContainer>
                
            </Container>
        }
        </Component>
    )
}

export default DetailView;