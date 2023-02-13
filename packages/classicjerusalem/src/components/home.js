import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';

import Loading from './Loading';
import Properties from './properties';
import RentSell from './RentSellComponent'
import SearchBar from './SearchBar'
import Testimonials from './Testimonials'
import logo from '../images/logo.png';

import { IconContext } from "react-icons";
import {GiFamilyHouse, GiSpookyHouse, GiHouse} from 'react-icons/gi';

const Home = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/home/");
    }, []);
    
    const pageHomeData = state.source.page[12];

    return ( 
        <>     
                {typeof pageHomeData === "undefined" ? <Loading /> :     
                    <>
                        <MarginTopContainer>
                            {/* <Content> 
                                <TextoImagen>
                        
                                    <div>
                                        <h2>Your home, our priority</h2>
                                        <h3>Classic Jerusalem</h3>
                                        <div>
                                            <a href="/properties/">VIEW PROPERTIES</a>
                                        </div>  
                                    </div>

                                    <SearchBar></SearchBar>
                                   
                                </TextoImagen>      

                            </Content> */}

                            <Main>
                                
                               

                                <Overlay>
                                <video autoPlay playsInline muted loop>
                                    <source src="https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4" type="video/mp4" />
                                </video>

                                    <TextoImagen>
                            
                                        <div>
                                            <h2>Your home, our priority</h2>
                                            <h3>Classic Jerusalem</h3>
                                            <div>
                                                <a href="/properties/">VIEW PROPERTIES</a>
                                            </div>  
                                        </div>

                                        <SearchBar></SearchBar>
                        
                                    </TextoImagen>      

                                    
                                </Overlay>
                           
                         
                            </Main>

                   
                            {/* <video autoPlay loop>
                                <source src="https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4" type="video/mp4" />
                            </video>  */}
                       
                        </MarginTopContainer>

                
            
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
                            <ContainerAbout>
                                <h2>About</h2>

                                <UnderlineTitle>
                                    <span></span>
                                </UnderlineTitle>
                                <CardAbout>
                                    <AboutParagraph>
                                        Classic Jerusalem is a certified, independent Real Estate Agency since 2010, connecting the right people with the right properties.
                                        Our goal is to help you find the perfect match, whether you are selling, buying, or renting.
                                        We believe in being and staying involved through all stages of the real estate process.
                                        Our growing network of buyers, owners, and tenants, will open doors for our partners on all sides of the real estate equation.
                                        We will guide you every step of the way.
                                    </AboutParagraph>

                                    <IconsContainer>
                                        <IconText>
                                            <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "4rem" } }>
                                                <GiFamilyHouse />
                                            </IconContext.Provider>
                                            <p>Find the perfect match</p>
                                        </IconText>
                                    
                                        <IconText>
                                            <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "4rem" } }>
                                                <GiSpookyHouse />
                                            </IconContext.Provider>
                                            <p>involved through all stages</p>
                                        </IconText>

                                        <IconText>
                                            <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "4rem" } }>
                                                <GiHouse />
                                            </IconContext.Provider>
                                            <p>  We will guide you every step of the way.</p>
                                        </IconText>
                                    </IconsContainer>

                                </CardAbout>
                            
                            </ContainerAbout>
                        </SectionAbout>

              
                        
                        <RentSell />
    
                        
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
    margin-top: 12vh;

    @media(min-width: 768px) {
        margin-top: 12vh;
    }
`;

const TextoImagen = styled.div`
    /* @media (max-width: 768px) {
        background-image: url('https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/aparment_background.jpg');
        background-position: center;
        background-size: cover;
        opacity: 0.75;
        z-index: -2;
  } */

    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    overflow-wrap: break-word;
    height: 80vh;

    @media (max-width: 480px) {
        height: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
   
        h2 {
            text-transform: uppercase;
            font-size: 1.5rem;
            margin-top: 5rem;
            font-weight: 900;

            @media(min-width: 768px) {
                font-size: 2rem;
                padding-top: 0;
            }
        }

        h3 {
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 300;
            margin-top: 0;
            margin-bottom: 2rem;
            line-height: 1.8;
            /* font-family: 'Montserrat', sans-serif; */

            @media(min-width: 768px) {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 2rem;
            }
        }

            div {

                display: flex;
                justify-content: flex-start;
                align-items: center;

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

                    &:hover {
                        background-color: #444;
                        transition: all 0.4s;
                    }
                }

        }
    }    
`
/**BACKGROUND VIDEO */  
export const Main = styled.section`

  width: 100%;
  height: 100vh;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: linear-gradient(to bottom, rgba(34,35,46,0.3) 50%, rgba(34,35,46));
  font-family: Lato;



  video {
    /* position: absolute; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
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

/**ENDS BACKGROUND VIDEO */
  
/**ABOUT SECTION */

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-transform: uppercase;
        font-size: 1.5rem;
        padding: 1rem 5rem;

        @media(max-width: 768px) {
            font-size: 1.2rem;
            padding: 1rem;
        }
    }
`
export const Title = styled.h2`

    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    margin: 1.5rem 15%;
    text-transform: capitalize;
    text-align: center;
 
    @media(min-width: 768px) {
        font-size: 2.5rem;
    }

    @media(max-width: 768px) {
        font-size: 1.9rem;
        text-align: center;
        margin: 1rem 15%;
    }
`

/*SECTION ABOUT */
export const SectionAbout = styled.section`
    background-color: #fff;
    padding: 1rem 0 10rem 0;
    position: relative;
`

export const ContainerAbout = styled.div`

    margin-left: calc(14rem + 1.5625vw);
    margin-right: calc(14rem + 1.5625vw);
    margin-top: 3rem;
    max-width: 1800px;

    @media (min-width: 1201px) and (max-width: 1420px){
        max-width: 1400px;
        margin-left: calc(5rem + 1.5625vw);
        margin-right: calc(5rem + 1.5625vw);
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        max-width: 1140px;
        margin-left: calc(3rem + 1.5625vw);
        margin-right: calc(3rem + 1.5625vw);
    }

    @media (min-width: 769px)  and (max-width: 992px){
        max-width: 960px;
        margin-left: calc(2rem + 1.5625vw);
        margin-right: calc(2rem + 1.5625vw);
    }

    @media (min-width: 576px) and (max-width: 768px){
        max-width: 720px;
        margin-left: calc(1rem + 1.5625vw);
        margin-right: calc(1rem + 1.5625vw);   
      
    }

    @media (max-width: 576px){
        max-width: 540px;
      
        margin-left: 1rem;
        margin-right: 1rem;  
    }

    h2 {
        font-family: 'Lato';
        font-size: 35px;
        font-weight: 400;
        letter-spacing: -1px;
        margin-bottom: 10px;
        text-align: center;
    }

    p {
        color: #7A7A7A;
        text-align: center;
        letter-spacing: -1px;
        margin-bottom: 3rem;
    }
`

const CardAbout = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    font-weight: 300;
    height: 100%;
`
const AboutParagraph = styled.div`
    line-height: 1.8;
    margin: 1rem auto;
    font-size: 14px;
    text-align: justify;
   
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`

const IconText = styled.div`
   display: flex;
   flex-direction: column;

   align-items: center;
`

/**SECTION FEATURED PROPERTIES */
export const SectionTitle = styled.h2`
    font-family: 'Lato';
    font-size: 35px;
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: 10px;
    text-align: center;
`
export const UnderlineTitle = styled.div`
    height: 35px;
    position: relative;
    text-align: center;

    span {
        position: absolute;
        background-color: #cba631;
        bottom: 0;
        top: 0;
        width: 1px;
        height: 100%;

        &:before {
            width: 140px;
            height: 1px;
            background-color: #cba631;
            position: absolute;
            left: 50%;
            top: 9px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-50%);
        }

        &:after {
            width: 100px;
            height: 1px;
            position: absolute;
            left: 50%;
            top: 15px;
            content: '';
            background-color: #c0962d;
            transform: translateX(-50%);
        }
    }
`

export const SectionFeaturedProperties = styled.section`
    background-color: #f7f7f7;
    padding: 1rem 0;
    position: relative;
`

export const MarginPaddingContainer = styled.div`
    max-width: 77.5rem;
    margin: 5% auto;

`

/*SECTION TESTIMONIALS */
export const SectionTestimonial = styled.section`
    background-color: #fff;
    padding: 1rem 0 10rem 0;
    position: relative;
`