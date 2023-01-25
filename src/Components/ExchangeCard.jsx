    import { Image, VStack } from '@chakra-ui/react'
    import React from 'react'
    import './style/exchange.css'
    const ExchangeCard = ({ id, name, image, index, url, trust_score }) => {
        return (
            // <div className='exchanges-section'>
            //     <div className="mainExchangeHeading">
            //         <div className="left-Exchange">
            //             <img className='exchange-logo' src={image} alt="name" />
            //         </div>
            //         <div>
            //             <span>{index}</span>
            //             <span className='exchangeCard-name'>{name.length > 10 ? name.substring(0, 10) + "..." : name}  </span>
            //         </div>
            //     </div>
            //     <div className="exchangeinfo">
            //         <p>ID </p>
            //         <p>{id} </p>
            //     </div>
            //     {/* <div className="exchangeinfo">
            //         <p>Country </p>
            //         <p>{country ? country : "NA"} </p>
            //     </div> */}
            //     <div className="exchangeinfo">
            //         <p>T C R </p>
            //         <p>{trust_score_rank} </p>
            //     </div>
            //     <div className="exchangeinfo">
            //         <p>t s </p>
            //         <p>{trust_score} </p>
            //     </div>



            // </div>
            <a href={url} target="blank">
                <VStack className='exchanges-section' position={"relative"} transition={"all 0.3s"} >
                    <div className="mainExchangeHeading">
                        <div className="left-Exchange">
                            <Image src={image} alt={name} w={'7'} h={'7'} objectFit='contain' rounded={"full"} zIndex={"-1"} />
                            {/* <img className='exchange-logo' src={image} alt="name" /> */}
                        </div>
                        <div>
                            <span>{index}</span>
                            <span className='exchangeCard-name'>{name.length > 10 ? name.substring(0, 10) + "..." : name}  </span>
                        </div>
                    </div>
                    <div className="exchangecardInfo">
                        <span>Trust score</span>
                        {trust_score}
                    </div>
                    <div className="exchangecard-id">
                        {id.length > 10 ? id.substring(0, 15) + "..." : id}
                    </div>
                </VStack>
            </a >
        )
    }

    export default ExchangeCard