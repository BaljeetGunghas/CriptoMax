import { Container } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ErrorHandlingPage from './ErrorHandlingPage';
import Loader from './Loader';
import NewsCard from './NewsCard';


const News = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(true);
    const [errorInfo, setErrorInfo] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news',
            params: { safeSearch: 'Off', textFormat: 'Raw' },
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '0e03cc040fmsh9d7980283f3319ap153fc1jsn84b8c527fa7d',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            setNews(response.data.value)
            setLoader(false);
        }).catch(function (e) {
            console.error(error);
            setErrorInfo(e.message);
            setError(true);
            setLoader(false);
        });
    },[error])
    

    return (
        <>
        {loader ?
            <Loader />
            :
            <>
                <Container maxW={"container.xl"} mt={["20",'24']}  className='exchange-main'  pb={'10'} flexWrap={'wrap'} >
                    {error ?
                        <ErrorHandlingPage error={errorInfo} />
                        :
                        <>
                            {news?.map((item, index) => {
                                return (
                                    <NewsCard key={index} item={item}  />
                                )
                            })}
                        </>
                    }
                </Container>
            </>
        }
    </>
    )
}

export default News