import React from 'react';
import {styled } from "frontity";
import { IconContext } from "react-icons";
import { FaTripadvisor, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const InfoFooter = () => {

    return ( 
        <ContactContainer>
            <ContactElement>
                <h4>About Site</h4>
                <p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
            </ContactElement>

            <ContactElement>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li> <a href= "#"> Terms &amp; Conditions</a> </li>
                    <li><a href="#">Blog Info</a> </li>
                </ul>
            </ContactElement>
            <ContactElement>
                <h4>Stay in touch</h4>
                <ul>
                  
                    <li>
                        <a href="mailto:scohenben@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
                        scohenben@gmail.com
                        </a>
                    </li>

                    <li>
                        <a href="#" alt="address" aria-label="address"  rel="noreferrer">
                            San Sebastian Street, City Center, Jerusalem.
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                        +972586540969
                        </a>
                    </li>

                </ul>
            </ContactElement>

            <ContactElement>
                <h4>Follow us</h4>
            
                <ul>
                    <li>
                        <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.5rem" } }>
                            <FaWhatsapp />+972586540969
                        </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ClassicJerusalem/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.5rem" } }>
                            <FaFacebook />Facebook
                        </IconContext.Provider> 
                        </a>
                    </li>
                
                    <li>
                        <a href="https://www.instagram.com/classicjerusalem/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.5rem" } }>
                            <FaInstagram /> Instagram
                        </IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </ContactElement>
        </ContactContainer >

    );
}

export default InfoFooter;

const ContactContainer = styled.div`
    display: flex;
    /* background-color: #333333; */
    background-color: #000;
    color: #fff;
    justify-content: space-around;
    align-content: center;
    padding-right: calc(1rem + 1.5625vw);
    padding-left: calc(1rem + 1.5625vw);
 

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const ContactElement = styled.div`

    display: flex;
    flex-basis: 15%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    margin: 2rem 0;
    line-height: 2;

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin: 1rem 0;
        line-height: 2.5;
    }

    h4 {
        font-size: 1rem;
    }
   
    p {
        font-size: 14px;
        margin-top: 0;
    }
    /* @media(max-width: 768px) {
        padding: 1rem;
        margin: .5rem 0;
    } */

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        li {
            list-style: none;
            margin-top: 0;

            a {
                color : #fff;
                font-size: 14px;
                text-decoration: none;
            }
        }

    }
`;