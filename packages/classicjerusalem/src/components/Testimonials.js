import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Link from './Link';
import { IconContext } from "react-icons";
import {TfiQuoteLeft} from 'react-icons/tfi';
import Image from "@frontity/components/image";
import logo from '../images/logo.png'
import testimonial1 from '../images/testimonial1.jpg'
import testimonial2 from '../images/testimonial2.jpg'
import testimonial3 from '../images/testimonial3.jpg'
import Loading from './Loading';

import {UnderlineTitle} from './home'


const Testimonials = ({state, actions, libraries}) => {
    return(
        <ContainerSection>
            <h2>Testimonials</h2>

            <UnderlineTitle>
                <span></span>
            </UnderlineTitle>
            <p>Check some of our references. Addtional references on request</p>

            <ContainerTestimonial>
                <CardTestimonial>
                    <div>
                        <IconContext.Provider value={{ color: "#000", className: "global-class-name", size: "2rem" } }>
                            <TfiQuoteLeft />
                        </IconContext.Provider>
                    </div>
                    <TestimonialParagraphs>
                        
                            Classic Jerusalem was recommended to me by both my sons. They insisted that I use Classic Jerusalem and when 
                            I was ready to buy they were there with me every step of the way. 
                            I am very pleased with their services, they always had an answer to any of my question. Thank you
                        
                    </TestimonialParagraphs>

                    <ImageContainer>
                        <ImageTestimonial alt="logo" src={testimonial1} /> 
                        <strong>Elianna Toledano</strong>
                    </ImageContainer>
                    
                </CardTestimonial>
                <CardTestimonial>
                    <div>
                        <IconContext.Provider value={{ color: "#000", className: "global-class-name", size: "2rem" } }>
                            <TfiQuoteLeft />
                        </IconContext.Provider>
                    </div>
                    <TestimonialParagraphs>
                        
                            Very efficient, clear, professional, helpful and polite. 
                            They helped me to find the perfect apartment within a week and have communicated superbly every step of the way. 
                            I am extremely thankful, particularly to the agent Samuel Cohen
                        
                    </TestimonialParagraphs>

                    <ImageContainer>
                        <ImageTestimonial alt="logo" src={testimonial2} /> 
                        <strong>Hadass Obadia</strong>
                    </ImageContainer>
                    
                </CardTestimonial>
                <CardTestimonial>
                    <div>
                        <IconContext.Provider value={{ color: "#000", className: "global-class-name", size: "2rem" } }>
                            <TfiQuoteLeft />
                        </IconContext.Provider>
                    </div>
                    <TestimonialParagraphs>
                     
                            Very tireless Realtor, that will respond to your queries and concerns. 
                            I live in Emek Refaim and I found the perfect home. 
                            Classic Jerusalem is very committed and professional; keeps you in the loop at all time. 
                       
                    </TestimonialParagraphs>

                    <ImageContainer>
                        <ImageTestimonial alt="logo" src={testimonial3} /> 
                        <strong>Eliahu Medina</strong>
                    </ImageContainer>
                    
                </CardTestimonial>
            </ContainerTestimonial>
            
        </ContainerSection>
    )
}

export default connect(Testimonials)

const ContainerSection = styled.div`
    
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

const ContainerTestimonial = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (min-width: 576px) and (max-width: 968px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`

const CardTestimonial = styled.div`
    height: fit-content;
    background-color: #EDF9FF;
    padding: 2rem;
    box-sizing: border-box;
    font-weight: 300;
    height: 100%;
`
const TestimonialParagraphs = styled.div`
    line-height: 1.8;
    margin: 1rem auto;
    font-size: 14px;
    text-align: justify;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    strong {
        font-size: 14px;
    }
`

const ImageTestimonial = styled(Image)`
    border-radius: 50%!important;
    height: 120px;
    max-width: 100%;
`