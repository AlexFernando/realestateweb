import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import {MarginPaddingContainer, SectionTitle, UnderlineTitle} from './home'
import { IconContext } from "react-icons";
import {BiCheck} from 'react-icons/bi';
import FadeInOnScroll from './FadeInScroll'
import SamuelAgent from '../images/real-state-agent-v1.jpeg'
import SamuelAgentTwo from '../images/real-state-agent-v2.jpeg'
import {FaWhatsapp} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io'
import {SocialMediaSection, SocialItem} from './MainContact'

const AboutSection = ({state, actions, libraries}) => {
    return ( 
        <SectionAbout>
                     
        <MarginPaddingContainer>

            <FadeInOnScroll> <SectionTitle>About</SectionTitle></FadeInOnScroll>
            <UnderlineTitle>
                <span></span>
            </UnderlineTitle>

      
            <CardAbout>
                <AboutParagraph>
                    <FadeInOnScroll>
                        <h2>Welcome to <strong>Classic Jerusalem</strong></h2>  
                    </FadeInOnScroll>

                    <p>
                        Classic Jerusalem is a distinguished real estate agency that specializes in luxury properties located in the historic and culturally-rich city of Jerusalem. 
                        With a firm commitment to excellence and a proven track record of success, our agency has established itself as a leader in the industry.
                    </p>
               
                    <WhatsAppGroupContainer>
                        <FadeInOnScroll> <h3>Join WhatsApp group</h3></FadeInOnScroll>
                        <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                        
                            <FadeInOnScroll><WhatsAppIcon /></FadeInOnScroll>
                  
                        </a>
              
                    </WhatsAppGroupContainer>
                 
                    <FadeInOnScroll>
                        <p>
                            At Classic Jerusalem, we recognize that the process of buying or selling a property can be complex and overwhelming. 
                            That's why we offer our clients personalized attention, expert advice, and guidance at every step of the way. 
                            Our team of experienced real estate professionals has a deep understanding of the Jerusalem market and can assist with everything from 
                            property valuation to negotiating contracts.
                        </p>
                    </FadeInOnScroll>
                        
                </AboutParagraph>

                <AboutParagraph>
                    <ul>
                        <li>    
                       
                            <FadeInOnScroll>
                                <p>
                                    <IconContext.Provider value={{color: "#cba631", className: "global-class-name", size: "4rem" } }>
                                        <BiCheck />
                                    </IconContext.Provider>
                                    Whether you are looking to buy or sell a residential or commercial property in Jerusalem, 
                                    Classic Jerusalem has the expertise and resources to help you achieve your goals.
                                    
                                </p>
                            </FadeInOnScroll>
                        </li>

                        <li>
                       
                            <FadeInOnScroll>
                                <p> 
                                    <IconContext.Provider value={{color: "#cba631", className: "global-class-name", size: "4rem" } }>
                                        <BiCheck />
                                    </IconContext.Provider>
                                    Our extensive network of industry contacts, combined with our cutting-edge technology and marketing strategies, 
                                    ensures that we can deliver the results you need in a timely and efficient manner.
                                </p>
                            </FadeInOnScroll>
                        </li>

                        <li>
                       
                            <FadeInOnScroll>
                                <p> 
                                    <IconContext.Provider value={{color: "#cba631", className: "global-class-name", size: "4rem" } }>
                                        <BiCheck />
                                    </IconContext.Provider>
                                    At Classic Jerusalem, we pride ourselves on providing our clients with the highest level of service and professionalism. 
                                    We strive to exceed expectations by delivering exceptional value, innovative solutions, and a commitment to achieving our clients' goals. 
                                </p>
                            </FadeInOnScroll>
                        </li>
                    </ul>
                </AboutParagraph>

                {/* <FadeInOnScroll>
                    <ImageContainer>
                        <ImageAgent src={SamuelAgentTwo} alt="real-state-agent"/>
                    </ImageContainer>
                </FadeInOnScroll> */}
            
                {/* <IconsContainer>    
                    <IconText>
                        <IconContext.Provider value={{color: "#cba631", className: "global-class-name", size: "4rem" } }>
                            <GiFamilyHouse />
                        </IconContext.Provider>
                        <FadeInOnScroll>
                            <p>Find the perfect match</p>
                        </FadeInOnScroll>
                    </IconText>
                
                    <IconText>
                        <IconContext.Provider value={{ color: "#cba631", className: "global-class-name", size: "4rem" } }>
                            <GiSpookyHouse />
                        </IconContext.Provider>
                        <FadeInOnScroll>
                            <p>Involved through all stages</p>
                        </FadeInOnScroll>
                    </IconText>
        
                    <IconText>
                        <IconContext.Provider value={{ color: "#cba631", className: "global-class-name", size: "4rem" } }>
                            <GiHouse />
                        </IconContext.Provider>
                        <FadeInOnScroll>
                            <p>We will guide you every step of the way.</p>
                        </FadeInOnScroll>
                    </IconText>
                </IconsContainer> */}

            </CardAbout>
         
        </MarginPaddingContainer>
    
    </SectionAbout>

    )

}

export default AboutSection;

/*SECTION ABOUT */
export const SectionAbout = styled.section`
    /* background-color: #fff; */
    position: relative;
    color: #fff;
    /* background-image: url("https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/03/background5-1024x684.jpg"); */
    background-color: var(--main-color);
    padding: 2rem 0;
`

const CardAbout = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    color: #fff;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        justify-items: normal;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        justify-items: stretch;
    }
`
const AboutParagraph = styled.div`
    line-height: 1.8;
    margin: 1rem auto;
    text-align: justify;
    padding: 2rem;

    display: flex;

    flex-direction: column;

    h2{
        font-size: var(--step-2);
    }

    strong {
        color: var(--golden-icons);
    }

    span {
        color:#25d366;
    }


    h3 {
        font-size: var(--step-0);
    }

    p {
        font-size: var(--step--1);

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--2);
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

    }

    @media (max-width: 768px){
        padding: .5rem 1rem;
    }
`

const WhatsAppGroupContainer = styled.div`
    /* background-color: #9ACD32;
    background-color: #8BC34A;
    background-color: #44841a;
    background-color: var(--golden-icons); */
    /* background-color: #6AAFE6; */
    /* background-color: #92C1FF; */
    flex-basis: 33%;
    flex-grow: 0;
    text-align: center;
    padding: 1rem;
    margin: 1rem auto;
    border: 2px solid var(--golden-icons);
    max-height: 20vh;

    @media (max-width: 768px){
            flex-basis: 100%;
    }

    a {
        margin: 0;
        padding: 0;
    }
`

const WhatsAppIcon  = styled(IoLogoWhatsapp)`
  color:#25d366;
  color: #44841a;
  background-color: #fff;
  font-size: var(--step-3);
  border: 1px solid #fff;
  border-radius: 50%;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const ImageContainer = styled.div`
    padding: 2rem;
    margin-top: 2rem;
`

const ImageAgent = styled(Image)`
    max-width: 70%;
    height: auto;
    /* filter: grayscale(100%); */
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