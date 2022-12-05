import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Wrapper>
            <h2 className='common-heading'>Contact Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.274170313899!2d91.39752581444203!3d23.01370342243577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536836a590473b%3A0x2ae4b9345425e170!2sGrand%20Hoque%20Tower!5e0!3m2!1sen!2sbd!4v1670216379523!5m2!1sen!2sbd" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mvoyeolz" method="post" className='contact-inputs'>
                        <input type="text" placeholder='Enter Your Name' name='username' required autoComplete='off' />
                        <input type="email" placeholder='Enter Your Email' name='email' required autoComplete='off' />
                        <textarea name="message" cols="30" rows="10" placeholder='Enter Your Message' required autoComplete='off'></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact
