import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, useFills, keyframes } from "frontity";
import Image from "@frontity/components/image";
import {SectionFeaturedProperties, MarginPaddingContainer, SectionTitle, UnderlineTitle} from './home'
import SinglePropertyComponent from './SingleProperty';

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
                    <ListItem active={activeItem === 0} onClick={() => handleItemClick(0)}>To Rent </ListItem>
                    <ListItem active={activeItem === 1} onClick={() => handleItemClick(1)}>To Buy</ListItem>
                </ListContainer>

                <PropertiesGrid>
                    {
                        StateProperty === 'Sell' ? 
                        
                            myPosts.slice(0,3).map(property => {
                                return(
                                <SinglePropertyComponent property = {property} />
                                )
                            })

                        : 
                        
                           
                            myPosts.slice(0,3).reverse().map(property => {
                                return(
                                    <SinglePropertyComponent property={property}/>
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

`

