import { InputBase,Box,styled, List, ListItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import {useEffect, useState} from'react';
import {useSelector,useDispatch} from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom';
// const SearchContainer = styled(Box)`
//     background: white;
//     width: 40%;
//     border-radius:2px;
//     margin-left: 10px;
//     display:flex;
// `;
const SearchContainer = styled(Box)(({theme})=>({
    background: 'white',
    width: '40%',
    borderRadius:'2px',
    marginLeft: '10px',
    display:'flex',
    [theme.breakpoints.down('lg')]:{
        width: '60%'
    }
}))

const InputSearchSpace = styled(InputBase)`
    padding-left:10px;
    width: 100%;
    font-size:unset;
`;

const SearchSymbol= styled(Box)`
    color:blue;
    padding:5px;
    display:flex;

`;

const ListWrapper =styled(List)`
    position: absolute;
    background: #FFFFFF;
    color:#000;
    margin-top: 54px;

`



const Search = () => {
    const [text,setText]= useState('')

    const {product} =useSelector(state => state.getProducts);
   
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text);
    }

    return (
        <SearchContainer>
            <InputSearchSpace 
            placeholder='Search for products,brands and more...'
            onChange={(e) => getText(e.target.value)} 
            value={text}/>
            <SearchSymbol>
                <SearchIcon />   
            </SearchSymbol>
            {
                text &&
                    <ListWrapper>
                        {
                            product.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                                <ListItem>
                                    <Link to={`/product/${product.id}`}
                                         onClick={()=>setText('')}
                                         style={{textDecoration:'none',color:'inherit' }}>
                                        {product.title.longTitle};
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search