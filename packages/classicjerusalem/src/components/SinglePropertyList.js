import React, {useEffect} from 'react';
import { connect, styled, css, Global, keyframes } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import { IconContext } from "react-icons";
import {ImLocation} from 'react-icons/im';
import {IoBedOutline} from 'react-icons/io5'
import {FaShower} from 'react-icons/fa'
import {TfiRulerAlt2} from 'react-icons/tfi'
import LinkButtonHome from './LinkButtonHome';
import ZoomInOnScroll from './ZoomInEffect';

const DotsPrice = require('./helpers/DotsPrice');

const SinglePropertyList = ({state, actions, libraries, property}) => {

    const exchangeRateValue = state.theme.coinExchange.exchange_rate;
    const currencyPair = state.theme.coinExchange.currency_pair;
            
    return(

        <ContainerGeneral>
            <Link href={property.link}>
                <SinglePropertyContainer key={property.id}>
                    <SinglePropertyThumb>

                        {property.acf.exclusivity === 'Yes'? 

                            <Ribbon>

                                <span>
                                    Exclusivity
                                </span>
                            </Ribbon>
                            :null
                        }

                        {
                            property.acf.details_properties.code_property ?  
                                <CodeProperty>Nº {property.acf.details_properties.code_property}</CodeProperty>
                            :null 
                        }

                        {
                            property.acf.image_card.sizes ? 
                            <ImageCard src={property.acf.image_card.sizes.medium_large} />
                            : null
                        }
                       
                        <TextBand>
                            {property.acf.details_properties.ribbon_cintillo}
                        </TextBand>

                        {
                            property.acf.status_property === 'Sold'?
                            <StatusPropertyTag>
                                <h3>SOLD</h3>
                            </StatusPropertyTag>

                            :property.acf.status_property === 'Rented'?
                            <StatusPropertyTag>
                                <h3>RENTED</h3>
                            </StatusPropertyTag>

                            :null
                        }
                    </SinglePropertyThumb>

                    <SinglePropertyDetails>
                        <div>
                            <h4>
                                {property.acf.details_properties.property_name}
                            </h4>

                            <p>
                            
                                <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                    <ImLocation />
                                </IconContext.Provider>
                                {property.acf.details_properties.street_name?

                                    property.acf.details_properties.street_name + ", "
                                :null
                                }
                                 {property.acf.details_properties.neighborhood} 
                            </p>

                            <ul>
                                <li>
                                    <span>
                                        <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1.3rem"} }>
                                            <IoBedOutline />
                                        </IconContext.Provider>
                                    </span>
                                    
                                    <span>
                                        {property.acf.details_properties.beds}
                                    </span>
                                </li>

                                <li>
                                    <span>
                                        <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1.3rem"} }>
                                            <FaShower />
                                        </IconContext.Provider>
                                    </span>
                                    <span>{property.acf.details_properties.baths}</span>
                                </li>
                                <li>
                                    <span>
                                        <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1.1rem"} }>
                                            <TfiRulerAlt2 />
                                        </IconContext.Provider>
                                    </span>
                                    <span>{property.acf.details_properties.sqm}</span>
                                    <span>Sqm</span>
                                </li>
                            </ul>

                            
                        </div>
                    </SinglePropertyDetails>

                  
                            <ButtonsInfoContainer>  
                                <PriceTag>   
                                    {DotsPrice.formatPrice(parseInt(Number(property.acf.details_properties.price_shekels)*Number(exchangeRateValue)))} 
                                    {
                                        currencyPair === "ILS_ILS"? 
                                        " ₪"  : currencyPair === "ILS_USD"? " $" : " €" 
                                    }
                                </PriceTag>     
                                <LinkButtonHome href={property.link}>
                                    Details
                                </LinkButtonHome>
                            </ButtonsInfoContainer>
                   
                </SinglePropertyContainer>
            </Link>
        </ContainerGeneral>
    )
}

export default connect(SinglePropertyList);

export const ContainerGeneral = styled.div`
  background-color: #fff;
  border: 1px solid #ebebeb;
  overflow: hidden;

`

export const SinglePropertyContainer = styled.div`   
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    transition: all .3s ease;
    height: 100%;
  width: 100%;
`

export const SinglePropertyThumb = styled.div`
    display: block;
    box-sizing: border-box;
    background: #1d293e;
    flex-basis: 30%;
    /* border-radius: 8px; */
    /* overflow: hidden; */
    /* margin: 10px 9px 0 10px; */
    position: relative;

`


export const SinglePropertyDetails = styled.div`
    position: relative;
    margin-left: .5rem;
    flex-basis: 55%;

    div{
        padding: 0 20px 20px 0px;
        /* text-align: center; */
        text-align: start;
        

        h4 {
            font-size: 1.2rem;
            font-size: var(--step-0);
            color: #333332;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 5px;
            text-transform: capitalize;
            font-family: 'Montserrat', sans-serif; 

            @media (min-width: 768px){
                min-height: 70px;
                max-height: 70px;
            }

        }

        p {
            font-size: 1rem;
            font-size: var(--step--1);
            font-family: 'Lato', sans-serif;
            color: var(--golden);
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;
        }

        ul {
            display: flex;
            /* justify-content: center; */
            justify-content: flex-start;
            list-style: none;
            margin: 0;
            padding: 0;
        }
     
        li {
            display: flex;
            justify-content: space-between;
            font-weight: 300;            
            font-size: 12px;
            font-size: var(--step--2);
            font-weight: 400;
            padding: 0 8px 0 0;
            color: #333332;

            span {
                font-size: 200;
                margin-left: 2px;
            }
        }
    }
`

export const SinglePropertiesDetailsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1/2fr 1/2fr 1fr;

    padding: 0 20px 20px 0px;
        /* text-align: center; */
        text-align: start;
        

        h4 {
            font-size: 1.2rem;
            font-size: var(--step-0);
            color: #333332;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 15px;
            height: 100px;
            text-transform: capitalize;
            font-family: 'Montserrat', sans-serif; 
        }

        p {
            font-size: 1rem;
            font-size: var(--step--1);
            font-family: 'Lato', sans-serif;
            color: var(--golden);
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;
        }

        ul {
            display: flex;
            /* justify-content: center; */
            justify-content: flex-start;
            list-style: none;
            margin: 0;
            padding: 0;
        }
     
        li {
            display: flex;
            justify-content: space-between;
            font-weight: 300;            
            font-size: 12px;
            font-size: var(--step--2);
            font-weight: 400;
            padding: 0 8px 0 0;
            color: #333332;

            span {
                font-size: 200;
                margin-left: 2px;
            }
        }
`

export const zoomOut = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

export const zoomIn = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`;

export const ImageCard = styled(Image)`
    vertical-align: middle;
    min-height: 200px;/**to make responsive */
    max-width: 100%;
    height: 350px;
    /* transform: scale(1.1);
    animation: ${zoomIn} 1s ease-in-out forwards; */

    @media (min-width: 1024px) and (max-width: 1440px){
        height: 300px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        height: 280px;
    }

    @media (max-width: 768px){
        height: 250px;
    }

    /* &:hover {
        animation: ${zoomOut} .5s ease-in-out forwards;
    }

    &:not(:hover) {
        animation: ${zoomIn} .5s ease-in-out forwards;
    } */
`;



export const TextBand = styled.div`
  /* width: 100%; */
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(203, 166, 49, 0.7);
  padding: 5px 10px;
  color: #FFF;
  font-weight: 600;
  font-size: 15px;
  text-align: start;
  text-transform: uppercase;
  vertical-align: middle;
  text-shadow:  #000 1px 1px 1px;

  @media (max-width: 768px){
    text-shadow: none;
   }


  /* Safari-specific CSS */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      text-shadow: none;
    }
  }

  span {
    font-weight: 700;
    font-size: 17px;
     text-shadow:  #000 1px 1px 1px;

     @media (max-width: 768px){
    text-shadow: none;
   }


    /* Safari-specific CSS */
    @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
            text-shadow: none;
        }
    }
  }
`;

export const Ribbon = styled.div`
    position: absolute;
    left: -4px;
    top: -2px;
    z-index: 1;
    overflow: hidden;
    width: 200px;
    height: 175px;
    text-align: right;

    span {
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
        position: relative;
        top: 19px;
        left: -21px;
  
        &:before  {
            content: "";
            position: absolute;
            left: 5px;
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
            right: 0px;
            top: 100%;
            z-index: -1;
            border-left: 3px solid transparent;
            border-right: 3px solid var(--golden-color);
            border-bottom: 3px solid transparent;
            border-top: 3px solid var(--golden-color);
        }
    }
    
`

export const CodeProperty = styled.div`
    font-weight: 500;
    padding: 0.5rem;
    background-color: var(--golden-color);
    color: #fff;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1;
    overflow: hidden;
`
export const ImageContent = styled.div`
    bottom: 0;
    left: 10px;
    position: absolute;
    right: 10px;
    top: 10px;

    ul{
        display: flex;
        position: absolute;
        left: 12px;
        top: 10px;
        list-style: none;
        margin:0;
        padding: 0;

        li {
            border-radius: 3px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            width: 75px;

            &:nth-of-type(2n+1) {
              
                background-color: #3e4c66;

            }
            
            &:nth-of-type(2n) {
                margin-left: 1rem;
                background-color: var(--golden);;
            }

            a {
                font-size: 14px;
            
                color: #fff;
                line-height: 1.2;
                text-decoration: none;
            }
        }


    }


    p {
        bottom: 15px;
        font-size: 22px;
        font-size: var(--step-0);
        /* font-family: Nunito; */
        color: #fff;
        font-weight: 600;
        left: 20px;
        line-height: 1.2;
        position: absolute;

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--1);
        }

        small {
            font-size: 14px;
        }
    }
`


const ButtonsInfoContainer = styled.div`

    display: flex;
    flex-basis: 10%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    /* margin:0;
    padding: 0; */
    /* margin-top: 1rem; */
    margin-right: 2rem;
`

export const PriceTag = styled.a`
    background-color: #323B54;
    /* background-color: #464e65; */
    display: block;
    justify-content: center;
    align-self: center;
    padding: .5rem 1rem;
    box-sizing: border-box;
    border: 1px solid #fff;
    /* border-radius: 5px; */
    font-size: var(--step--1);
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    /* width: 7rem; */
    margin: 1rem 0;
    font-weight: bold;

    @media(min-width: 768px) {
        margin-bottom: 0rem;
    }
`

const StatusPropertyTag = styled.div`
   position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    overflow: hidden;
    width: 250px;
    height: 300px;
    /* text-align: right; */


    h3 {
        font-size: 30px;
        font-weight: bold;
        color: var(--golden-color);
        text-transform: uppercase;
  
        line-height: 20px;
        transform: rotate(-45deg);
        width: 100%;
        display: block;
        background: #000;
        border: 1px solid var(--golden-color);
        padding: 1rem;
        box-shadow: 0 3px 10px -5px rgb(0 0 0);
        position: relative;
        top: 0;
        left: -80px;
  
        &:before  {
            content: "";
            position: absolute;
            left: 0px;
            top: 100%;
            z-index: -1;
            border-left: 3px solid #000;
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-top: 3px solid #000;
        }

        &:after {
            content: "";
            position: absolute;
            right: 0px;
            top: 100%;
            z-index: -1;
            border-left: 3px solid transparent;
            border-right: 3px solid #000;
            border-bottom: 3px solid transparent;
            border-top: 3px solid #000;
        }
    }
`
