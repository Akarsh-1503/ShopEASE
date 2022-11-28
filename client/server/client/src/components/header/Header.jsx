import {AppBar, Toolbar,Box,Typography,styled, IconButton, Drawer, List,ListItem} from '@mui/material';
import Search from './Search';
import {CustomButton} from '../header/CustomButton';
import {Link} from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 51px;
`

const Component=styled(Link)`
    margin-left: 12%;
    line-height:0;
    text-decoration:none;
    color:inherit;

`
const SubHeading=styled(Typography)`
    font-size: 10px;
    font-style: Italic;
`
const PlusImg= styled('img')({
    width: 10,
    height:10,
    marginLeft: 4

})

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    color: 'inherit',
    [theme.breakpoints.down('lg')]:{
        display:'block'
    }

}))
const CustomButtonWrapper=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'70%',
    justifyContent: 'space-between',
    fontSize:'12px',
    [theme.breakpoints.down('lg')]:{
        display:'none'
    }
}))

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setopen]= useState(false);
    
    const handleOpen=()=>{
        setopen(true);
    }
    const handleClose =()=>{
        setopen(false);
    }

    const list=()=>(
        
            <List>
            <ListItem button>
                <CustomButton/>
            </ListItem>
        </List>
        
    )
        return (
            <StyledHeader>
                <Toolbar style={{minHeight : 51}}>
                    <MenuButton onClick={handleOpen}>
                        <Menu/>
                    </MenuButton>

                    <Drawer open={open} onClick={handleClose}>
                        {list()}
                    </Drawer>

                    <Component to={'/'}>
                        <img src= {logoURL} alt="logo" style={{width:75}}/>

                        <Box style={{display:'flex'}}>

                        <SubHeading >Explore &nbsp;
                            <Box component="span" style={{color:"yellow"}}>Plus</Box>
                        </SubHeading>

                        <PlusImg src= {subURL} alt="sub-logo"/>

                        </Box>

                    </Component> 
                    <Search/>
                    <CustomButtonWrapper>

                    <CustomButton/>
                    </CustomButtonWrapper>

                    
                </Toolbar>
            </StyledHeader>
        )
  }

export default Header;