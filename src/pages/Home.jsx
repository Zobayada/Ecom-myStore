import React from 'react'
import FeatureProduct from '../component/FeatureProduct';
import HeroSection from '../component/HeroSection';
import Services from '../component/Services';
import Trusted from '../component/Trusted';

const Home = () => {
    const data = {
        name: "Store",
        img: "./images/heroImg.png"
    }
    return (
        < >
            <HeroSection myData={data} />
            <FeatureProduct />
            <Services />
            <Trusted />
        </>
    )
}


export default Home