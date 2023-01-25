import {  HStack, Text } from '@chakra-ui/react'
import React from 'react'

const CoinDetailsItem = ({ title, value }) => {
  return (

    <HStack justifyContent={'space-between'} w={'full'}   >
      <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'} >{title} </Text>
      <Text>{value} </Text>
    </HStack>
  )
}

export default CoinDetailsItem