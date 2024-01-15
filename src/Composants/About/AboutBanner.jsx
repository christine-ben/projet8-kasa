import React from 'react';
import Banner from '../layout/Banner';
import bannerAbout from '../../assets/banner-about.png'

const BannerAbout = () => {
    return(
        <Banner
            title='À propos'
            src={bannerAbout}
        />
    )
}

export default BannerAbout;