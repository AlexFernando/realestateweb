import React from 'react';
import {styled } from "frontity";
import { IconContext } from "react-icons";
import { FaTripadvisor, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import {SocialMediaSuperior} from '../components/header/header'
 
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


            <IconsContainer>

                <h4>Follow us</h4>
                <ul>
                
                    <li>
                        <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.7rem" } }>
                            <FaWhatsapp />
                        </IconContext.Provider>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/ClassicJerusalem" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.7rem" } }>
                            <FaFacebook />
                        </IconContext.Provider> 
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/classicjerusalem/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.7rem" } }>
                            <FaInstagram />
                        </IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </IconsContainer>

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
        </ContactContainer >

    );
}

export default InfoFooter;

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem 8rem;
    grid-gap: 1rem;
    background-color: #000;
    color: #fff;
    justify-items: center;
    
    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        padding: 1rem;
        justify-items: normal;
    }

    @media (min-width: 576px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        padding: 1rem 1.5rem;
        justify-items: stretch;
    }

    @media (min-width: 1025px) and (max-width: 1440px){
        padding: 1rem 2rem;
    }
`;

const ContactElement = styled.div`

    display: block;
    line-height: 2;

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin: 1rem 0;
    }

    h4 {
        font-size: 1rem;
        font-size: var(--step-0);
    }
   
    p {
        font-size: 14px;
        font-size: var(--step--1);
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
                font-size: var(--step--1);
                text-decoration: none;
            }
        }

    }
`;

export const IconsContainer = styled.div`

    display: block;
    line-height: 2;    

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin: 1rem 0;
        line-height: 2.5;
    }

    h4 {
        font-size: 1rem;
        font-size: var(--step-0);
    }
   
    p {
        font-size: 14px;
        font-size: var(--step--1);
        margin-top: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-content: center;

        li {
            list-style: none;
            margin-top: 0;
            margin-right: 1rem;

            a {
                color : #fff;
                font-size: 14px;
                font-size: var(--step--1);
                text-decoration: none;
            }
        }

    }
`