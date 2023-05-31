import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";
import Iframe from "@frontity/components/iframe";
import {BiCheck} from 'react-icons/bi';
import Loading from './Loading';
import SamuelAgent from '../images/real-state-agent-v1.jpeg'
import SamuelAgentTwo from '../images/real-state-agent-v2.jpeg'
import {PriceTag} from './SingleProperty'

//Image
import ImageGallery from 'react-image-gallery';
import ImageSliderStyles from "react-image-gallery/styles/css/image-gallery.css";
import AddtionalStyles from '../styles/style.css'

//Nav 
import {NavItem} from './header/nav'
import Link from './Link'

import {IoLogoWhatsapp} from 'react-icons/io'

const Details = ({state, actions, libraries}) => {

    const exchangeRateValue = state.theme.coinExchange.exchange_rate;
    const currencyPair = state.theme.coinExchange.currency_pair;

    useEffect( () => {
        actions.source.fetch("/contact-other")     
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["32"];

    // getting properties data 
    const data = state.source.get(state.router.link);

    const linkRouter = state.router.link;

    const lastLink = linkRouter.split("/")[2];

    const idProperty = data.id;

    const postProperty = state.source[data.type][idProperty];

    const arrImages = []
    
    if(typeof postProperty !== "undefined" && data.isReady) {

        postProperty.acf.photo_gallery.map( elem => {
            arrImages.push({srcSet: elem.medium_srcset , thumbnail : elem.thumbnail_image_url})
        })
    }

    const isCurrentPage = state.router.link === "properties";
      
    return (
        <>  
            {typeof postProperty === "undefined" && typeof contentForm === "undefined" ? <Loading /> : 

                    <InfoSection>   
                        {/* <LinkContainer>

                            <ol>
                                <Link href="/">home</Link> 
                                <li></li><Link href="/properties">Properties</Link> 
                                <li></li><a css = {css`color: var(--golden); text-decoration: none;`} href={linkRouter}>{lastLink} </a> 
                            </ol>
                        </LinkContainer> */}
                   
                        <Container>

                          

                            <AllInfoContainer>

                            {postProperty.acf.exclusivity === 'Yes'? 
                                    <Ribbon>
                                        Exclusivity
                                    </Ribbon>
                                    :null
                                }

                                <ImageContainerSlider>

                                <Global styles={ImageSliderStyles} />
                                {/* <Global styles={AddtionalStyles} /> */}
                                <ImageGallery items={arrImages} lazyLoad={true} />
                                </ImageContainerSlider>
                    

                                <HeaderPriceTitle>
                                    <Neighboorhood>
                                        <span>Jerusalem, </span>{postProperty.acf.details_properties.neighborhood}
                                    </Neighboorhood>

                                    {/* <Price>
                                        $ {postProperty.acf.details_properties.price_dollars}
                                    </Price> */}

                                    <Price>   
                                        {parseInt(Number(postProperty.acf.details_properties.price_dollars)*Number(exchangeRateValue))} 
                                        {
                                            currencyPair === "USD_USD"? 
                                            " $"  : currencyPair === "USD_EUR"? " €" : " ₪" 
                                        }
                                    </Price> 
                                </HeaderPriceTitle>
                                
                                <ListingDescription>
                                   
                                   <h4>Description</h4>
                                   <p>
                                       {postProperty.acf.description.paragraph_1}
                                   </p>
                                   {postProperty.acf.description.paragraph_2 !== '' ?
                                       <p>
                                           {postProperty.acf.description.paragraph_2}
                                       </p>
                                    : null
                                   }
                                   
                               </ListingDescription>

                               <AllInfoGrid>

                                   <ListingDetails>
                                        <h4>Property Details</h4>

                                        <ListingDetailsItems>
                                          
                                            <div>
                                                <p>
                                                    Price
                                                </p>

                                                {/* <span> {` `+postProperty.acf.details_properties.price_dollars}</span> */}
                                                <span>
                                                {parseInt(Number(postProperty.acf.details_properties.price_dollars)*Number(exchangeRateValue))} 
                                                {
                                                    currencyPair === "USD_USD"? 
                                                    " $"  : currencyPair === "USD_EUR"? " €" : " ₪" 
                                                }
                                                </span>
                                            </div>
                                            <div>
                                                <p>
                                                    Property Size 
                                                </p>
                                                <span> {postProperty.acf.details_properties.sqm+` `} sqm</span>
                                            </div>
                                            <div>
                                                <p>
                                                    Bedrooms
                                                </p>
                                                <span> {` `+postProperty.acf.details_properties.beds}</span>
                                            </div>             
                                                     
                                            <div>
                                                <p>
                                                    Bathroom
                                                </p>
                                                <span> {` `+postProperty.acf.details_properties.baths}</span>
                                            </div> 
                                        </ListingDetailsItems>
                                    
                                    </ListingDetails>

                                    <ListingDetails>
                                        <h4>More Information </h4>

                                        <InfoDetails>
                                            {postProperty.acf.more_information.map( elemList => {
                                                return(
                                                    <div>
                                                    <CheckIcon /> <span>{elemList}</span>
                                                </div>
                                                )
                                            })}
                                                     
                                        </InfoDetails>
                                    
                                    </ListingDetails>

                                  
                                   
                               </AllInfoGrid>

        
                                
                           </AllInfoContainer>

                            <MainInfo>
                                    {typeof contentForm === "undefined" ? <Loading /> 
                                        :
                                        <ContentForm>
                                            
                                            <h3>Contact Email</h3>
                                            
                                            <Html2react html={contentForm.content.rendered} />

                                            <h3>Phone Call</h3>

                                            <AgentContact>
                                                <StyledImage src={SamuelAgent} />
                                                <div>
                                                    <h4>
                                                        Samuel Cohen
                                                    </h4>

                                                    <ul>
                                                        <li>
                                                            <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                                                            <IoLogoWhatsapp /> <span>+972586540969</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </AgentContact>
                                        </ContentForm>
                                    }

                                    <MapDiv>
                                    {/* <IframeMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217152.94172576632!2d34.90260814069641!3d31.742799330483617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c4edaeeb9e23%3A0x4ca1616bb452513d!2sDistrito%20de%20Jerusal%C3%A9n%2C%20Israel!5e0!3m2!1ses-419!2spe!4v1674433992414!5m2!1ses-419!2spe" 
                                        width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                    </IframeMap> */}
                                     
                                        <Html2react html={postProperty.content.rendered} />
                                    
                                    </MapDiv>
                            </MainInfo>
                      
                        </Container>
                    
                    </InfoSection>
                    
            }
            )
        </>   
    )
}


export const InfoSection = styled.section`
    background-color: #f7f7f7;
    padding: 60px 0;
    position: relative;
    margin-top: 5rem;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    max-width: 95%;
    margin: 2rem auto;

    @media (max-width: 992px){
        flex-direction: column;
    }
`

const AllInfoContainer = styled.div`
   flex-basis: 65%;
   display: block;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`

const ImageContainerSlider = styled.div`

    background-color: var(--white-color);
    border: 1px solid var(--golden-color); 
    padding: 2rem 4rem;

    @media (min-width: 1440px) and (max-width: 1680px) {
        padding: 1rem 3rem;
    }

    @media (min-width: 1201px) and (max-width: 1440px) {
        padding: 1rem 2rem;
    }


    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 1rem 1rem;
    }


    @media (max-width: 992px){
        padding: 1rem 1rem;
    }

`

const MainInfo = styled.div`

    margin-bottom: 0;
    flex-direction: column;
    flex-basis: 30%;

    @media (min-width: 993px) and (max-width: 1200px) {
        margin-left: 1rem;
    }

    @media (max-width: 992px){
        margin-bottom: 1rem;
    }
` 

const ListingDescription = styled.div`
    margin-top: 1rem;
    background-color: #fff;
    border: 1px solid #ebebeb;
    /* border-radius: 8px 8px 0 0; */
    padding: 30px;
    

    h4 {
        margin-bottom: 30px;
        line-height: 1.2;
        color: #484848;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        font-size: 14px;
        color: #484848;
        font-weight: 400;
        line-height: 1.8;
        text-align: justify;
    }
`

const AllInfoGrid = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  
    @media (max-width: 768px){
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    /* @media (min-width: 768px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        justify-items: stretch;
    } */
`

const ListingDetails = styled.div`

    background-color: #f7f7f7;
    border: 1px solid #fff;
    margin-top: 1rem;
    /* padding: 30px; */
    position: relative;

    h4 {
        text-transform: uppercase;
        padding-left: 1rem;
    }
`
const ListingDetailsItems = styled.div`
    display: flex;
    flex-direction: column;
    background-color : #fff;
    padding: 2rem;

    div {
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
        align-content: center;
        border-bottom: 1px solid #f7f7f7;
        height: 100%;
        padding: 1rem 0;

        /* @media (max-width: 576px){
            flex-basis: 100%;
        }

        @media (min-width: 576px) and (max-width: 768px){
            flex-basis: 50%;
        }
 */

        p{
            font-size: 1rem;
            color: #484848;
            font-weight: 400;
            text-transform: capitalize;
            margin: 0;
            padding: 0;
        }

        span {
            font-size: 14px;
            color: #484848;
            /* line-height: 2.857; */
            font-weight: 700;
        }
    }
`

const InfoDetails = styled.div`
    display: flex;
    justify-content: space-between;
    background-color : #fff;
    padding: 2rem;
    flex-wrap: wrap;

    div {
        flex-basis: 50%;

    }
`

const CheckIcon = styled(BiCheck)`
    font-size: 1.2rem;
    color: var(--golden-icons);
`

const IframeMap = styled(Iframe)`

        width: 100%;
        height: 400px;

          @media(max-width: 576px) {
            height: 250px;
        }
`
const MapDiv = styled.div`

        /* width: 100%;
        height: 400px;

          @media(max-width: 576px) {
            height: 250px;
        } */

        margin-top: 3rem;


        iframe {
            width: 500px;
            height: 480px;
            text-align: center;

            @media (min-width: 1341px) and (max-width: 1500px){
                width: 400px;
                height: 380px;
            }

             @media (min-width: 1201px) and (max-width: 1340px){
                width: 360px;
                height: 320px;
            }

 @media (min-width: 993px) and (max-width: 1200px) {
    width: 500px;
            height: 480px;
 }

 /* @media (min-width: 769px)  and (max-width: 992px){
    width: 400px;
            height: 380px;
} */



 @media (min-width: 576px) and (max-width: 992px){
    width: 550px;
            height: 750px;
 }

 @media (max-width: 576px){
    width: 350px;
            height: 320px; 
 } 

        }
`

export const Ribbon = styled.span`

        font-size: 10px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        line-height: 20px;
        transform: rotate(-45deg);
        width: 100px;
        display: block;
        background: var(--golden-color);
        box-shadow: 0 3px 10px -5px rgb(0 0 0);
        position: absolute;
        top: 17px;
        left: -23px;
     
        overflow: hidden;
  
        &:before  {
            content: "";
            position: absolute;
            left: -5px;
            top: 100%;
            z-index: -1;
            border-left: 3px solid var(--golden-color);
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-top: 3px solid var(--golden-color);
        }

        &:after {
            content: "";
            position: absolute;
            right: -5px;
            top: 100%;
            z-index: -1;
            border-left: 3px solid transparent;
            border-right: 3px solid var(--golden-color);
            border-bottom: 3px solid transparent;
            border-top: 3px solid var(--golden-color);
        }    
`


/**Contact Form Styles */
const ContentForm = styled.div`


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    line-height: 1.2;
    background-color: #fff;
    padding: 1rem;


    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }

    .wpcf7-form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-right: auto;
        margin-left: auto;

        p {

            color: var(--main-color);
            flex-basis: 50%;
            margin-right: auto;
            margin-left: auto;

            &:nth-of-type(5){
                flex-basis: 100%;   
            }

            &:nth-of-type(6){
                flex-basis: 100%;   
            }

            @media (max-width: 768px){
                flex-basis: 100%;
            }
        }
    }


    input, textarea {

        &:focus {
           outline: none;
        } 
    }

    input {
        width: 50%;
    }


    input, textarea, select {
      
        background-color: transparent;
        outline: none;    
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        border-bottom: 1px solid var(--golden-color); 
        font-family:inherit;
        font-size: 1rem;
        padding: 1rem;

        &::placeholder {
            font-family: 'Lato', sans-serif;
            text-transform: uppercase;
            font-weight: 300;
        }
    }

    @media(max-width: 768px) {
        input, textarea, select {
            width: 90%;
        }
    }

    textarea {
        width: 70%;
        height: 50px;
    }


    input[type="submit"] { 
        width: 100%;
        background-color: var(--golden-color);
        height: 48px;  
        padding: 1.5rem;
        text-transform: none;
        border: 1px solid #fff;
        font-weight: 500;
        font-size: 1rem;
        text-transform: capitalize;
        color: #FFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
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
    }
`

const AgentContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;

    div{
        margin-left: 1rem;

        h4{
            text-transform: uppercase;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li{
                text-decoration: none;

                a {
                    text-decoration: none;
                    color: var(--main-color);
                }
            }
        }
    }
`

export const StyledImage = styled(Image)`
    display: block;
    width: 150px;
    height: 150px;
    object-fit: contain;
`

export const HeaderPriceTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`
const Neighboorhood = styled.p`
    font-size: var(--step-0);
    font-weight: 100;

    span {
        font-weight: 500;
    }
`
const Price = styled.span`
    font-size: var(--step-0);
    background-color: var(--golden-icons);
    color: #fff;
    padding: .5rem .8rem;
    height: 100%;
`

export default connect(Details);


// const LinkContainer = styled.div`
// margin-top: 1rem;
// margin-bottom: 2rem;
// margin-left: calc(12rem + 1.5625vw);
// margin-right: calc(12rem + 1.5625vw);
// max-width: 1800px;

// @media (min-width: 1201px) and (max-width: 1420px){
//     max-width: 1400px;
//     margin-left: calc(5rem + 1.5625vw);
//     margin-right: calc(5rem + 1.5625vw);
// }

// @media (min-width: 993px) and (max-width: 1200px) {
//     max-width: 1140px;
//     margin-left: calc(3rem + 1.5625vw);
//     margin-right: calc(3rem + 1.5625vw);
// }

// @media (min-width: 769px)  and (max-width: 992px){
//     max-width: 960px;
//     margin-left: calc(2rem + 1.5625vw);
//     margin-right: calc(2rem + 1.5625vw);
// }

// @media (min-width: 576px) and (max-width: 768px){
//     max-width: 720px;
//     margin-left: calc(1rem + 1.5625vw);
//     margin-right: calc(1rem + 1.5625vw);   
// }

// @media (max-width: 576px){
//     max-width: 540px;
//     margin-left: 1rem;
//     margin-right: 1rem;  
// }

// /* @media (max-width: 768px){
//     display : none;
// } */

// ol{
//     display: flex;
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     text-transform: capitalize;
//     font-size: .8rem;
    
//     li {
//         &:before {
//             display: inline-block;
//             color: #6c757d;
//             content: ">";
//             margin: 0 1rem;
//         }
//     }
// }
// `


