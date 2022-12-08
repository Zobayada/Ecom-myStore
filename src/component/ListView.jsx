import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../helpers/FormatPrice';
import { Button } from "../pages/Button";

const ListView = ({ products }) => {
    return (
        <Wrapper className='section'>
            <div className="container grid">
                {
                    products.map((curElm) => {
                        const { id, name, image, price, description } = curElm;
                        return (
                            <div className="card grid grid-two-column">
                                <figure>
                                    <img src={image} alt={name} />
                                </figure>
                                <div className="card-data">
                                    <h3>{name}</h3>
                                    <p><FormatPrice price={price} /></p>
                                    <p>{description.slice(0, 99)}...</p>
                                    <NavLink to={`/singleproducts/${id}`} className="btn-main">
                                        <Button className="btn">Read More</Button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      color: red;
      &:hover {
        background-color: red;
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: red;
        font-size: 1.4rem;
      }
    }
    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView