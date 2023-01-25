import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Coin from './Components/Coin'
import CoinDetails from './Components/CoinDetails'
import Exchange from './Components/Exchange'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import News from './Components/News'
import './Components/style/global.css'


const App = () => {
console.log('...///');
    return (
        <Router >
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/coin' element={<Coin />} />
                <Route path='/news' element={<News />} />
                <Route path='/exchange' element={<Exchange />} />
                <Route path='/coin/:id' element={<CoinDetails />} />
            </Routes>
            <Footer />
        </Router>
    )
}


export default App

