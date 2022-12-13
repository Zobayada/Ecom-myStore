import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../pages/Button';

const HeroSection = ({ myData }) => {

  const { name, img } = myData
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>my<span style={{ color: "#3f51b5", fontWeight: "bold" }}>{name}</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eos natus nam, maiores totam aliquam alias, hic rerum nesciunt cupiditate voluptatibus tempora quos excepturi doloremque dolorem. Officia minus corporis soluta.</p>
            <NavLink to="/product">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src={img} alt="header mobile" className='img-style' />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1{
        font-weight: 500;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 80%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 30%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection
