import React, {useEffect} from 'react';
import {styled, connect } from "frontity";
import { IconContext } from "react-icons";
import { FaTripadvisor, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import {SocialMediaSuperior} from '../components/header/header'
import Image from "@frontity/components/image";
import Rent from '../images/rent.jpg';
import Buy from '../images/buy_couple.jpg';
import Sell from '../images/sell_adult.jpg';
import RealEstateAgent from '../images/real_estate_agent.jpg'
import logo from '../images/logo.png';
import Link from './Link';
import {PhoneIcon} from './header/nav'

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
                <ImageStyled>
                    <Image alt="logo" src={logo} />  
                </ImageStyled>

                <p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love.</p>
            </ContainerImageFooter>
                
        
            <ContainerImageFooter>
                <h3>
                    Quick Links
                </h3>
                <ul>
                    <li><Link href="/rent">Apartments for Rent in Jerusalem</Link></li>
                    <li><Link href="/sell">Apartments for Sale in Jerusalem</Link></li>
                    <li><Link href="/new-development">New opportunities for investment</Link></li>
                    <li><Link href="/neighborhoods">Neighborhoods of Jerusalem</Link></li>
                    <li><Link href="/blogposts">Blog</Link></li>
                    <li><Link href="/contact">Contact us</Link></li>                    
                </ul>
            </ContainerImageFooter>

            <ContainerImageFooter>
                <h3>From the Blog</h3>

                {
                     myPosts.map( post => {
                        return(
                            <BlogContainer>
                                <StyledImage src={post.acf.imagepost.sizes.thumbnail} alt="blog-image" />
                                <div>
                                    <p>{post.title.rendered}</p>
                                    <span>{post.date.substring(0,10)}</span>
                                </div>
                            </BlogContainer>
                        ) 
                    
                    })
                }


            </ContainerImageFooter>

            <ContainerImageFooter>
                <h3>
                    Contact us
                </h3>
                <h4>Classic Jerusalem Real Estate Agency</h4>
                <p>123 Jerusalem Street, Jerusalem</p>

                <p><PhoneIcon></PhoneIcon>+972-58-654-0969 classicjerusaleminfo@gmail.com</p>
             
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 2rem 8rem;
    grid-gap: 2rem;
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
    
    h3 {
        font-size: var(--step-0);
        text-transform: uppercase;
        color: var(--golden-color)
    }

    h4 {
        font-size: 1rem;
        font-size: var(--step-0);
        margin-top: 0;
    }
   
    p {
        font-size: var(--step--1);
        margin-top: 0;

        font-size: var(--step--1);  
        line-height: 1.8;
        text-align: justify;
    }


    ul {
        margin: 0;
        padding: 0;
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center; */

        li {
            list-style: none;
            margin: .5rem auto;
            display: flex;
            a {
                color : #fff;
                font-size: 14px;
                font-size: var(--step--1);
                text-decoration: none;
            }

            &:before{
                content: ">";
                align-self: center;
                margin-right: .5rem;
            }
        }

    }

    /* @media(min-width: 1025px) {
        &:nth-of-type(2){
            grid-column-start: 3;
        }
    } */

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

const BlogContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;

    p{
        font-weight: 100;
        margin-left: 1rem;
        font-size: var(--step--2);
    }

    span {
        font-weight: 100;
        margin-left: 1rem;
        font-size: var(--step--2);
        color: #ccc;
    }
`

export const StyledImage = styled(Image)`
    display: block;
    width: 80px;
    height: 80px;
    object-fit: contain;
`
