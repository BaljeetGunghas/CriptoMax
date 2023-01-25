import React from 'react'
import { Badge, Image, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack, Box, HStack } from '@chakra-ui/react'
const CoinDetailsInfo = ({ coin, currency, currencySymbole }) => {


    return (
        <VStack spacing={'2'} px='16' alignItems={'flex-start'} w={['full', 'container.md']} mx='auto'>
            <Text fontSize={'small'} alignSelf='center' opacity={'0.7'}>
                Last Update on <span style={{'fontWeight': 'bold'}} > {Date(coin?.market_data?.last_updated).split("G")[0]}</span>
            </Text>
            <HStack display={'flex'} flexDirection={['row', 'column']} gap={["5", "0"]}  >
                <Image src={coin?.image?.large} objectFit='contain' w='16' h='16' alt={coin?.name} />
                <Stat>
                    <StatLabel mt={['0', '4']}>{coin?.name} </StatLabel>
                    <StatNumber>{currencySymbole}{coin?.market_data?.current_price[currency]} </StatNumber>
                    <StatHelpText>
                        <StatArrow type={coin?.market_data?.price_change_percentage_24h < 0 ? 'decrease' : 'increase'} />
                        {coin?.market_data?.price_change_percentage_24h}%
                    </StatHelpText>
                </Stat>
            </HStack>
            <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'} >

                {`#${coin?.market_data?.market_cap_rank}`}

            </Badge>

            <Box height='1' bg={'gray.400'} w={'full'} >
                <Box bg={coin?.market_data?.price_change_percentage_24h > 0 ? 'green.500' : 'red.500'} h={'full'} w={ coin?.market_data?.market_cap_change_percentage_24h>0 ? `${coin?.market_data?.market_cap_change_percentage_24h}%` : coin?.market_data?.market_cap_change_percentage_24h*(-1) }></Box>
                <Box display={'flex'} justifyContent={'space-between'} mt={'1'} >
                    <Text bg={'red.200'} px={'1'} color={'red.700'}> {`${currencySymbole} ${coin?.market_data?.low_24h[currency]}`}  </Text>
                    <Text bg={'green.200'} px={'1'} color={'green.700'}> {`${currencySymbole}${coin?.market_data?.high_24h[currency]}`}  </Text>
                </Box>
            </Box>
        </VStack>
    )
}

export default CoinDetailsInfo