import { HStack } from '@chakra-ui/react'
import React from 'react';

const Loader = () => {
    return (
        <>
            <div className='Loader'>
            <HStack>
                <div className="loadermain" />
                <p className='loadingheading'>Loading..</p>
            </HStack>
            </div>
        </>
    )
}

export default Loader