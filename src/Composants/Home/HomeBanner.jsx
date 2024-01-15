import React from 'react';
import Banner from '../layout/Banner';
import homeBanner from '../../assets/banner-home.png'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;