// import { Login } from "@mui/icons-material";
import { Box, Button, Dialog, TextField, Typography,styled } from "@mui/material";
import { useContext, useState } from "react";
import { authenticateSignup,authenticateLogin } from "../../service/api";
import { DataContext } from "../../Context/DataProvider";


const  Component =styled(Box)`
    
    display:flex; 
    height: 70vh;
    width: 90vh;

`
const Image=styled(Box)`
    padding:45px 35px;
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width:28%;
    height: 77.45%;
    &> div,& > p,& > h5{
        color:#FFFFFF;
        font-weight:600;
    }
`
const Wrapper=styled(Box)`
    display:flex;
    padding:14px 30px;
    flex-direction:column;
    & >button, & >p{
        margin-top: 7px;
    }

`

const LoginButton=styled(Button)`
    margin-top:10px;
    text-transform:none;
    background: #FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;

`;

const RequestButton=styled(Button)`
    text-transform:none;
    background: #fff;
    color:#287df0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
  
`;

const Text=styled(Typography)`
    font-size:11px;
    color:#878787;
    text-align:center;
`
const CreateAccount=styled(Typography)`
    
    font-size:14px;
    text-align:center;
    font-weight:600;
    cursor:pointer;
    color: #2874f0;
`
const accountInitial ={
    login:
    {
        view: 'login',
        heading: 'Login',
        sub:'Get Access to your Orders,WishList and Recommendations.'
    },
    signup:
    {
        view: 'signup',
        heading: 'SignUp',
        sub:'SignUp with your Mobile Number to get started.'
    }
}

const LoginDialog = ({open,setopen}) =>{
    const signupInitials={
        Firstname:'',
        Lastname:'',
        Phone :'',
        Username:'',
        Password:''
        
    };

    const loginInitials ={
        username:'',
        password:''
    };
    const [account, setaccount] = useState(accountInitial.login);
    const {setAccount}= useContext(DataContext);
    const [signup, setsignup] = useState(signupInitials);
    const [login, setLogin] = useState(loginInitials);

    const handleClose=()=>{
        setopen(false);
        setaccount(accountInitial.login);
       
    }
    const toggle=()=>{
        setaccount(accountInitial.signup);
    }
    

    const onInputChange=(e)=>{
            setsignup({...signup,[e.target.name]: e.target.value});
        
    }
    const onValueChange=(e)=>{
            setLogin({...login,[e.target.name]: e.target.value})
    }
    const loginUser= async()=>{
            let response = await authenticateLogin(login);
            console.log(response);

                if(response.status === 200){
                    handleClose();
                    setAccount(response.data.data.Firstname);
                }
    }

    const signupUser= async()=>{

            let response= await authenticateSignup(signup);
        
            if(!response) return ;
            handleClose();
            setAccount(signup.Firstname);
        

    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: { maxWidth:'unset'}}}>
            <Component>
                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:"20px"}}> {account.sub}</Typography>
                </Image>
               { account.view==='login'? 
                 <Wrapper>
                    
                    <TextField variant="standard" onChange={(e)=> onValueChange(e)} name="username" label="Enter Username"/>
                    <TextField variant="standard" onChange={(e)=> onValueChange(e)} name="password" label="Enter Password"/>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton onClick={loginUser}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestButton>Request OTP</RequestButton>
                    <CreateAccount onClick={()=>toggle()}>New to Flipkart? Create an Account</CreateAccount>

                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="Firstname" label="Enter Firstname"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="Lastname" label="Enter Lastname"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="Phone" label="Enter Phone"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="Username" label="Enter Username"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="Password" label="Enter Password"/>

                    <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
               
                </Wrapper>
                }
            </Component>
        </Dialog>
    )

}



export default LoginDialog;