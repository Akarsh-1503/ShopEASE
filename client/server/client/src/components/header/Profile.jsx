
import { Typography,Box,Menu,MenuItem, styled } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component =styled(Box)`
    margin-left: 10px;
    cursor:pointer


`
const Profile=({account, setAccount})=>{

    const [ open,setOpen ] = useState(false);

    const handleClick =(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false);
    }

    const logoutUser=()=>{
        setAccount('');
    }
    return (

        <>
        <Component onClick={handleClick} cursor='pointer'>

            <Typography>{account}</Typography>

        </Component>
        <Menu
            anchorEl={open}
            open={open}
            onClose={handleClose}
            
        >
            <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                <PowerSettingsNewIcon color='primary' fontSize= 'small'/>
                <Typography style={{marginLeft: '5px'}}>
                    Logout
                </Typography>
            </MenuItem>
        </Menu>
        </>
        
    )
}

export default Profile;






