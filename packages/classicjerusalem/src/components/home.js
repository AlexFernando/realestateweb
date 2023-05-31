import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';

import Loading from './Loading';
// import Loader from './Loading2';
// import LoadingComponent from './Loader3'
import Properties from './properties';
import RentSell from './RentSellComponent'
import SearchBar from './SearchBar'
import Testimonials from './Testimonials'
import logo from '../images/logo.png';

import { IconContext } from "react-icons";
import {GiFamilyHouse, GiSpookyHouse, GiHouse} from 'react-icons/gi';
import {BsHouseDoor, BsHouseDoorFill} from 'react-icons/bs'

import Hero from './heroComponent';
import FadeInOnScroll from './FadeInScroll'
import ZoomInOnScroll from './ZoomInEffect'
import Slider from './loadingImages'

/**MORE IMAGES LOADED */
import Rent from '../images/rent.jpg';
import Buy from '../images/buy_couple.jpg';
import Sell from '../images/sell_adult.jpg';
import RealEstateAgent from '../images/real_estate_agent.jpg'
import {ImageFooter} from './footer-one';
import LinkViewMore from './LinkViewMore'
import AboutSection from './AboutSection'

const Home = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/home/");
    }, []);
    
    const pageHomeData = state.source.page[12];

    const Html2react = libraries.html2react.Component;
    
    const images = [];

    if(typeof pageHomeData !== "undefined"){
        
        const ImageSlider = pageHomeData.acf.images_slider;

        Object.keys(ImageSlider).map(elem => {
            console.log(ImageSlider[elem].url)
            images.push(ImageSlider[elem].url)
        })   
    }

    return ( 
        <>     
                {typeof pageHomeData === "undefined" ? <Loading /> :     
                    <>
                        <MarginTopContainer></MarginTopContainer>
                            <Main>
                                <Overlay>

                                    <Hero images = {images}/>

                                    <TextoImagenContainer>
                            
                                        <TextoImagen>
                                            <FadeInOnScroll>
                                                <h2>Your home, our priority</h2>
                                            </FadeInOnScroll>

                                            <FadeInOnScroll>
                                                <h3>Classic Jerusalem</h3>
                                            </FadeInOnScroll>
                                            
                                            <UnderlineFullBackground>
                                                <IconTitle />
                                            </UnderlineFullBackground>
                            
                                        
                                        </TextoImagen>



                                        <SearchBar></SearchBar>
                        
                                    </TextoImagenContainer>      

                                </Overlay>
                        
                            </Main>
                                            
            
                        <SectionFeaturedProperties>
                            <MarginPaddingContainer>
                                <FadeInOnScroll>
                                    <SectionTitle>Featured Properties</SectionTitle>
                                </FadeInOnScroll>
                                {/* <UnderlineTitle>
                                    <span></span>
                                </UnderlineTitle> */}
                             
                                    <Properties />
                           
                            </MarginPaddingContainer> 
                        </SectionFeaturedProperties>  
                    
                        <AboutSection />
              
                        <RentSell />
    
                        <SectionServices>
                            <MarginPaddingContainer>
                                <ContactText>
                                    <FadeInOnScroll>
                                        <SectionTitleAlternative>ARE YOU LOOKING  TO SELL / RENT/ AIRBNB YOUR PROPERTY? </SectionTitleAlternative> 
                                        <UnderlineFullBackground>
                                        <IconTitle />
                                        </UnderlineFullBackground>
                                        {/* <UnderlineTitle><span></span></UnderlineTitle> */}
                                    </FadeInOnScroll>
                                    
                                    <FadeInOnScroll>
                                        <p> 
                                            we have qualified clients ready to go . let’s start working
                                        </p>
                                    </FadeInOnScroll>
                                </ContactText>
                                
                                <ContainerServices>
                                    <FadeInOnScroll>
                                    <CardService>
                                        <ImageFooter src={Rent} />
                                        <h3>Sell</h3>
                                        <p>Sell your Aparment</p>
                                        <LinkViewMore href="#">View More</LinkViewMore>
                                    </CardService>
                                    </FadeInOnScroll>

                                    <FadeInOnScroll>
                                    <CardService>
                                        <ImageFooter src={Buy} />
                                        <h3>Airbnb</h3>
                                        <p>Airbnb your aparment </p>
                                        <LinkViewMore href="#">View More</LinkViewMore>
                                    </CardService>
                                    </FadeInOnScroll>

                                    <FadeInOnScroll>
                                    <CardService>
                                        <ImageFooter src={Sell} />
                                        <h3>Rent</h3>
                                        <p>Rent your aparment long term </p>
                                        <LinkViewMore href="#">View More</LinkViewMore>
                                    </CardService>
                                    </FadeInOnScroll>

                                    <FadeInOnScroll>
                                    <CardService>
                                        <ImageFooter src={RealEstateAgent} />
                                        <h3>Market</h3>
                                        <p>Value your property</p>
                                        <LinkViewMore href="#">View More</LinkViewMore>
                                    </CardService>
                                    </FadeInOnScroll>
                                </ContainerServices>
                            </MarginPaddingContainer>
                        </SectionServices>
                             
                        <SectionTestimonial>
                            <Testimonials />  
                        </SectionTestimonial>
                    </> 
                }
            
        </>
     );
}

export default connect(Home)

const Text = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 20px;
  background-color: #ddd;
`;


export const MarginTopContainer = styled.div`
    margin-top: 90px;

    @media (max-width: 1024px) {
      margin-top: 100px;
    }
`;


/**BACKGROUND VIDEO */  
export const Main = styled.section`

  height: 750px;
  position: relative;
  /* margin-top: 7vh; */
    /* @media (max-width: 768px){
        height: 750px;
    } */

    /* @media (min-width: 1025px) and (max-width: 1367px) {
        height: 90vh
    } 

    @media (min-width: 1368px) and (max-width: 1672px) {
        height: 90vh;
    }  */
  
`

export const Overlay = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    font-family: 'Lato';
    /* background-image: linear-gradient(180deg, rgba(0,0,0,.5)  0%, rgba(200,139,0, 0.5) 100%);
  */
    background-image: linear-gradient(180deg, #000000D4 16%, #00000000 60%);

    background-repeat: no-repeat;

    @media(max-width: 768px) {
        height: 600px;
    }

    video {
        /* position: absolute; */
        position: fixed;
        /* top: -30vh; */
        left: 0;
        width: 100vw;
        height: 100%;
        z-index: -1;
        background-repeat: no-repeat;

        /* @media(max-width: 1024px) {
            height: 600px;
            top: 0;
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
            top: -10vh;
        }

        @media (min-width: 1281px) and (max-width: 1672px) {
            top: -10vh
        } */
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
    justify-content: space-between;
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
    margin-top: 5rem;

    h2 {
        text-transform: uppercase;
        font-size: var(--step-3);
        margin-top: 1rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-align: center;

        /* @media(min-width: 1368px) {
            font-size: 2rem;
            padding-top: 0;
            font-weight: 900;
        } */
    }

    h3 {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-size: var(--step-1);
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.5;
        letter-spacing: 2px;

        /* @media(min-width: 1368px) {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 2rem;
        } */
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
export const SectionTitleAlternative = styled.h2`
    font-family: 'Lato';
    font-size: 35px;
    font-size: var(--step-2);
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: 10px;
    text-align: center;
    position: relative; 
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
    position: relative; 

    &:before {
            width: 140px;
            width: clamp(4.49rem, calc(5.62rem + 1.33vw), 9.82rem);
            height: 3px;
            background-color: #cba631;
            position: absolute;
            top: 16px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-110%);
            width: 14rem;
            vertical-align: middle;

            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(2.49rem, calc(3.62rem + 1.33vw), 9.82rem);
                width: 9rem;
            }

            @media (max-width: 1023px){
                width: 4rem;
            }

        }

        &:after {
            width: 100px;
            width: clamp(2.49rem, calc(2.62rem + 1.33vw), 4.82rem);
            height: 3px;
            position: absolute;
            top: 16px;
            content: '';
            background-color: #c0962d;
            transform: translateX(10%);
            width: 14rem;

            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(1.49rem, calc(1.62rem + 1.33vw), 3.82rem);
                width: 9rem;
            }

            @media (max-width: 1023px){
                width: 4rem;
            }
        }
`


export const IconTitle = styled(BsHouseDoor)`

  color: var(--golden-icons);
  font-size: var(--step-2);
  text-align: center;
  font-weight: 100;
`;

export const IconTitleFill = styled(BsHouseDoorFill)`
  font-size: var(--step-2);
  text-align: center;
  font-weight: 100;
  fill:var(--golden-color);
`


export const FirstUnderlineTitle = styled.div`
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
        width: 5px;
        height: 100%;

        &:before {
            width: 140px;
            width: max(12rem + .5vw, 4rem);
            height: 2px;
            background-color: #cba631;
            position: absolute;
            left: 50%;
            top: 9px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-50%);

            @media (min-width: 1024px) and (max-width: 1440px){
                width: max(9rem + .5rem, 3rem)
            }

        }

        &:after {
            width: 100px;
            width: max(7rem + .5vw, 2rem);
            height: 2px;
            position: absolute;
            left: 50%;
            top: 15px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-50%);

            @media (min-width: 1024px) and (max-width: 1440px){
                width: max(3.82rem + .5rem, 1.49rem);
            }
        }
    }
`

const UnderlineFullBackground = styled.div`
    height: 35px;
    height: var(--step-2);
    position: relative;
    /* text-align: center; */
 
    @media (min-width: 1024px) and (max-width: 1440px){
        height: var(--step-1);
    }



        &:before {
            width: 140px;
            width: clamp(4.49rem, calc(5.62rem + 1.33vw), 9.82rem);
            height: 3px;
            background-color: #cba631;
            position: absolute;
            top: 10px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-110%);
            width: 14rem;
            vertical-align: middle;
        
            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(2.49rem, calc(3.62rem + 1.33vw), 9.82rem);
                width: 7rem;
            }

            @media (max-width: 1023px){
                width: 4rem;
            }

        }

        &:after {
            width: 100px;
            width: clamp(2.49rem, calc(2.62rem + 1.33vw), 4.82rem);
            height: 3px;
            position: absolute;
            top: 10px;
            content: '';
            background-color: #c0962d;
            transform: translateX(10%);
            width: 14rem;
            vertical-align: middle;
        

            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(1.49rem, calc(1.62rem + 1.33vw), 3.82rem);
                width: 7rem;
            }

            @media (max-width: 1023px){
                width: 4rem;
            }
        }
    

`


export const UnderlineTitle = styled.div`
    height: 35px;
    height: var(--step-2);
    position: relative;
    /* text-align: center; */
 
    @media (min-width: 1024px) and (max-width: 1440px){
        height: var(--step-1);
    }

    span {
        position: absolute;
        background-color: #c0962d;
        bottom: 0;
        top: 0;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #c0962d;
      
        /* height: 100%; */

        &:before {
            width: 140px;
            width: clamp(4.49rem, calc(5.62rem + 1.33vw), 9.82rem);
            height: 2px;
            background-color: #cba631;
            position: absolute;
            top: 2px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-110%);
            width: 14rem;
        
            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(2.49rem, calc(3.62rem + 1.33vw), 9.82rem);
                width: 7rem;
            }

            @media (max-width: 1023px){
                width: 4rem;
            }

        }

        &:after {
            width: 100px;
            width: clamp(2.49rem, calc(2.62rem + 1.33vw), 4.82rem);
            height: 2px;
            position: absolute;
            top: 2px;
            content: '';
            background-color: #c0962d;
            transform: translateX(10%);
            width: 14rem;

            @media (min-width: 1024px) and (max-width: 1440px){
                width: clamp(1.49rem, calc(1.62rem + 1.33vw), 3.82rem);
                width: 7rem;
            }

            @media (max-width: 1023px){
                width: 4rem;
            }
        }
    }
`

export const SectionFeaturedProperties = styled.section`
    background-color: #f7f7f7;
    padding: 1rem 0;
`

export const MarginPaddingContainer = styled.div`
    width: min(98%, 77.5rem + 10vw);
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
    /* margin: 2% auto;
    text-align: center; */

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(98%, 67.5rem + 10vw);
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

const SectionServices = styled.section`
    background-color: var(--main-color);
    color: #fff;
    padding: 3rem 0;
`

const ContainerServices = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2rem;
    color: #fff;

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        justify-items: normal;
    }

    @media (min-width: 576px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        justify-items: stretch;
    }
`

const CardService = styled.div`
    margin-left: auto;
    margin-top: 2rem;
    text-align: left;
    
    h3 {
        font-size: var(--step--1);
        text-transform: uppercase;
        color: var(--golden-color);
    }
   
    p {
        font-size: var(--step--1);
        margin-top: 0;

        font-size: var(--step--1);  
        line-height: 1.8;
        text-align: justify;
    }
`


export const ContactBackgroundImage = styled.section`
    background-image:url('https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/aparment_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* Set a specific height */
    height: 100%;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
`

const ContactText = styled.div`

    h2 {
        font-size: var(--step-2);
        font-weight: 400;

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step-1);
        }
    }

    p {
        line-height: 1.8;
        font-size: var(--step-0);
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: capitalize;

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--1);
        }
    }
`

export const ContactForm = styled.div`

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
        font-family: 'Lato', sans-serif;
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
        background-color: var(--golden-color);
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