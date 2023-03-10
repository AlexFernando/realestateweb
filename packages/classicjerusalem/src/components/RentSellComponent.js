import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, useFills } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import { IconContext } from "react-icons";
import {ImLocation} from 'react-icons/im';
import {SectionFeaturedProperties, MarginPaddingContainer, SectionTitle, UnderlineTitle} from './home'
import {IoBedOutline} from 'react-icons/io5'
import {FaShower} from 'react-icons/fa'
import {TfiRulerAlt2} from 'react-icons/tfi'


const RentSell = ({state, actions, libraries}) => {

    const [StateProperty, setStateProperty] = useState('Rent')

    /**Item Switch color */
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = itemIndex => {
      setActiveItem(itemIndex);

      if(itemIndex === 0) {
        setStateProperty('Rent')
      }
      else {
        setStateProperty('Sell')
      }
    };
    
    /**End Item Switch color */

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
    }

    return(
        <SectionFeaturedProperties>
            <MarginPaddingContainer>

                <SectionTitle>Latest Properties</SectionTitle>

                <UnderlineTitle>
                    <span></span>
                </UnderlineTitle>

           
                <ListContainer>
                    <ListItem active={activeItem === 0} onClick={() => handleItemClick(0)}>For Rent </ListItem>
                    <ListItem active={activeItem === 1} onClick={() => handleItemClick(1)}>To Buy</ListItem>
                </ListContainer>

                <PropertiesGrid>
                    {
                        StateProperty === 'Sell' ? 
                        myPosts.slice(0,3).map(property => {
                            return(
                            <Link href={property.link}>
                                <SingleProperty key={property.id}>
                                    <SinglePropertyThumb>
                                        <ImageCard src={property.acf.images_carousel.img_one.sizes.medium_large} />
                                        <ImageContent>
                                            <ul>
                                                <li>
                                                    <a>Featured</a>
                                                </li>

                                                <li>
                                                    <a>Sale</a>
                                                </li>
                                            </ul>
                                            {/* 
                                            <p>
                                                $
                                                {` `+property.acf.details_properties.price_dollars}
                                                <small>/mo</small>
                                            </p> */}

                                        </ImageContent>
                                    </SinglePropertyThumb>

                                    <SinglePropertyDetails>
                                            <div>
                                                <h4>
                                                    {property.acf.details_properties.property_name}
                                                </h4>
    
                                                <p>
                                                    <span>
                                                    <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                                        <ImLocation />
                                                    </IconContext.Provider>
                                                    </span>
                                                    {property.acf.details_properties.address}
                                                </p>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1rem"} }>
                                                                <IoBedOutline />
                                                            </IconContext.Provider>
                                                        </span>
                                                        
                                                        <span>
                                                            {property.acf.details_properties.beds}
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span>
                                                            <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1rem"} }>
                                                                <FaShower />
                                                            </IconContext.Provider>
                                                        </span>
                                                        <span>{property.acf.details_properties.baths}</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1rem"} }>
                                                                <TfiRulerAlt2 />
                                                            </IconContext.Provider>
                                                        </span>
                                                        <span>{property.acf.details_properties.sqm}</span>
                                                        <span>Sqm</span>
                                                    </li>
                                                </ul>
                                            </div>
                                    </SinglePropertyDetails>
                                </SingleProperty>
                                </Link>
                            )
                        })

                        : 
                        
                           
                            myPosts.slice(0,3).reverse().map(property => {
                                return(
                                <Link href={property.link}>
                                    <SingleProperty key={property.id}>
                                        <SinglePropertyThumb>
                                            <ImageCard src={property.acf.images_carousel.img_one.sizes.medium_large} />
                                            <ImageContent>
                                                <ul>
                                                    <li>
                                                        <a>Featured</a>
                                                    </li>
    
                                                    <li>
                                                        <a>Rent</a>
                                                    </li>
                                                </ul>
    
                                                <p>
                                                    $
                                                    {` `+property.acf.details_properties.price_dollars}
                                                    <small>/mo</small>
                                                </p>
    
                                            </ImageContent>
                                        </SinglePropertyThumb>
    
                                        <SinglePropertyDetails>
                                            <div>
                                                <h4>
                                                    {property.acf.details_properties.property_name}
                                                </h4>
    
                                                <p>
                                                    <span>
                                                    <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                                        <ImLocation />
                                                    </IconContext.Provider>
                                                    </span>
                                                    {property.acf.details_properties.address}
                                                </p>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1rem"} }>
                                                                <IoBedOutline />
                                                            </IconContext.Provider>
                                                        </span>
                                                        
                                                        <span>
                                                            {property.acf.details_properties.beds}
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span>
                                                            <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1rem"} }>
                                                                <FaShower />
                                                            </IconContext.Provider>
                                                        </span>
                                                        <span>{property.acf.details_properties.baths}</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <IconContext.Provider value={{ color: "#333332", className: "global-class-name", size: "1rem"} }>
                                                                <TfiRulerAlt2 />
                                                            </IconContext.Provider>
                                                        </span>
                                                        <span>{property.acf.details_properties.sqm}</span>
                                                        <span>Sqm</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </SinglePropertyDetails>
                                    </SingleProperty>
                                    </Link>
                                )
                            })
                
                        

                    }
                
                </PropertiesGrid>

            </MarginPaddingContainer>
        </SectionFeaturedProperties>
    )


}

export default connect(RentSell);

// FEATURED PROPERTIES

export const PropertiesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 4rem;

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

const ListContainer = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    margin-top: 3rem;

`

const ListItem = styled.li`
    cursor: pointer;   
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    margin: auto 3rem;
    color: ${props => (props.active ? "#0c0c0c" : "#a6a6a6")};
    border-bottom: ${props => props.active ? "2px solid #0c0c0c": "unset"};

    @media (min-width: 1024px) and (max-width: 1440px){
        font-size: var(--step--1);
    }
`

export const SingleProperty = styled.div`   
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    transition: all .3s ease;
  
`

export const SinglePropertyThumb = styled.div`
    display: block;
    box-sizing: border-box;
    background: #1d293e;
    border-radius: 8px;
    overflow: hidden;
    margin: 10px 9px 0 10px;
    position: relative;
`

export const ImageCard = styled(Image)`
    opacity: .6;
    vertical-align: middle;
    min-height: 220px;
    max-width: 100%;
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

        small {
            font-size: 14px;
        }

        @media (min-width: 1024px) and (max-width: 1440px){
            font-size: var(--step--1);
        }
    }
`

export const SinglePropertyDetails = styled.div`
    position: relative;

    div{
        padding: 0 20px 20px 20px;
        text-align: center;

        h4 {
            font-size: 1.2rem;
            font-size: var(--step-0);
            font-family: Lato;
            color: #333332;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 15px;
            text-transform: capitalize;

            @media (min-width: 1024px) and (max-width: 1440px){
                font-size: var(--step--1);
            }
        }


        p {
            font-size: 1rem;
            font-size: var(--step--1);
            font-family: Lato;
            color: var(--golden);
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;

            @media (min-width: 1024px) and (max-width: 1440px){
                font-size: var(--step--2);
            }
        }

 

        ul {
            display: flex;
            justify-content: center;
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
            font-weight: 500;
            padding: 0 8px;
            color: #333332;

            span {
                font-size: 200;
                margin-left: 2px;
            }
        }
    }
`