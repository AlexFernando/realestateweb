import React, {useState, useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
import {SectionFeaturedProperties} from './home';
import SearchBarForm from './SearchBarSell';
import Loading from './Loading';
import SinglePropertyComponent from './SingleProperty';
import SearchBarBgRent from './SearchBarBgRent';
import {MarginBottomSearchBar} from './RentFurnished'

import {MarginPaddingContainer} from './home';
import SearchBarRentPages from './SearchBarRentPages';
import {MarginTopSearchBar, TextSearchFilter, TextNoPropertiesFound} from './Rent'
import SliderDots from './Slider';

const ShorTermRentals = ({state, actions, libraries}) => {

    const [arrResult, setArrResult] = useState([]);
    const [allRentProperties, setAllRentProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState({});
    

    useEffect(() => {
        actions.source.fetch("/category/short-term-rentals/").then(() => {
            const dataPropertiesFurnished = state.source.get("/category/short-term-rentals/");
            if(dataPropertiesFurnished.isCategory) {
            let myPostsFiltered = dataPropertiesFurnished.items.map(({ id }) => state.source.properties[id]);
            setAllRentProperties(myPostsFiltered);
            }
        });
    }, []);

    
    const handleResults = (result) => {
        setArrResult(result)
    }
    

    return ( 

        <>
        {
            allRentProperties.length > 0?

        <MarginPaddingContainer>


            <MarginTopSearchBar>
                <SearchBarRentPages allRentProperties={allRentProperties} handleResults= {handleResults} setSearchTerm={setSearchTerm} setArrResult={setArrResult} />
            </MarginTopSearchBar>

            <TextSearchFilter>
                {
                    Object.keys(searchTerm).map(elem => {
                        if(searchTerm[elem] !== '') {
                            return(
                                <p>{elem}: <span>{searchTerm[elem]}</span></p>
                            )
                        }
                    })
                }

            </TextSearchFilter>

            {
   
                    allRentProperties.length > 0 && Object.keys(searchTerm).length === 0 ?

                    <>
                        <SliderDots>
                            {
                                allRentProperties.map(property => {
                                    return(
                                        <SinglePropertyComponent property={property}/>
                                    )
                                })
                            }
                        </SliderDots> 
                    </> 

                    : arrResult.length > 0 && Object.keys(searchTerm).length > 0 ?
                    
                    <SliderDots>
                        {
                            arrResult.map(property => {
                                return(
                                    <SinglePropertyComponent property={property}/>
                                )
                            })
                        }
                    </SliderDots> 

                    : arrResult.length === 0 && Object.keys(searchTerm).length > 0 ?
                    
                    <TextNoPropertiesFound>
                        <p>No properties found with this critera</p>
                        <p>Choose another set of filter or clear all the filters</p>
                    </TextNoPropertiesFound>

                    : null
            }
        </MarginPaddingContainer>
        : <Loading />
        }
        </>
     );
}

export const ContainerBackgroundTour = styled.div`
    background-image: url("https://findhousenextjs.vercel.app/_next/static/media/inner-pagebg.17d731a1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    height: 370px;
    margin-top: 6rem;
`

export const BackgroundColor = styled.div`

    background-image: linear-gradient(to top, rgba(34,49,63, .5), rgba(34, 49, 63, .5)); 
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    overflow-wrap: break-word;
    height: 370px;


    div {
        margin-left: calc(6rem + 1.5625vw);
        line-height: 2;

        @media(max-width: 768px) {
            margin-left: 1rem;
        }

        h3 {
            text-transform: capitalize;
            font-size: 2rem;
        
            font-weight: 600;

            @media(max-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }


`;

/**SECTION PROPERTY LISTING */

export const ContainerPropertiesForm = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    margin-left: calc(8rem + 1.5625vw);
    margin-right: calc(8rem + 1.5625vw);
    margin-top: 8rem;
    max-width: 1800px;

    @media (min-width: 1201px) and (max-width: 1420px){
        max-width: 1400px;
        margin-left: calc(5rem + 1.5625vw);
        margin-right: calc(5rem + 1.5625vw);
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        max-width: 1140px;
        margin-left: calc(3rem + 1.5625vw);
        margin-right: calc(3rem + 1.5625vw);
    }

    @media (min-width: 769px)  and (max-width: 992px){
        max-width: 960px;
        margin-left: calc(2rem + 1.5625vw);
        margin-right: calc(2rem + 1.5625vw);
        flex-direction: column;
    }

    @media (min-width: 576px) and (max-width: 768px){
        max-width: 720px;
        margin-left: calc(1rem + 1.5625vw);
        margin-right: calc(1rem + 1.5625vw);   
        flex-direction: column;
    }

    @media (max-width: 576px){
        max-width: 540px;
        flex-direction: column;
        margin-left: 1rem;
        margin-right: 1rem;  
    }
`


/**Properties */
export const PropertiesGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    @media (min-width: 769px) and (max-width: 1420px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (min-width: 576px) and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`

/**End Properties */

/**END PROPERTY LISTING SECTION */

export default connect(ShorTermRentals);