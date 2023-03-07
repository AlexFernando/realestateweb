import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';

import Loading from './Loading';
import Loader from './Loading2'
import Properties from './properties';
import RentSell from './RentSellComponent'
import SearchBar from './SearchBar'
import Testimonials from './Testimonials'
import logo from '../images/logo.png';

import { IconContext } from "react-icons";
import {GiFamilyHouse, GiSpookyHouse, GiHouse} from 'react-icons/gi';

import Hero from './ParallaxBg';

const Home = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/home/");
    }, []);
    
    const pageHomeData = state.source.page[12];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>     
                {typeof pageHomeData === "undefined" ? <Loading /> :     
                    <>
                        <MarginTopContainer></MarginTopContainer>
                            <Main>
                                <Overlay>
                                    <video autoPlay playsInline muted loop>
                                        <source src="https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4" type="video/mp4" />
                                    </video>

                                    <TextoImagenContainer>
                            
                                        <TextoImagen>
                                            <h2>Your home, our priority</h2>
                                            <h3>Classic Jerusalem</h3>

                                            <ButtonContainer>
                                                <ButtonParallax>
                                                    <a href="/properties/">Rent</a>
                                                </ButtonParallax>  
                                                <ButtonParallax>
                                                    <a href="/properties/">Sell</a>
                                                </ButtonParallax>  
                                            </ButtonContainer>
                                        
                                        </TextoImagen>

                                        <SearchBar></SearchBar>
                        
                                    </TextoImagenContainer>      

                                </Overlay>
                        
                            </Main>


        

                
            
                        <SectionFeaturedProperties>
                            <MarginPaddingContainer>
                                <SectionTitle>Featured Properties</SectionTitle>
                                <UnderlineTitle>
                                    <span></span>
                                </UnderlineTitle>
                                <Properties />
                            </MarginPaddingContainer> 
                        </SectionFeaturedProperties>  

                        <SectionAbout>
                            <MarginPaddingContainer>

                                <SectionTitle>About</SectionTitle>
                                <UnderlineTitle>
                                    <span></span>
                                </UnderlineTitle>


                                <CardAbout>
                                    <AboutParagraph>  
                                        <p>
                                        Classic Jerusalem is a certified, independent Real Estate Agency since 2010, connecting the right people with the right properties.
                                        Our goal is to help you find the perfect match, whether you are selling, buying, or renting.
                                        We believe in being and staying involved through all stages of the real estate process.
                                        Our growing network of buyers, owners, and tenants, will open doors for our partners on all sides of the real estate equation.
                                        We will guide you every step of the way.</p>
                                    </AboutParagraph>

                                    <IconsContainer>
                                        <IconText>
                                            <IconContext.Provider value={{color: "#df9b00", className: "global-class-name", size: "4rem" } }>
                                                <GiFamilyHouse />
                                            </IconContext.Provider>
                                            <p>Find the perfect match</p>
                                        </IconText>
                                    
                                        <IconText>
                                            <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "4rem" } }>
                                                <GiSpookyHouse />
                                            </IconContext.Provider>
                                            <p>Involved through all stages</p>
                                        </IconText>

                                        <IconText>
                                            <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "4rem" } }>
                                                <GiHouse />
                                            </IconContext.Provider>
                                            <p>  We will guide you every step of the way.</p>
                                        </IconText>
                                    </IconsContainer>

                                </CardAbout>
                             
                            </MarginPaddingContainer>
                        </SectionAbout>

              
                        <RentSell />
    
                        <ContactBackgroundImage>
                            <ContactLayerGradient>
                            
                                <ContactText>
                                    <h2>Looking to Sell your Property?</h2>
                                    <p> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nunc ac luctus tellus, ut lobortis diam. Vestibulum dapibus condimentum ullamcorper. Suspendisse nec libero placerat, 
                                        euismod felis a, faucibus enim. 
                                    </p>
                                </ContactText>
                                <ContactForm>
                                    <Html2react html={pageHomeData.content.rendered} />
                                </ContactForm>
                             
                            </ContactLayerGradient>
                        </ContactBackgroundImage>
                        
                        <SectionTestimonial>
                            <Testimonials />  
                        </SectionTestimonial>
                       
                     
                                   
                    </> 
                }
            
        </>
     );
}

export default connect(Home)

export const MarginTopContainer = styled.div`
    margin-top: 90px;

    @media (max-width: 1024px) {
      margin-top: 100px;
    }
`;


/**BACKGROUND VIDEO */  
export const Main = styled.section`

  height: 620px;
  position: relative;
  /* margin-top: 7vh; */

    @media (min-width: 1025px) and (max-width: 1367px) {
        height: 450px;
    }

    @media (min-width: 1368px) and (max-width: 1672px) {
        height: 600px;
    }
  
`

export const Overlay = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    font-family: 'Lato';
    background-image: linear-gradient(180deg, rgba(0,0,0,.5)  0%, rgba(200,139,0, 0.4) 100%);
    background-repeat: no-repeat;

    @media(max-width: 768px) {
        height: 600px;
    }

    video {
        /* position: absolute; */
        position: fixed;
        top: -30vh;
        left: 0;
        width: 100vw;
        height: 100%;
        z-index: -1;
        background-repeat: no-repeat;

        @media(max-width: 1024px) {
            height: 600px;
            top: 0;
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
            top: -10vh;
        }

        @media (min-width: 1281px) and (max-width: 1672px) {
            top: -10vh
        }
    }

    @media (min-aspect-ratio: 16/9) {
        video {
            width:100%;
            height: auto;
        }
    }

    @media (max-aspect-ratio: 16/9) {
        video { 
            width:auto;
            height: 100%;
        }
    }
`

const TextoImagenContainer = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    overflow-wrap: break-word;
    height: 100%;

    @media (max-width: 480px) {
        height: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        height: 100%;
    }
`
const TextoImagen = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    h2 {
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-top: 5rem;
        font-weight: 500;

        @media(min-width: 1368px) {
            font-size: 2rem;
            padding-top: 0;
            font-weight: 900;
        }
    }

    h3 {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.8;

        @media(min-width: 1368px) {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 2rem;
        }
    }
`


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ButtonParallax = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: auto 1rem;

    a {
        text-decoration: none;
        background-color: var(--golden);
        text-transform: uppercase;
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1rem;

        @media(max-width: 1368px) {
            padding: .8rem 1rem;
            font-size: .8rem;
        }

        &:hover {
            background-color: #0c0c0c;
            transition: all 0.4s;
        }
    }
`

/**ENDS BACKGROUND VIDEO */
  
/*SECTION ABOUT */
export const SectionAbout = styled.section`
    background-color: #fff;
    padding: 1rem 0 1rem 0;
    position: relative;
    color: #fff;
    background: linear-gradient(180deg, rgba(0,0,0,.8)  0%, rgba(200,139,0, 0.4) 100%);

  /* background: linear-gradient(45deg, rgb(26, 1, 117) 0%, rgba(225, 5, 34, 0) 70%) repeat scroll 0% 0%, 
  linear-gradient(135deg, rgb(225, 5, 152) 10%, rgba(49, 5, 209, 0) 80%) repeat scroll 0% 0%, 
  linear-gradient(225deg, hsla(179, 81%, 45%, 1) 10%, rgba(10, 219, 216, 0) 80%) repeat scroll 0% 0%,
   rgba(0, 0, 0, 0) linear-gradient(315deg, rgb(189, 5, 245) 100%, rgba(9, 245, 5, 0) 70%) repeat scroll 0% 0%;*/
`

const CardAbout = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    height: 100%;
`
const AboutParagraph = styled.div`
    line-height: 1.8;
    margin: 1rem auto;
    text-align: justify;

    p {
        font-size: var(--step--1);

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--2);
        }
    }
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`

const IconText = styled.div`
   display: flex;
   flex-direction: column;
   flex-basis: 30%;
   align-items: center;
   text-align: center;

   p {
     font-size: var(--step--1);

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--2);
        }
   }
`

/**SECTION FEATURED PROPERTIES */
export const SectionTitle = styled.h2`
    font-family: 'Lato';
    font-size: 35px;
    font-size: var(--step-2);
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: 10px;
    text-align: center;
    
    @media (min-width: 1024px) and (max-width: 1440px){
        font-size: var(--step-1);
    }
`
export const UnderlineTitle = styled.div`
    height: 35px;
    height: var(--step-2);
    position: relative;
    text-align: center;

    @media (min-width: 1024px) and (max-width: 1440px){
        height: var(--step-1);
    }

    span {
        position: absolute;
        background-color: #cba631;
        bottom: 0;
        top: 0;
        width: 1px;
        height: 100%;

        &:before {
            width: 140px;
            width: clamp(4.49rem, calc(5.62rem + 1.33vw), 7.82rem);
            height: 1px;
            background-color: #cba631;
            position: absolute;
            left: 50%;
            top: 9px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-50%);

            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(2.49rem, calc(3.62rem + 1.33vw), 5.82rem);
            }

        }

        &:after {
            width: 100px;
            width: clamp(2.49rem, calc(2.62rem + 1.33vw), 4.82rem);
            height: 1px;
            position: absolute;
            left: 50%;
            top: 15px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-50%);

            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(1.49rem, calc(1.62rem + 1.33vw), 3.82rem);
            }
        }
    }
`

export const SectionFeaturedProperties = styled.section`
    background-color: #f7f7f7;
    padding: 1rem 0;
    position: relative;
`

export const MarginPaddingContainer = styled.div`
    width: min(98%, 77.5rem + 10vw);
    margin-inline: auto;
    text-align: center; 
    /* margin: 2% auto;
    text-align: center; */

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(98%, 57.5rem + 10vw);
    }


    /* @media (min-width: 1280px) and (max-width: 1368px){
        max-width: 80vw;
    }

    @media (min-width: 1280px) and (max-width: 1420px){
        max-width: 80vw;
    }


    @media (min-width: 1420px){
        max-width: 67vw;
    } */

`

/**SECTION CONTACT LOOKING FOR SALE */
export const ContactBackgroundImage = styled.section`
    background-image:url('https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/aparment_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* Set a specific height */
    min-height: 400px; 
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
`

const ContactLayerGradient = styled.div`
    display: flex;
    color: #FFF;
    display: flex;
    padding: 1.5rem 2rem;
    justify-content: center;
    align-content: flex-start;
    overflow-wrap: break-word;
    height: auto;
    font-family: 'Lato';
    background-image: linear-gradient(180deg, rgba(0,0,0,.8)  0%, rgba(200,139,0, 0.4) 100%);
    height: 100%;
    
    @media(max-width: 768px) {
        flex-direction: column;
        align-content: center;
    }
`

const ContactText = styled.div`
    margin: auto 2rem;
    flex-basis: 30%;
    
    @media(max-width: 768px) {
        margin: auto 0rem;
    }

    h2 {
        font-size: var(--step-2);
        font-weight: 400;

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step-1);
        }
    }

    p {
        line-height: 1.8;
        font-size: var(--step--1);
        font-weight: 300;
        letter-spacing: 1px;

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--2);
        }
    }
`

const ContactForm = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: rgba(255, 255, 255, 1);
    border-radius: .4rem;
    padding: 2rem;
    font-size: 1.1rem;
    border: 1px solid #ebebeb;
    line-height: 1.2;
    margin: 3rem 2rem;

    @media (min-width: 1024px) and (max-width: 1440px){
        padding: 1.5rem;
    }

    p {
        font-size: 14px;
        font-size: clamp(.8rem, calc(0.40rem + 0.54vw), 1.20rem);
        color: #484848;
        line-height: 1.714;
        margin-bottom: 20px;
    }
  
    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        margin: auto;
    }

    .wp-block-group {


        @media(max-width: 768px) {
        
                width: 100%;
                height: 100%;
            
        }
    }

    .wpcf7  {

        @media(max-width: 768px) {
            iframe {
                width: 100%;
                height: 100%;
            }
        }

        h3 {
            margin-bottom: 4rem;
        }
    }


    input, textarea {

        &:focus {
           outline: none;
        } 
    }


    input, textarea, select {
        height: 100%;
        padding:10px;
        color: #484848;
        margin: 0; 
        border: 1px solid rgba(97, 97, 97, 0.4);
        border-radius:5px;
        max-width:100%;
        margin-inline: auto;
        font-family: 'Lato', sans-serif;
    }

    @media(max-width: 768px) {
        input, textarea, select {
            width: 90%;
        }
    }

    textarea {
        height: 150px;
    }

    input[type="submit"] { 
        width: auto;
        background-color: var(--golden);
        height: 48px;  
        padding: 1.5rem;
        text-transform: none;
        border: 1px solid #fff;
        font-weight: 500;
        font-size: 1rem;
        font-size: clamp(.8rem, calc(0.40rem + 0.54vw), 1.20rem);
        text-transform: capitalize;
        color: #FFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        padding: 2px 24px;
        position: relative;

        @media(max-width: 768px) {
            width: 100%;
            
        }
    
        &:hover {
            background-color: #bf930d;
            transition: all 0.4s;
        }
    }

    a {
        text-decoration: none;
        color: #ff8562;
    }
`;


/**END SECTION CONTACT LOOKING FOR SALE */

/*SECTION TESTIMONIALS */
export const SectionTestimonial = styled.section`
    background-color: #fff;
    padding: 1rem 0 10rem 0;
    position: relative;
`