import { Button, ButtonGroup, styled } from "@mui/material"


const StyledButton= styled(Button)`
    border-radius:50%;
`

export const GroupedButton =()=>{

    return (
        <ButtonGroup style={{marginTop: 10}}>
            <StyledButton> - </StyledButton>
            <StyledButton disabled > 1 </StyledButton>
            <StyledButton> + </StyledButton>
        </ButtonGroup>
    )
}