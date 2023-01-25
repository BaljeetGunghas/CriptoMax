import { Button, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack px={['4', "10"]} py={"2"} zIndex={"10"} justifyContent={'space-between'} shadow={"base"} bgColor={"black"} position={"fixed"} top={"0"} w={"full"} >
      <HStack alignItems={'center'} gap={'1'}>
        <Image src=' https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='logosvgicon' w={'7'} h={'7'} />
        <Heading fontSize={['large', '2xl']} color={'white'}>CriptoMAX</Heading>
      </HStack>

      <HStack>
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
      </HStack>
    </HStack>
  )
}

export default Navbar