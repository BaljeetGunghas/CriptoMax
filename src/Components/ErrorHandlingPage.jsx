import { VStack } from '@chakra-ui/react'
import React from 'react'

const ErrorHandlingPage = ({error}) => {
  return (
    <VStack w={"52"} shadow={"lg"} bgColor={"#dc3545"} textColor="white" h={"auto"} marginTop={"32"} marginBottom={"32"} rounded="2xl" p={"10"}  mx={"auto"} >
        <p>{error}</p>
        <p style={{fontSize:"10px"}}>Error while faching the data</p>
        <p style={{ fontSize:"12px" }}>Reload agane..</p>
    </VStack>
  )
}

export default ErrorHandlingPage