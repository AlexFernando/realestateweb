import React, {useEffect} from 'react';
import { connect, styled, css, Global, keyframes } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import {SingleProperty, SinglePropertyThumb, ImageCard, SinglePropertyDetails} from './properties'
import SinglePropertyComponent from './SingleProperty';
import {MarginTop, PropertiesGridContainer} from './NewDevelopment'
import {PropertiesGrid} from './Rent'
import ZoomInOnScroll from './ZoomInEffect'
import SearchBar from './SearchBar';
import noImage from '../images/no_image.jpg';

const Neighborhood = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/neighborhood")
    }, [])

    const data = state.source.get('/neighborhood');

    let myPosts = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.neighborhood[id];
            myPosts.push(singlePost);
        })
    }

    const pageNeighborhood = state.source.page[156];

    const Html2react = libraries.html2react.Component;

    return(
        <>

        {!data.isReady && typeof pageNeighborhood === "undefined" ? <Loading /> : 

            <MarginTop>
                
                <PropertiesGridNeigh>

                    {
                        myPosts.reverse().map(property => {

                            const newParagraph = property.content.rendered.substring(0, 250);
                            
                            return(

                                    <Link href={property.link}>
                                        <SingleProperty key={property.id}>
                                            <SinglePropertyThumb>
                                            {
                                                property.acf.image_card? 

                                                <ImageCardNeighborhood src={property.acf.image_card.sizes.medium_large} />

                                                :<ImageCardNeighborhood src={noImage} />
                                            }


                                            </SinglePropertyThumb>

                                            <NeighborhoodDetails>
                                        
                                                    <h4>
                                                    {property.title.rendered}
                                                    </h4>

                                                    <p>
                                                        <Html2react html={newParagraph} />
                                                    </p>
                                            
                                            </NeighborhoodDetails>
                                        </SingleProperty>
                                    </Link>
                        
                            )
                        })
                    }
                
                </PropertiesGridNeigh>

            </MarginTop>
        }
        </>
    )
}

const NeighborhoodDetails = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;

    h4{
        color: #191919;
        text-align: center;
    }

    p {
        color: gray;
        text-align: justify;
    }
`

const PropertiesGridNeigh = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: calc(5rem/2);
    padding-right: calc(5rem/2);

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }

    @media (min-width: 577px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }
`

export const ImageCardNeighborhood = styled(Image)`
    /* vertical-align: middle; */
    /* min-height: 200px; */
    /**to make responsive */
    /* max-width: 100%; */
    /* transform: scale(1.1);

    &:hover {
        animation: ${zoomOut} .5s ease-in-out forwards;
    } */

    display: block;
    width: 100%;
    /* height: auto; */
    /* object-fit: contain; */
    height: 350px;

    @media (max-width: 968px){
        height: 200px;
    }

    @media (min-width: 968px) and (max-width: 1199px){
        height: 220px;
    }

    @media (min-width: 1200px) and (max-width: 1440px){
        height: 250px;
    }
`

export default connect(Neighborhood)