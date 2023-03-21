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
import {PropertiesGrid, SingleProperty, SinglePropertyThumb, ImageCard, SinglePropertyDetails, Ribbon, TextBand} from './properties'
import LinkButtonHome from './LinkButtonHome';
import ZoomInOnScroll from './ZoomInEffect'
import SearchBar from './SearchBar';

const NewDevelopment = ({state, actions, libraries}) => {

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
        <MarginTop>
     
                <SearchBar />

                <PropertiesGridContainer>

                    {
                        myPosts.reverse().map(property => {
                            return(
                            <ZoomInOnScroll delay={0.2} duration={1} distance="200px">
                            <Link href={property.link}>
                                <SingleProperty key={property.id}>
                                    <SinglePropertyThumb>
                                        <Ribbon>
                                            <span>
                                                Investment
                                            </span>
                                        </Ribbon>
                                        <ImageCard src={property.acf.images_carousel.img_one.sizes.medium_large} />
                                        {/* <ImageContent>
                                            <ul>
                                                <li>
                                                    <a>Featured</a>
                                                </li>

                                                <li>
                                                    <a>Sale</a>
                                                </li>
                                            </ul>

                                            <p>
                                                $
                                                {` `+property.acf.details_properties.price_dollars}
                                                <small>/mo</small>
                                            </p>

                                        </ImageContent> */}

                                        <TextBand>
                                            <span>$1 230 000 </span>
                                            | FOR SALE
                                        </TextBand>
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

                                            <LinkButtonHome href={property.link}>
                                                View Details
                                            </LinkButtonHome>
                                        </div>
                                    </SinglePropertyDetails>
                                </SingleProperty>
                                </Link>
                                </ZoomInOnScroll>
                            )
                        })
                    }

                </PropertiesGridContainer>
        

        </MarginTop>
    )


}

export const MarginTop = styled.div`
    margin-top: 10rem;
    width: min(90%, 1800px);
    margin-right: auto;
    margin-left: auto;
`

export const PropertiesGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
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

    @media (min-width: 968px) and (max-width: 1440px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }
`

export default connect(NewDevelopment)