
import { Badge, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';


const handleDragStart = (e) => e.preventDefault();

const TrandingSlick = ({ tranding }) => {
    

    const items = tranding.map((data) => {
        return (
            <Link to={`/coin/${data?.item?.id}`} >
                <VStack className='exchanges-section' position={"relative"} transition={"all 0.3s"} >
                    {/* <Image src={data?.item?.large} alt={data?.item?.name} w={'7'} h={'7'} objectFit='contain' rounded={"full"} /> */}
                    <Image src={data?.item?.large} onDragStart={handleDragStart} w={'7'} h={'7'} objectFit='contain' role="presentation" alt='hdhdh' />,
                    <div className="exchangecardInfo">
                        {data?.item?.symbol}
                    </div>
                    <div className="coinCard-coinName">
                        {data?.item?.name}
                    </div>
                    <div className="coinCard-coinName">
                        {data?.item?.price_btc}
                    </div>
                    <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'} >
                        {`#${data?.item?.market_cap_rank}`}
                    </Badge>
                </VStack>
            </Link >
        )
    })


    const responsive = {
        0: {
            items: 4
        },
        678: {
            items: 4
        }
    }

    return (
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={800}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items} />
    );
}

export default TrandingSlick







