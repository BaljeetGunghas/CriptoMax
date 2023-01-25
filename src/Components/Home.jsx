import { Heading, HStack, Image, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style/exchange.css'
import TrandingSlick from './TrandingSlick'

const Home = () => {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`https://api.coingecko.com/api/v3/search/trending`)
    .then((trand) => {
      return (
        setTranding(trand.data.coins)
      )
    }).catch((e)=>{
      return (
        console.log(e)
      )
    })

  }, [])



  return (
    <VStack  h={'full'} w={'full'} overflow="hidden" justifyContent={'center'} py={'20'} px={['10','40']} gap={'5'} bgImg={'https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} backgroundSize={'cover'}  >
      <VStack w={'full'} alignItems={'flex-start'}   >
        <Heading color={'white'} p={'0'} fontSize={['2xl', 'xx-large']} fontWeight={'bold'} >
          Tranding Currency 
        </Heading>
      </VStack>
      <HStack alignItems={'center'} pl={'4'}  justifyContent={'center'}  w={'container.md'} >
        <TrandingSlick  tranding={tranding}  />
      </HStack>
      <HStack h={'60'} w={'60'} justifyContent={'center'} gap={'20'} flexDirection={['column', 'row']} position={'relative'}   >
        <Image className='homebg' src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='homeBG' w={['container.md', 'container.sm']}  />
        <Heading color={'white'} position={['absolute', 'initial']} bottom={'-16'} textTransform={'uppercase'}  > CriptoMAX </Heading>
      </HStack>
    </VStack>
  )
}

export default Home