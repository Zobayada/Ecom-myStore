import React from 'react';
import styled from 'styled-components';
import { Button } from '../pages/Button';
import { NavLink } from 'react-router-dom';
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3>
                    </div>
                    <div>
                        <Button className="btn hireme-btn">
                            <NavLink to="/"> Get Started </NavLink>
                        </Button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Afnan Tech</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" placeholder='Enter Your Email' />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className='footer-social--icons'>
                            <div>
                                <FaLinkedinIn className="icons" />
                            </div>
                            <div>
                                <BsTwitter className="icons" />
                            </div>
                            <div>
                                <FaFacebookF className="icons" />
                            </div>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <a href='tel: 01735954429'>+880 1735954429</a>
                    </div>
                </div>

                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column ">
                        <p>
                            &copy;{new Date().getFullYear()} AfnanTech. All Rights Reserved
                        </p>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: red;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
      div:hover{
        background-color: red;
        .icons{
            color: #fff;
        }
      }
    }
    .footer-contact a{
        color: #fff;
        font-size: 1.8rem;
        font-weight: 400;
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;


export default Footer
