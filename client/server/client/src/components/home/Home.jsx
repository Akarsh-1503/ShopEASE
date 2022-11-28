import NavBar from './NavBar';
import Banner from './Banner';
import { Box ,styled} from '@mui/material';
import Slide from './Slide';
import {useDispatch,useSelector} from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { useEffect } from 'react';
import { MidSection } from './MidSection';


const Component=styled(Box)`

    padding:10px;
    background:#F2F2F2;

`
                                                              
const Home=() =>{

    const dispatch =useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts)
    },[dispatch])

    
    const gotProducts = useSelector(state=> state.getProducts);
    const {product} =gotProducts;

    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <Slide product={product} title="Deal Of The Day" timer={true} />               
                <Slide product={product} title="Discounts For You" timer={false}/>
                <MidSection/>
                <Slide product={product} title="Season's Top Picks" timer={false}/>
                <Slide product={product} title="Recommended Items" timer={false}/>
                <Slide product={product} title="Top Selections" timer={false}/>

            </Component>
        </>
    )
}

export default Home;