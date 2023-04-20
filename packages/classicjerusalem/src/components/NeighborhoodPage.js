import React, {useEffect} from 'react';
import { connect, styled, css, Global, keyframes } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import {SingleProperty, SinglePropertyThumb, ImageCard, SinglePropertyDetails} from './properties'
import {MarginTop, PropertiesGridContainer} from './NewDevelopment'
import ZoomInOnScroll from './ZoomInEffect'
import SearchBar from './SearchBar';

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
        
                <SearchBar />
                
                <PropertiesGridContainer>

                    {
                        myPosts.reverse().map(property => {

                            const newParagraph = property.content.rendered.substring(0, 250);
                            
                            return(
                                <ZoomInOnScroll delay={0.2} duration={1} distance="200px">
                                    <Link href={property.link}>
                                        <SingleProperty key={property.id}>
                                            <SinglePropertyThumb>
                                        
                                                <ImageCard src={property.acf.image_card.sizes.medium_large} />

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
                                </ZoomInOnScroll>
                            )
                        })
                    }
                
                </PropertiesGridContainer>

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

export default connect(Neighborhood)