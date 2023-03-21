import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Link from './Link';
import { IconContext } from "react-icons";
// import {TfiQuoteLeft} from 'react-icons/tfi';
// import {ImQuotesLeft} from 'react-icons/im';
import {RiDoubleQuotesL} from 'react-icons/ri'
import Image from "@frontity/components/image";
import logo from '../images/logo.png'
import testimonial1 from '../images/testimonial1.jpg'
import testimonial2 from '../images/testimonial2.jpg'
import testimonial3 from '../images/testimonial3.jpg'
import Loading from './Loading';

import {UnderlineTitle} from './home'

import FadeInOnScroll from './FadeInScroll'
import ZoomInOnScroll from './ZoomInEffect'
import {CloseButton} from './SuscribeForm';

const Testimonials = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/modal-testimonial/");
    }, []);

    const [showModalForm, setShowModalForm] = useState(false)
    
    const contactTestimonial = state.source.page[144];
    
    const Html2react = libraries.html2react.Component;

    const handleClose = () => {
        setShowModalForm(false);
    };

    return(
        <ContainerSection>
            <FadeInOnScroll>
                <h2>Testimonials</h2>
            </FadeInOnScroll>

            <UnderlineTitle>
                <span></span>
            </UnderlineTitle>

            <FadeInOnScroll>
                <p>Check some of our references. Addtional references on request</p>
            </FadeInOnScroll>

            <ContainerTestimonial>
                <ZoomInOnScroll delay={0.5} duration={1} distance="200px">
                    <CardTestimonial>
                        <div>
                            <IconContext.Provider value={{ color: "#cba631", className: "global-class-name", size: "2rem" } }>
                                <RiDoubleQuotesL />
                            </IconContext.Provider>
                        </div>
                        <TestimonialParagraphs>
                            Classic Jerusalem was recommended to me by both my sons. They insisted that I use Classic Jerusalem and when 
                            I was ready to buy they were there with me every step of the way. 
                            I am very pleased with their services, they always had an answer to any of my question. Thank you.

                            <p><strong>~Elianna Toledano</strong></p>
                            <p><span>Israel, Jerusalem</span></p>
                        </TestimonialParagraphs>

                        {/* <ImageContainer>
                            <ImageTestimonial alt="logo" src={testimonial1} /> 
                            <strong>Elianna Toledano</strong>
                        </ImageContainer> */}
                        
                    </CardTestimonial>
                </ZoomInOnScroll>

                <ZoomInOnScroll delay={0.5} duration={1} distance="200px">
                    <CardTestimonial>
                        <div>
                            <IconContext.Provider value={{ color: "#cba631", className: "global-class-name", size: "2rem" } }>
                                <RiDoubleQuotesL />
                            </IconContext.Provider>
                        </div>
                        <TestimonialParagraphs>
                            Very efficient, clear, professional, helpful and polite. 
                            They helped me to find the perfect apartment within a week and have communicated superbly every step of the way. 
                            I am extremely thankful, particularly to the agent Samuel Cohen

                            <p>
                                <strong>~Hadass Obadia</strong>
                            </p>

                            <p><span>Israel, Jerusalem</span></p>
                        </TestimonialParagraphs>

                        {/* <ImageContainer>
                            <ImageTestimonial alt="logo" src={testimonial2} /> 
                            <strong>Hadass Obadia</strong>
                        </ImageContainer>
                         */}
                    </CardTestimonial>
                </ZoomInOnScroll>

                <ZoomInOnScroll delay={0.5} duration={1} distance="200px">
                    <CardTestimonial>
                        <div>
                            <IconContext.Provider value={{ color: "#cba631", className: "global-class-name", size: "2rem" } }>
                                <RiDoubleQuotesL />
                            </IconContext.Provider>
                        </div>
                        <TestimonialParagraphs>
                            Very tireless Realtor, that will respond to your queries and concerns. 
                            I live in Emek Refaim and I found the perfect home. 
                            Classic Jerusalem is very committed and professional; keeps you in the loop at all time. 
                            <p><strong>~Eliahu Medina</strong></p>

                            <p><span>Israel, Jerusalem</span></p>
                        </TestimonialParagraphs>

                        {/* <ImageContainer>
                            <ImageTestimonial alt="logo" src={testimonial3} /> 
                            <strong>Eliahu Medina</strong>
                        </ImageContainer> */}
                        
                    </CardTestimonial>
                </ZoomInOnScroll>
            </ContainerTestimonial>
            {
                showModalForm? 
                <ModalForm>
                    <ContactForm>
                        <Html2react html={contactTestimonial.content.rendered} />
                    </ContactForm>
 
                    <CloseButton onClick={handleClose}>X</CloseButton>
                </ModalForm>

                : <ViewMoreButton onClick={()=> {setShowModalForm(true)}} >Add a review</ViewMoreButton>
            }

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
        font-size: var(--step-2);
        font-weight: 400;
        margin-bottom: 10px;
        text-align: center;
    }

    p {
        text-align: center;
        margin-bottom:0;
        /* margin-bottom: clamp(1rem, calc(.5rem + 1.98vw), 3.05rem); */
        font-size: var(--step--1);
        /* color: #303030; */
        color: #fff;

        strong {
            font-size: var(--step--1);
            color: var(--golden-color);
            /* border-bottom: 1px solid var(--golden-color); */
        }

        span {
            font-size: var(--step--1);
            color: #fff;
            border-bottom: 2px solid var(--golden-color);
        }
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

    @media (min-width: 576px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`

const CardTestimonial = styled.div`
    height: fit-content;
    /* background-color: #EDF9FF; */
    background-image: linear-gradient(180deg, rgba(28, 38, 65, .9) 0%, rgba(28, 38, 65, .9) 100%);
    padding: clamp(.8rem, calc(.5rem + .5vw), 2rem);
    box-sizing: border-box;
    height: 100%;
`
const TestimonialParagraphs = styled.p`
    line-height: 1.8;
    margin: 1rem auto;
    font-size: var(--step--1);
    text-align: justify;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ImageTestimonial = styled(Image)`
    border-radius: 50%!important;
    height: 120px;
    max-width: 100%;
`

const ViewMoreButton = styled.button`
    display: block;
    justify-content: center;
    background-color: var(--golden-color) ;
    align-self: center;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: var(--step--1);
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    margin: 4rem auto 0 auto;

    @media(min-width: 768px) {
        margin-bottom: 0rem;
    }

    &:hover {
        background-color: var(--golden-icons);
        transition: all 0.4s;
    }
`

const ModalForm = styled.div`

  background-color: #1c2641;
  border: solid 3px #bb9b48;
  box-shadow: 2px 4px 9px 5px rgb(0 0 0 / 40%);
  /* color: #fff; */
  font-family: 'Lato', sans-serif;
  left: 0;
  max-width: min(70%,350px);
  margin: 0 auto;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
`

export const ContactForm = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    /* padding: 1rem; */
    font-size: 1.1rem;
    /* border: 1px solid #ebebeb; */
    line-height: 1.2;
    max-width: 85%;
    margin: 0 auto;

    p {
        font-size: 14px;
        font-size: clamp(.8rem, calc(0.40rem + 0.54vw), 1.20rem);
        color: #fff;
        line-height: 1.714;
        margin-bottom: 20px;
        font-family: 'Lato', sans-serif;
    }
  
    @media(max-width: 768px) {
        max-width: 90%;
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

        &::placeholder {
            font-size: var(--step-0);
        }
    }


    input, textarea, select {
        height: 100%;
        padding:10px;
        color: #484848;
        margin: 0; 
        border: 1px solid rgba(97, 97, 97, 0.4);
        border-radius:5px;
        width:90%;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Lato', sans-serif;
    }

    /* @media(max-width: 768px) {
        input, textarea, select {
            width: 90%;
        }
    } */

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