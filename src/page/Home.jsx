import React from 'react';
import Header from "../Composants/layout/Header"
import HomeBanner from "../Composants/Home/HomeBanner"
import DisplayCards from "../Composants/Home/displaycard"
import Footer from "../Composants/layout/Footer"

const Home = () => {
    return(
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home