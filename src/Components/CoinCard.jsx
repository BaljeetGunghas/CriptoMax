import { Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './style/exchange.css'


const CoinCard = ({ id, name, image, symbol , price, currencySymbole}) => {
    return (
        <Link to={`/coin/${id}`} >
            <VStack className='exchanges-section' position={"relative"} transition={"all 0.3s"} >
                <Image src={image} alt={name} w={'7'} h={'7'} objectFit='contain' rounded={"full"} />
                <div className="exchangecardInfo">
                    {symbol}
                </div>
                <div className="coinCard-coinName">
                    {name}
                </div> 
                <div className="coinCard-coinName">
                    {price ? `${currencySymbole}${price}` :"Na" }
                </div> 
            </VStack>
        </Link >
    )
}


export default CoinCard