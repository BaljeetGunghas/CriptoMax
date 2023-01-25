import { Container } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ErrorHandlingPage from './ErrorHandlingPage'
import ExchangeCard from './ExchangeCard'
import Loader from './Loader'
import './style/exchange.css'

const Exchange = () => {

    const [exchange, setExchange] = useState([]);
    const [error, setError] = useState(false);
    const [errorInfo, setErrorInfo] = useState();
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        window.scrollTo(0, 0);
        setLoader(true)
        axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1`)
            .then((criptolist) => {
                setExchange(criptolist.data)
                setError(false);
                setLoader(false)

            }).catch((e) => {
                console.log(e);
                setError(true);
                setErrorInfo(e.message);
                setLoader(false)

            })
    }, [])


    return (
        <>
            {loader ? <Loader />
                :
                <Container maxW={"container.md"} my={["20",'24']}  className='exchange-main'>
                    {error ?
                        <ErrorHandlingPage error={errorInfo} />
                        :
                        <>
                            {exchange.map((item, index) => {
                                return (
                                    <ExchangeCard key={index} name={item.name} id={item.id} image={item.image} country={item.country} index={index + 1} url={item.url} trust_score={item.trust_score} />
                                )
                            })}
                        </>
                    }
                </Container>
            }
        </>
    )
}



export default Exchange