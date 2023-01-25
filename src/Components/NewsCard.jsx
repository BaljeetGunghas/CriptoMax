import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './style/exchange.css'

const NewsCard = ({ item }) => {
    return (
        <a href={item?.url} target={'blank'} className='newsLink'   >
            <VStack className='NewscardSection' position={"relative"} transition={"all 0.3s"} >
                <HStack justifyContent={'space-between'} h={'auto'} alignItems={'flex-start'}>
                    <Text fontSize={'lg'} fontWeight={'semibold'}>
                        {item?.name}
                    </Text>
                    <Image src={item?.image?.thumbnail?.contentUrl ? item?.image?.thumbnail?.contentUrl :'https://www.psykososialberedskap.no/wp-content/themes/rvts_psb_sage-2.0/resources/assets/images/default-placeholder.png' } alt={item?.name} w={'20'} h={'20'} objectFit='contain' />
                </HStack>
                <Text fontSize={'sm'}>
                    {item?.description}
                </Text>
                <HStack justifyContent={'space-between'} w={'full'} alignItems={'center'} py={'2'}  >
                    <HStack >
                        <Image src={item?.provider[0]?.image?.thumbnail?.contentUrl ? item?.provider[0]?.image?.thumbnail?.contentUrl :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"} alt={'image'} w={'7'} h={'7'} objectFit='contain' rounded={"full"} />
                        <Text fontSize={'small'}> {item?.provider[0]?.name} </Text>
                    </HStack>
                    <Text fontWeight={'semibold'} fontSize={'smaller'} > {new Date(item?.datePublished).toLocaleDateString()} {new Date(item?.datePublished).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </Text>
                </HStack>
            </VStack>
        </a >
    )
}

export default NewsCard