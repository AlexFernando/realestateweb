import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import {MarginPaddingContainer, SectionTitle, UnderlineTitle, IconTitle} from './home'
import { IconContext } from "react-icons";
import {BiCheck} from 'react-icons/bi';
import {IoArrowRedoSharp} from 'react-icons/io5'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {BsFillCheckSquareFill} from 'react-icons/bs';
import {MdOutlineStarPurple500} from 'react-icons/md';
import FadeInOnScroll from './FadeInScroll'
import SamuelAgent from '../images/real-state-agent-v1.jpeg'
import SamuelAgentTwo from '../images/real-state-agent-v2.jpeg'
import {FaWhatsapp} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io'
import {SocialMediaSection, SocialItem} from './MainContact'
import chatOnWhatsApp from './../images/WhatsAppButtonGreenMedium.svg'

const AboutSection = ({state, actions, libraries}) => {
    return ( 
        <SectionAbout>
                     
        <MarginPaddingContainer>

            <FadeInOnScroll> <SectionTitle>About</SectionTitle><IconTitle/></FadeInOnScroll>

            <FadeInOnScroll>
                <h3>Welcome to <strong>Classic Jerusalem</strong></h3>  
            </FadeInOnScroll>
      
            <CardAbout>

       
                <AboutParagraph>
                    <ul>                
                    <li>
                        <FadeInOnScroll>
                            <p>
                                <IconOne />
                                Classic Jerusalem is a distinguished real estate agency that specializes in luxury properties located in the historic and culturally-rich city of Jerusalem. 
                                With a firm commitment to excellence and a proven track record of success, our agency has established itself as a leader in the industry.
                            </p>
                        </FadeInOnScroll>
                    </li>
                    <li>
                        <FadeInOnScroll>
                            <p>
                                <IconOne />
                                At Classic Jerusalem, we recognize that the process of buying or selling a property can be complex and overwhelming. 
                                That's why we offer our clients personalized attention, expert advice, and guidance at every step of the way. 
                            </p>
                        </FadeInOnScroll>
                    </li>

              

                    <li>                           
                        <FadeInOnScroll>
                            <p>
                                <IconOne />
                                Our team of experienced real estate professionals has a deep understanding of the Jerusalem market 
                                and can assist with everything from property valuation to negotiating contracts.
                            </p>
                        </FadeInOnScroll>
                    </li>
                    </ul>
                    {/* <WhatsAppGroupContainer>
                       
                        <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                            <FadeInOnScroll> <h3>Join WhatsApp group</h3></FadeInOnScroll>
                            <FadeInOnScroll><WhatsAppIcon /></FadeInOnScroll>
                  
                        </a>
                    </WhatsAppGroupContainer> */}
                
                </AboutParagraph>

                <AboutParagraph>
                    <ul>

                 

                        <li>    
                            
                       
                            <FadeInOnScroll>
                                <p>
                                    <IconOne />
                                    Whether you are looking to buy or sell a residential or commercial property in Jerusalem, 
                                    Classic Jerusalem has the expertise and resources to help you achieve your goals.
                                    
                                </p>
                            </FadeInOnScroll>
                        </li>

                        <li>
                       
                            <FadeInOnScroll>
                                <p> 
                                    <IconOne />
                                
                                    Our extensive network of industry contacts, combined with our cutting-edge technology and marketing strategies, 
                                    ensures that we can deliver the results you need in a timely and efficient manner.
                                </p>
                            </FadeInOnScroll>
                        </li>

                        <li>
                       
                            <FadeInOnScroll>
                                <p> 
                                    <IconOne />
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

            <ContainerWhatsApp>
                <FadeInOnScroll>
                      
                        <p>
                        Join our WhatsApp group for the latest available apartments for rent in Jerusalem! 
                        it is the perfect opportunity to stay updated on the latest listings and get ahead of the competition.
                        To join the group, simply click on the following link icon:</p>
                </FadeInOnScroll>
                
                <div>
                <IconArrow />
                </div>

                <WhatsAppButtonContainer>
       
                    <a aria-label="Chat on WhatsApp" href="https://wa.me/+972586540969?text=I'm%20inquiring%20about%20the%20classicjerusalem%20properties" target="_blank" rel="noreferrer"><img alt="Chat on WhatsApp" src={chatOnWhatsApp} /></a>
                </WhatsAppButtonContainer>
            </ContainerWhatsApp>

         
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



    h3{
        font-size: var(--step-2);
        text-align: start;
        padding: 2rem 2rem 0 2rem;
    }

    strong {
        color: var(--golden-icons);
    }

    span {
        color:#25d366;
    }

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
    padding: 0 2rem 2rem 2rem;

    display: flex;

    flex-direction: column;

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

const ContainerWhatsApp = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;


    @media (max-width: 1024px){
        flex-direction: column;
    }
    
    
    padding: 0 2rem;



    p {
        text-align: justify;
        padding: 0;
        margin: 0;
        max-width: 80%;

        font-size: var(--step--1);

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--2);
        }

        @media (max-width: 1024px){
            max-width: 100%;
        }
    }
`

const WhatsAppButtonContainer = styled.div`
  flex-basis: 30%;
`


const IconOne = styled(BiCheck)`
    color: #cba631; 
    font-size: 1.5rem;
    margin-right: .5rem;
`

const IconArrow = styled(IoArrowRedoSharp)`
    color: #cba631; 
    font-size: 2rem;
    flex-basis: 20%;
`


const WhatsAppGroupContainer = styled.div`

    background-color: #4f991e;
    background-color: #44841a;
    padding: 1rem;
    margin: 1rem auto;
    max-width: 100%;
    border-radius: 2px;
    border: 1px solid #fff;
    /* max-height: 20vh; */

    @media (max-width: 768px){
        flex-basis: 100%;
    }

    p {
        line-height: 1.8;
        color: #fff;
    }

    h3 {
        text-align: center;
    
    }

    a {
        margin: 0;
        padding: 0;
        text-align: center;
        text-decoration: none;
        color: #fff;
    }
`



const WhatsAppIcon  = styled(IoLogoWhatsapp)`
  color:#25d366;
  color: #44841a;
  color: #4f991e;
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

const IconTwo = styled(AiOutlineCheckSquare)`
    color: #cba631; 
    font-size: 1.5rem;
    margin-right: .5rem;
`
const IconThird = styled(BsFillCheckSquareFill)`
    color: #cba631; 
    font-size: 1.2rem;
    margin-right: .5rem;
`
const IconFour = styled(MdOutlineStarPurple500)`
    color: #cba631; 
    font-size: 1.5rem;
    margin-right: .5rem;
`
