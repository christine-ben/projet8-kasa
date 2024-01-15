import React from 'react';
import Header from "../Composants/layout/Header"
import Erreur from "../Composants/PageErreur/Erreur";
import Footer from "../Composants/layout/Footer"

const PageErreur = () => {
    return(
        <>
            <Header />
            <Erreur />
            <Footer /> 
        </>
    )
}

export default PageErreur;