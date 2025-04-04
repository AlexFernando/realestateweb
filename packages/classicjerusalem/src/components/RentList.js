import React, { useState, useEffect} from 'react';
import { connect, styled, css, Global, useFills, keyframes } from "frontity";
import SinglePropertyList from './SinglePropertyList';
import SliderDots from './Slider';
import {MarginTop, PropertiesGridContainer} from './NewDevelopment'
import {MarginPaddingContainer} from './home';
import SearchBarRentPages from './SearchBarRentPages';
import Loading from './Loading';

const RentComponentList = ({state, actions, libraries}) => {

    const [arrResult, setArrResult] = useState([]);
    const [allRentProperties, setAllRentProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState({});

    let myPostsFiltered = []

    useEffect(() => {
        actions.source.fetch("/properties").then(() => {
            const data = state.source.get('/properties');
            let myPosts = data.items.map(({ id }) => state.source.properties[id]);
            myPostsFiltered = myPosts.filter(elem => {
                return !elem.categories.includes(7)  && !elem.categories.includes(3) && !elem.categories.includes(1) && !elem.categories.includes(14);
            });
            myPostsFiltered.sort((a, b) => a.acf.status_property.localeCompare(b.acf.status_property));
            setAllRentProperties(myPostsFiltered);
        });
    }, []);

    
    const handleResults = (result) => {
        setArrResult(result)
    }

    console.log("arrResult", arrResult)
    console.log("My All Properties again: ", allRentProperties)


    return(
 

        <>
      
            {
                allRentProperties.length > 0 ?
                
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

                        <PropertiesGrid>
                  
                                {
                                    allRentProperties.map(property => {
                                        return(
                                            <SinglePropertyList property={property}/>
                                        )
                                    })
                                }
                         
                        </PropertiesGrid> 

                        : arrResult.length > 0 && Object.keys(searchTerm).length > 0 ?
                        
                        <PropertiesGrid>
                            {
                                arrResult.map(property => {
                                    return(
                                        <SinglePropertyList property={property}/>
                                    )
                                })
                            }
                        </PropertiesGrid> 

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
    )
}

export const PropertiesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }

    @media (min-width: 577px) and (max-width: 1024px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }
`

export const MarginTopSearchBar = styled.div`
    margin-top: 10rem;
`

export const TextSearchFilter = styled.div`
    display: flex;
    justify-content: center;

    p{
        color : #4d4d4d;
        font-style: italic;
        margin-right: .5rem;
    }

    span {
        color: #4d4d4d;
    }
`

export const TextNoPropertiesFound = styled.div`
    text-align: center;
    p{
        color : #4d4d4d;
        margin: 2rem auto;
        font-size: 1.5rem;
        font-style: italic;
    }
`

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

export default connect(RentComponentList)