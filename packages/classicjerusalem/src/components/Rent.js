import React, {useEffect} from 'react';
import { connect, styled, css, Global, keyframes } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import {SingleProperty, SinglePropertyThumb, ImageCard, SinglePropertyDetails} from './properties'
import {MarginTop, PropertiesGridContainer} from './NewDevelopment'
import ZoomInOnScroll from './ZoomInEffect'
import SearchBar from './SearchBar';
import Rent from '../images/rent.jpg';
import Buy from '../images/buy_couple.jpg';
import Sell from '../images/sell_adult.jpg';
import RealEstateAgent from '../images/real_estate_agent.jpg'
import PesachRentals from './PesachRentals';


const RentComponent = ({state, actions, libraries}) => {

    return(
        <MarginTop>
     
        <SearchBar />

        <PropertiesGridContainer>

                <ZoomInOnScroll delay={0.2} duration={1} distance="200px">
                    <Link href="/rent/short-term-rentals/">
                        <SingleProperty key="forRent">
                            <SinglePropertyThumb>
                        
                                <ImageCard src={Rent} />

                            </SinglePropertyThumb>

                            <NeighborhoodDetails>
                        
                                    <h4>
                                        Short Term Rentals
                                    </h4>

                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend euismod blandit. Integer varius lectus et sem tempor tincidunt. Fusce sapien turpis, tristique vitae sapien ac, hendrerit imperdiet leo. Nulla facilisi.
                                    </p>
                            
                            </NeighborhoodDetails>
                        </SingleProperty>
                    </Link>
                </ZoomInOnScroll>
            
                <ZoomInOnScroll delay={0.2} duration={1} distance="200px">
                    <Link href="/rent/long-term-rentals/furnished/">
                        <SingleProperty key="forRent">
                            <SinglePropertyThumb>
                        
                                <ImageCard src={Buy} />

                            </SinglePropertyThumb>

                            <NeighborhoodDetails>
                        
                                    <h4>
                                        Long Term Rentals Furnished
                                    </h4>

                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend euismod blandit. Integer varius lectus et sem tempor tincidunt. Fusce sapien turpis, tristique vitae sapien ac, hendrerit imperdiet leo. Nulla facilisi.
                                    </p>
                            
                            </NeighborhoodDetails>
                        </SingleProperty>
                    </Link>
                </ZoomInOnScroll>

                <ZoomInOnScroll delay={0.2} duration={1} distance="200px">
                    <Link href="/rent/long-term-rentals/unfurnished/">
                        <SingleProperty key="forRent">
                            <SinglePropertyThumb>
                        
                                <ImageCard src={Sell} />

                            </SinglePropertyThumb>

                            <NeighborhoodDetails>
                                    <h4>
                                        Long Term Rentals Unfurnished
                                    </h4>

                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend euismod blandit. Integer varius lectus et sem tempor tincidunt. Fusce sapien turpis, tristique vitae sapien ac, hendrerit imperdiet leo. Nulla facilisi.
                                    </p>
                            </NeighborhoodDetails>
                        </SingleProperty>
                    </Link>
                </ZoomInOnScroll>

                <ZoomInOnScroll delay={0.2} duration={1} distance="200px">
                    <Link href="/rent/pesach-and-succot-rentals/">
                        <SingleProperty key="forRent">
                            <SinglePropertyThumb>
                        
                                <ImageCard src={RealEstateAgent} />

                            </SinglePropertyThumb>

                            <NeighborhoodDetails>
                                    <h4>
                                        Pesach And Succot Rentals
                                    </h4>

                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend euismod blandit. Integer varius lectus et sem tempor tincidunt. Fusce sapien turpis, tristique vitae sapien ac, hendrerit imperdiet leo. Nulla facilisi.
                                    </p>
                            </NeighborhoodDetails>
                        </SingleProperty>
                    </Link>
                </ZoomInOnScroll>
        
        
        </PropertiesGridContainer>


        </MarginTop>
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

export default connect(RentComponent)