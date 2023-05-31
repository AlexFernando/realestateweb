import React, {useEffect} from 'react';
import {styled, connect } from "frontity";

import {NavBarIcon ,WhatsAppIcon, FacebookIcon, InstagramIcon} from '../components/header/nav'
import Image from "@frontity/components/image";
import Rent from '../images/rent.jpg';
import Buy from '../images/buy_couple.jpg';
import Sell from '../images/sell_adult.jpg';
import RealEstateAgent from '../images/real_estate_agent.jpg'
import logo from '../images/logo.png';
import Link from './Link';
import {PhoneIcon} from './header/nav'
import {BiMap} from 'react-icons/bi'

const InfoFooter = ({state, actions, libraries}) => {


    useEffect( () => {
        actions.source.fetch("/blog/")
    }, [])

    const data = state.source.get('/blog/');

    let myPosts = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.blog[id];
            myPosts.push(singlePost);
        })
    }

    return ( 
        <ContactContainer>
 
            <ContainerImageFooter>
                {/* <ImageStyled>
                    <Image alt="logo" src={logo} />  
                </ImageStyled> */}

                <h2>Classic Jerusalem <span>Realty</span></h2>

                <p>At Classic Jerusalem Realty, we're committed to providing exceptional real estate services. 
                    Whether you're buying, selling, or renting, we're here to guide you every step of the way.
          
                </p>

                <p>
                If you have any questions or are interested in learning more, don't hesitate to contact us via phone or email. 
                    Our team is always happy to assist you and help you achieve your real estate goals in Jerusalem.
                </p>
            </ContainerImageFooter>

            <ContainerImageFooter>
                <h2>From the <span>Blog</span></h2>
                <BlogContainer>
                {
                     myPosts.map( post => {
                        return(
                         <BlogElement>
                                <StyledImage src={post.acf.imagepost.sizes.thumbnail} alt="blog-image" />
                                <div>
                                    <p>{post.title.rendered}</p>
                                    <span>{post.date.substring(0,10)}</span>
                                </div>
                          </BlogElement>
                        ) 
                    
                    })
                }
                </BlogContainer>

            </ContainerImageFooter>

            <ContainerImageFooter>
                <h2>Contact <span>us</span></h2>

                <ContainerInfo>                
                    <p><NavBarIcon></NavBarIcon><span>classicjerusaleminfo@gmail.com</span></p>
                    <p><PhoneIcon></PhoneIcon><span>+972-58-654-0969</span> </p>
                    {/* <h4>Classic Jerusalem <span>Realty</span></h4> */}
                    <p><MapIcon></MapIcon><span>123 Jerusalem Street, Jerusalem</span></p>
                </ContainerInfo>

                <SocialMediaFooter>
                    <li>
                    <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                        <WhatsAppIcon />
                    </a>
                    </li>

                    <li>
                    <a href="https://www.facebook.com/ClassicJerusalem" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    </li>

                    <li>
                    <a href="https://www.instagram.com/classicjerusalem/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                    </li>

                </SocialMediaFooter>

            </ContainerImageFooter>


            {/* <ContainerImageFooter>
                <ImageFooter src={Rent} />
                <h3>Rent</h3>
                <p>Find a property for rent</p>
            </ContainerImageFooter>

            <ContainerImageFooter>
                <ImageFooter src={Buy} />
                <h3>Buy</h3>
                <p>Buying a propety </p>
            </ContainerImageFooter>

            <ContainerImageFooter>
                <ImageFooter src={Sell} />
                <h3>Sell</h3>
                <p>Selling your apartment  </p>
            </ContainerImageFooter>

            <ContainerImageFooter>
                <ImageFooter src={RealEstateAgent} />
                <h3>Airbnb</h3>
                <p>We take care of Airbnb your apartment</p>
            </ContainerImageFooter> */}
            
        </ContactContainer >

    );
}

export default connect(InfoFooter);

const ContactContainer = styled.div`
    display: grid;
    /* grid-template-columns: 1fr 0.5fr 1fr 1fr 1fr 1fr; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 2rem 8rem;
    grid-gap: 3rem;
    /* background-color: #000; */
    background-color: var(--main-color);
    color: #fff;
    
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
        padding: 1rem 4rem;
    }
`;

export const ContainerImageFooter = styled.div`
    /* margin-left: auto; */
    margin-top: 2rem;

    h2 {
        color: var(--golden-color);
        text-align: center;
        text-transform: uppercase;
        span {
            color: #fff;
        }
    }
    
    h3 {
        font-size: var(--step-0);
        text-transform: uppercase;
        color: var(--golden-color);
        text-align: center;
    }

    h4 {
        font-size: 1rem;
        font-size: var(--step-0);
        margin-top: 0;
        color: var(--golden-color);

        span {
            color: #fff;
        }
    }
   
    p {
        font-size: var(--step--1);
        margin-top: 0;

        font-size: var(--step--1);  
        line-height: 1.8;
        text-align: justify;
    }
`

export const ImageFooter = styled(Image)`
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
`

export const ImageStyled = styled.div`
    max-width: 120px;
    margin-left: auto;
    margin-right: auto;
    height: auto;

    img {

      max-width: 100%;
      object-fit: cover;
      height: auto;
    }
`

const BlogContainer = styled.div`
    /* display: flex;
    justify-content: flex-start; */
    /* margin-bottom: 1rem; */

     /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr; */
    /* padding: 2rem 8rem; */
    /* grid-gap: 3rem; */
    /* background-color: #000; */
`

const BlogElement = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    p{
        font-weight: 100;
        margin-left: .5rem;
        font-size: var(--step--2);
        text-align: start;
        margin-bottom: 0;
        margin-top: 0;
    }

    span {
        font-weight: 100;
        margin-left: .5rem;
        font-size: var(--step--2);
        color: #ccc;
    }
`

export const StyledImage = styled(Image)`
    display: block;
    width: 60px;
    height: 60px;
    object-fit: contain;
`
const ContainerInfo = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* p{
        text-align: center;
    } */
    span{
        margin-left: 1rem;
    }
`

export const SocialMediaFooter = styled.ul`
  display: flex;
  flex-grow: 1;
  margin-left: 0;
  padding-left: 0;
  justify-content: center;

  li {
    list-style: none;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 1rem;
    color: var(--white);
    margin: auto 1rem;
  

    @media(max-width: 1024px) {
      margin-right: .5rem;
    }
    a {
      text-decoration: none;
      color: #262626;
      color: #fff;
      margin-left: .5rem;
    }
  }
`


const ContactElement = styled.div`

    display: block;
    margin-right: auto;

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin: 1rem 0;
    }

    h3 {
        font-size: var(--step--1);
        color: var(--golden-color)
    }

    h4 {
        font-size: 1rem;
        font-size: var(--step-0);
        margin-top: 0;
    }
   
    p {
        font-size: 14px;
        font-size: var(--step--1);  
        line-height: 1.8;
        text-align: justify;
    }


    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        li {
            list-style: none;
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

    display: flex;
    justify-content: space-around;   
    margin-left: auto;
    margin-right: auto;

    a {
        color : #fff;
        font-size: 14px;
        font-size: var(--step--1);
        text-decoration: none;
    }

`

export const MapIcon = styled(BiMap)`
  color: var(--golden-icons);
  font-size: var(--step-1);
  vertical-align: middle;
`