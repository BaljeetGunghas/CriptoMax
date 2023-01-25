import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ErrorHandlingPage from './ErrorHandlingPage'
import Loader from './Loader'
import './style/exchange.css'
import { Box, Button, Heading, HStack, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react'
import CoinDetailsInfo from './CoinDetailsInfo'
import CoinDetailsItem from './CoinDetailsItem'
import Chart from './Chart'


const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState();
  const [currency, setCurrency] = useState('inr')
  const [loader, setLoader] = useState(true)
  const [chartdata, setChartdata] = useState([])
  const [days, setdays] = useState("24h")
  const [activedays, setActivedays] = useState("1D")
  const [coinNews, setCoinNews] = useState([])

  const param = useParams()
  const currencySymbole = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const btn = ["1D", "1W", "1M", "6M", "1Y", "5Y"]

  useEffect(() => {
    window.scrollTo(0, 0);

    const options = {
      method: 'GET',
      url: `https://bing-news-search1.p.rapidapi.com/news/search`,
      params: { q: `${coin.symbol}`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '0e03cc040fmsh9d7980283f3319ap153fc1jsn84b8c527fa7d',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };

    axios.get(`https://api.coingecko.com/api/v3/coins/${param.id}`)
      .then((coininfo) => {
        setCoin(coininfo.data)
        setError(false);
        setLoader(false);


        axios.request(options).then(function (CoinSNews) {
          setCoinNews(CoinSNews?.data?.value)
          // console.log(coinNews, 'coinNews');
          setLoader(false);
        }).catch(function (error) {
          console.error(error);
          setError(true);
          setLoader(false);
          setErrorInfo(error.message);
        });

      }).catch((e) => {
        console.log(e);
        setError(true);
        setLoader(false);
        setErrorInfo(e.message);
      })

    axios.get(`https://api.coingecko.com/api/v3/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`)
      .then((chartd) => {
        setChartdata(chartd?.data?.prices);
        setLoader(false);
      }).catch((e) => {
        console.log(e);
        setError(true);
        setLoader(false);
        setErrorInfo(e.message);
      })



  }, [currency, param.id, days, activedays, coin.symbol])

  const changedayHandler = (key) => {
    switch (key) {
      case "1W":
        setdays("7d");
        setLoader(true);
        setActivedays(key)
        break;
      case "1M":
        setdays("30d");
        setLoader(true)
        setActivedays(key)
        break;
      case "6M":
        setdays("180d");
        setLoader(true)
        setActivedays(key)
        break;

      case "1Y":
        setdays("365d");
        setLoader(true)
        setActivedays(key)
        break;

      case "5Y":
        setdays("max");
        setLoader(true)
        setActivedays(key)
        break;

      default:
        setdays("24h");
        setLoader(true)
        break;
    }
  }

  if (error) return <ErrorHandlingPage error={errorInfo} />

  return (
    loader ?
      <Loader />
      :
      <>
        <VStack mt={"14"} mx="auto" px={['10']} w={['full', 'container.md']} >
          <Chart chartdata={chartdata} currency={currencySymbole} days={days} />
          <HStack flexWrap={'wrap'} >
            {btn.map((i) => {
              return <Button key={i} fontSize={"small"} bgColor={activedays === i ? 'green.100' : 'transparent'} color={activedays === i ? 'green.400' : 'blackAlpha.700'} onClick={() => changedayHandler(i)} p={'0'} rounded={'3xl'}  >{i} </Button>
            })}
          </HStack>
          <RadioGroup value={currency} onChange={setCurrency} p={["4", "8"]} float={'left'} >
            <HStack>
              <Radio value='inr' > ₹ INR </Radio>
              <Radio value='eur' > € EUR </Radio>
              <Radio value='usd' > $ USD </Radio>
            </HStack>
          </RadioGroup>
        </VStack>
        <CoinDetailsInfo coin={coin} currency={currency} currencySymbole={currencySymbole} />
        <Box w={['auto', 'container.md']} m='10' mx={['10', 'auto']} p={'2'} border='1px' borderColor='gray.200'>
          <CoinDetailsItem title="Max Supply" value={coin?.market_data?.max_supply} />
          <CoinDetailsItem title="Circulating Supply" value={coin?.market_data?.circulating_supply} />
          <CoinDetailsItem title="Circulating Supply" value={`${currencySymbole} ${coin?.market_data?.market_cap[currency]}`} />
          <CoinDetailsItem title="All Time Low" value={`${currencySymbole} ${coin?.market_data?.atl[currency]}`} />
          <CoinDetailsItem title="All Time High" value={`${currencySymbole} ${coin?.market_data?.ath[currency]}`} />
        </Box>

        <VStack px={'5'} w={['auto', 'container.md']} mx={['1', 'auto']} mb={'10'}  >
          <Heading fontSize={'large'} textTransform={'capitalize'}  > News Related to {param.id} </Heading>
          <HStack flexWrap={'wrap'} gap="5">
            {
              coinNews.map((item, index) => {
                return (
                  <a href={item?.url} target={'blank'} key={index} style={{ 'width': 'auto' }}  >
                    <VStack className='NewscardSection' position={"relative"} transition={"all 0.3s"} >
                      <HStack justifyContent={'space-between'} w={'full'} h={'auto'} alignItems={'flex-start'}>
                        <Text fontSize={'lg'} fontWeight={'semibold'}>
                          {item?.name}
                        </Text>
                        <Image src={item?.image?.thumbnail?.contentUrl
                          ? item?.image?.thumbnail?.contentUrl
                          : coin?.image?.large} alt={item?.name} w={'20'} h={'20'} objectFit='contain' />
                      </HStack>
                      <Text fontSize={'sm'}>
                        {item?.description}
                      </Text>
                      <HStack justifyContent={'space-between'} w={'full'} alignItems={'center'} py={'2'}  >
                        <HStack >
                          <Image src={item?.provider[0]?.image?.thumbnail?.contentUrl
                            ? item?.provider[0]?.image?.thumbnail?.contentUrl
                            : coin?.image?.large} alt={item?.provider[0]?.name} w={'7'} h={'7'} objectFit='contain' rounded={"full"} />
                          <Text fontSize={'small'}> {item?.provider[0]?.name} </Text>
                        </HStack>
                        <Text fontWeight={'semibold'} fontSize={'smaller'} > {new Date(item?.datePublished).toLocaleDateString()} {new Date(item?.datePublished).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </Text>
                      </HStack>
                    </VStack>
                  </a >
                )
              })
            }
          </HStack>
        </VStack>

      </>

  )
}

export default CoinDetails