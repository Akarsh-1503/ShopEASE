
import { Grid,styled } from "@mui/material"
import {imageURL} from "../../constants/data"


const Wrapper=styled(Grid)`

    margin:10px 0px 10px 0px;
      //  top  right bottom left 
`

export const MidSection=()=>{

    return (
        // <Box style={{display:'flex'}}>
        <Wrapper container lg={12} md={12} sm={12} xs={12}>
            {   
                imageURL.map(img=>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={img} alt="midSection" style={{width:'100%'}}/>
                    </Grid>
                    ))
                }

        </Wrapper>
        // </Box>
    )


}
