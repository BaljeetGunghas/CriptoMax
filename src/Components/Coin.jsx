import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CoinCard from './CoinCard'
import ErrorHandlingPage from './ErrorHandlingPage'
import Loader from './Loader'
import './style/exchange.css'

const Coin = () => {

    
    const [coins, setCoins] = useState([]);
    const [error, setError] = useState(false);
    const [errorInfo, setErrorInfo] = useState();
    const [currency, setCurrency] = useState('inr')
    const [page, setpage] = useState(1)
    const [loader, setLoader] = useState(true)

    const btnArr = new Array(125).fill(1);

    const currencySymbole = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`)
            .then((criptolist) => {
                setCoins(criptolist.data)
                setError(false);
                setLoader(false);
             
            }).catch((e) => {
                console.log(e);
                setError(true);
                setLoader(false);
                setErrorInfo(e.message);
            })
    }, [currency, page])

    const changepage = (pno) => {
        setpage(pno);
        setLoader(true)
        window.scrollTo(0, 0);
    }


    return (
        <>
            {loader ?
                <Loader />
                :
                <>
                    <RadioGroup maxW={"container.md"} value={currency} onChange={setCurrency} p={"8"} mt={'10'}  mx={["0",'auto']} >
                        <HStack>
                            <Radio value='inr' > ₹ INR </Radio>
                            <Radio value='eur' > € EUR </Radio>
                            <Radio value='usd' > $ USD </Radio>
                        </HStack>
                    </RadioGroup>
                    <Container maxW={"container.md"} m={["0",'auto']} className='exchange-main' pb={'10'} >
                        {error ?
                            <ErrorHandlingPage error={errorInfo} />
                            :
                            <>
                                {coins.map((item, index) => {
                                    return (
                                        <CoinCard key={index} name={item.name} id={item.id} image={item.image} symbol={item.symbol} price={item.current_price} currencySymbole={currencySymbole} />
                                    )
                                })}
                                <HStack overflowX={"scroll"} className="coinButtonSec">
                                    {btnArr.map((i, index) => {
                                        return <Button key={index + 1} className={page === index + 1 && 'activeClass'} onClick={() => changepage(index + 1)} >{index + 1} </Button>
                                    })}
                                </HStack>
                            </>
                        }
                    </Container>
                </>
            }
        </>
    )
}



export default Coin