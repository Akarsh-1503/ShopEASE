
import { Box, styled, Button, Divider, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';


const Image = styled('img')({
    cursor:'pointer',
    width: 'auto',
    height: 150

})

const Component= styled(Box)`
    background: #FFFFFF;
    

`
const Deal =styled(Box)`
    padding:5px 0px;
    display: flex;
    flex-direction: row;
`

const Timer =styled(Box)`
    margin-top:5px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-item:center;
    color:#7f7f7f;

`
const DealText =styled(Typography)`
    font-size: 22px;
    font-weight:600;
    line-height:32px;
`
const ViewButton =styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600;

`
const Text= styled(Typography)`
    text-align: center;
    font-size: 14px;

`
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 const Slide=({product,title,timer})=>{

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer=({hours,minutes,seconds})=>{

        return <Box variant="span">
            {hours} : {minutes} : {seconds} Left 
        </Box>;
    
    }

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                                <img src={timerURL} alt="image" style={{width: '24px'}}/>
                                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                            </Timer>
                }
                <ViewButton variant="contained" color="primary">
                        View All
                </ViewButton>
            </Deal>

            <Divider/>                 {/* For Drwaing a line in between */}
            
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                infinite={true}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {
                    product.map( product => (
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                            <Box text-align="center" style={{padding: '25px 15px'}}>
                                <Image src= {product.url} alt="product"/>
                                <Text style={{fontWeight:600, color: '#212121'}}> {product.title.shortTitle} </Text>
                                <Text style={{color: 'green'}}> {product.discount} </Text>
                                <Text style={{color: '#212121', opacity:'.6'}}> {product.tagline} </Text>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;