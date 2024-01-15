import React from 'react';
import Header from "../Composants/layout/Header"
import AboutBanner from "../Composants/About/AboutBanner"
import AboutContent from "../Composants/About/AboutContent"
import Footer from "../Composants/layout/Footer"

const About = () => {
    return(
        <>
            <Header />
            <AboutBanner />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About