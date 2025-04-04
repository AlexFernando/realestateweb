import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, useFills, keyframes } from "frontity";
import Image from "@frontity/components/image";
import {SectionFeaturedProperties, MarginPaddingContainer, SectionTitle, UnderlineTitle, IconTitle, IconTitleFill} from './home'
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

    let propertiesForSale = [];

    let propertiesForRent = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.properties[id];
            myPosts.push(singlePost);
        })

        myPosts.sort((a, b) => a.acf.status_property.localeCompare(b.acf.status_property));

        myPosts.length>0 && myPosts.forEach(elem => {
            if(elem.categories.includes(3)) {
                propertiesForSale.push(elem)
            }            
            else {
                propertiesForRent.push(elem)
            }
        })

    }

    return(
        <SectionFeaturedProperties>
            {
                propertiesForSale.length > 0 && propertiesForRent.length >0 ?

                <MarginPaddingContainer>

                    <SectionTitle>Latest Properties</SectionTitle>
            
                    <ListContainer>
                        <ListItem active={activeItem === 0} onClick={() => handleItemClick(0)}>For Rent </ListItem>
                        <ListItem active={activeItem === 1} onClick={() => handleItemClick(1)}>For Sale</ListItem>
                    </ListContainer>

                    <PropertiesGrid>
                        {
                            StateProperty === 'Sell' ? 
                                propertiesForSale.slice(0,3).map(property => {
                                    return(
                                    <SinglePropertyComponent property = {property} />
                                    )
                                })

                            :    
                                propertiesForRent.slice(0,3).reverse().map(property => {
                                    return(
                                        <SinglePropertyComponent property={property}/>
                                    )
                                })
                    
                        }
                    </PropertiesGrid>

                </MarginPaddingContainer>

                :null
            }

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
    /* display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    margin-top: 3rem; */

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 3rem;

`

const ListItem = styled.li`
    /* cursor: pointer;   
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    margin: auto 3rem;
    color: ${props => (props.active ? "#0c0c0c" : "#a6a6a6")};
    border-bottom: ${props => props.active ? "2px solid #0c0c0c": "unset"}; */

    font-size: 1rem;
    cursor: pointer;

    /* text-decoration: none; */
    /* background-color: var(--golden-color); */
    border-color: var(--main-color);
    color: #fff;
    padding: 1rem 2rem;
    position: relative;
    border-radius: 5px;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: ${props => (props.active ? "#cba631" : "#1c2641")};

    &:before {

        background-color: ${props => (props.active ? "#cba631" : "#1c2641")};
        content: ${props => (props.active ? "''" : "none")};
        height: 20px;
        margin-left: 5px;
        position: absolute;
        top: 35px;
        width: 20px;
        transform: rotate(45deg);
    }

`

