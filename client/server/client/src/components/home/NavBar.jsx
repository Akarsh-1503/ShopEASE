
import {Box, Typography,styled} from '@mui/material';
import { navData } from '../../constants/data';

const Component=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    margin:'51px 120px 0px 120px',
    overflow: 'hidden',                                   // Scroll bar remove ke liye
    [theme.breakpoints.down('md')]:{
        margin: '0',
        overflow: 'overlay'                               //  Scroll bar add ke liye
    }
}));

const Container=styled(Box)`
    text-align:center;
    padding:10px 5px;
`

const Text=styled(Typography)`
    font-size:12px;
    font-family:inherit;
    font-weight:600;
`


const NavBar=()=>{
    return (
        <Box style={{backgroundColor: '#fff'}}>
            <Component>
            {
                navData.map(data=> (
                    <Container>
                    <img src={data.url} alt="nav" style={{width:65}}/>
                    <Text>{data.text}</Text>
                    </Container>
                ))
            } 
            </Component>
        </Box>
        
    )
}


export default NavBar;