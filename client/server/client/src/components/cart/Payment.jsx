import { Box, styled, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {CustomButton} from '../../components/header/CustomButton';

const Text= styled(Typography)`
    font-size: 40px;
    font-weight:600;
    color: green;
    display:flex;
    flex-direction:column;
`

const Styler=styled('img')({
    marginTop: '42px',
    width: '25%',
})


const Returner= styled(Link)`
    font-size: 16px;
    color: #2874f0;
    text-decoration: none;
`


export const Payment=()=>{
    
    const dispatch= useDispatch();

    const Removal=()=>{
        dispatch(CustomButton());
    }

    return (
        <>
            <Box style={{textAlign: 'center'}}>
                <Styler src={'https://cdn.pixabay.com/photo/2012/04/18/19/01/check-37583_1280.png'} alt="payment"/>
                <Text variant='h1'>
                    Payment Successfull
                    <Returner to={'/'} onClick={()=>Removal()} >
                        Return To Home
                    </Returner>
                </Text>
            </Box>
        </>
    )
}