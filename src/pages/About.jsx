import React from 'react'
import HeroSection from '../component/HeroSection'

const About = () => {
    const data = {
        name: "Shop",
        img: "./images/aboutImg.jpg"
    }
    return (
        <HeroSection myData={data} />
    )
}

export default About