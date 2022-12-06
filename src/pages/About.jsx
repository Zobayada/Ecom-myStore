import React from 'react'
import HeroSection from '../component/HeroSection';
import { useGlobalProduct } from '../context/ProductContext';
const About = () => {

    const { names } = useGlobalProduct()

    const data = {
        name: "Shop",
        img: "./images/aboutImg.jpg"
    }
    return (
        <>
            {names}
            <HeroSection myData={data} />
        </>
    )
}

export default About