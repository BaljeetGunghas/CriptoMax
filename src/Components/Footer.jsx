import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import { BsLinkedin ,  } from 'react-icons';
import { ImGithub } from "react-icons/im";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithubSquare, FaInstagram, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  
  return (
    <HStack justifyContent={'space-between'} textAlign={['center', 'initial']} p='5' px={'32'} bgColor={'#000000'} flexDirection={['column', 'row']}  >
      <VStack maxW={'container.sm'} alignItems={['center', 'self-start']}  >
        <Image src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='homeBG' W={'12'} h='12' />
        <Text fontSize='xs' color={'whiteAlpha.700'} letterSpacing={'widest'} >CryptMAX exchange websites are online platforms that allow users to buy, sell, and trade different types of cryptocurrencies. They are similar to traditional currency exchange platforms, but deal exclusively in digital currencies. Some popular examples of cryptocurrency exchanges include Binance, Coinbase, and Kraken.</Text>
        <VStack alignItems={['center', 'flex-start']} alignSelf={['center','initial']} justifyContent={'center'} gap={['5', '0']} flexDirection={['row', 'column']} >
          <Button variant={"unstyled"} color={"white"}>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"}>
            <Link to={"/exchange"}>Exchange</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"}>
            <Link to={"/coin"}>Coin</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"}>
            <Link to={"/news"}>News</Link>
          </Button>
        </VStack>

      </VStack>
      <VStack>
        <Text fontSize='xl' color={'whiteAlpha.800'}>Social Media</Text>
        <HStack gap={['3','7']} flexDirection={['row','column']} >
          <a href="https://github.com/BaljeetGunghas" title='Github-1' target={'blank'} >
            <ImGithub size={20} color="white" />
          </a>
          <a href="https://github.com/baljeetgunghas2" title='Github-2' target={'blank'} >
            <FaGithubSquare size={20} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/baljeet-gunghas-b6698421b/" target={'blank'} >
            <RxLinkedinLogo size={20} color="white" />
          </a>
          <a href="https://www.instagram.com/baljeet_gunghas2/?hl=en" target={'blank'} >
            <FaInstagram size={20} color="white" />
          </a>
          <a href="https://in.pinterest.com/" target={'blank'} >
            <FaPinterestSquare size={20} color="white" />
          </a>
        </HStack>

      </VStack>
    </HStack>
  )
}

export default Footer