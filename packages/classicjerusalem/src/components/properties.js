import React, {useEffect} from 'react';
import { connect, styled, css, Global, keyframes } from "frontity";
import Image from "@frontity/components/image";
import SinglePropertyComponent from './SingleProperty';
import SliderDots from './Slider';

const Properties = ({state, actions, libraries}) => {
  
    useEffect( () => {
        actions.source.fetch("/properties")
    }, [])

    const data = state.source.get('/properties');

    let myPosts = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.properties[id];
            myPosts.push(singlePost);
        })

        actions.theme.updateProperties(myPosts);
    }


    return(
      
        <SliderDots>
            {
                myPosts.map(property => {
                    return(
                        <SinglePropertyComponent property={property} />
                    )
                })
            }
        </SliderDots>
    

    )


}

export default connect(Properties);

// FEATURED PROPERTIES

export const PropertiesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 2rem;
    
    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }

    @media (min-width: 576px) and (max-width: 968px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }
`

export const SingleProperty = styled.div`
   
    background-color: #fff;
    border: 1px solid #ebebeb;
    /* border-radius: 8px; */
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    transition: all .3s ease;
`

export const SinglePropertyThumb = styled.div`
    display: block;
    box-sizing: border-box;
    background: #1d293e;
    /* border-radius: 8px; */
    overflow: hidden;
    /* margin: 10px 9px 0 10px; */
    position: relative;
`

export const zoomOut = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

export const ImageCard = styled(Image)`
    vertical-align: middle;
    min-height: 200px;/**to make responsive */
    max-width: 100%;
    transform: scale(1.1);

    &:hover {
        animation: ${zoomOut} .5s ease-in-out forwards;
    }
`

export const TextBand = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(203, 166, 49, 0.7);
    padding: 5px 10px;
    color: #FFF;
    font-weight: 400;
    font-size: 15px;
    text-align: start;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #000;
    vertical-align: middle;

    span {
        font-weight: 700;
        text-shadow: 1px 1px 1px #000;
        font-size: 17px;
    }
`

export const Ribbon = styled.div`
    position: fixed;
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
        position: absolute;
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

export const SinglePropertyDetails = styled.div`
    position: relative;
    margin-left: .5rem;

    div{
        padding: 0 20px 20px 0px;
        /* text-align: center; */
        text-align: start;

        h4 {
            font-size: 1.2rem;
            font-size: var(--step-0);
            font-family: 'Lato';
            color: #333332;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 15px;
            text-transform: capitalize;
        }

        p {
            font-size: 1rem;
            font-size: var(--step--1);
            font-family: Lato;
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

const ButtonsInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin:0;
    padding: 0;
`

const PriceTag = styled.a`
    background-color: #323B54;
    /* background-color: #464e65; */
    display: block;
    justify-content: center;
    align-self: center;
    padding: .5rem 1rem;
    box-sizing: border-box;
    border: 1px solid #fff;
    /* border-radius: 5px; */
    font-size: var(--step--2);
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    /* width: 7rem; */
    margin: 1rem 0;

    @media(min-width: 768px) {
        margin-bottom: 0rem;
    }
`