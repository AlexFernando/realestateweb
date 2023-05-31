import React, {useEffect} from 'react';
import { connect, styled, css, Global, keyframes } from "frontity";
import {SectionFeaturedProperties} from './home';
import SearchBarForm from './SearchBarSell';
import Loading from './Loading';
import SinglePropertyComponent from './SingleProperty';
import {MarginTopSearchBar, TextSearchFilter, TextNoPropertiesFound} from './Rent'

const NewDevelopment = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/category/new-development/");
    }, [])

    const dataPropertiesNewDevelopment = state.source.get("/category/new-development/");

    let myPosts = [];

    if(dataPropertiesNewDevelopment.isCategory) {
        console.log("lenght :", dataPropertiesNewDevelopment.items.length )
            dataPropertiesNewDevelopment.items.map( ({type, id}) => {
                const singleProperty = state.source[type][id];
                myPosts.push(singleProperty);
            }
        )
    }
    
    return ( 
        <>
        {
            dataPropertiesNewDevelopment.isReady?
            
      

            <SectionFeaturedProperties>

                <ContainerPropertiesForm>

                    <SearchBarForm />
                
                    <PropertiesGrid>
                        {myPosts.length > 0 && myPosts.map?(property => {
                            return(
                                <SinglePropertyComponent property={property} />
                            )
                        })

                        
                        : 
                        
                        <TextNoPropertiesFound>
                           <p>
                                No properties to show yet
                            </p> 
                            <p>
                                This will be updated soon
                            </p>
                        </TextNoPropertiesFound>
                        }
         
                    </PropertiesGrid>
                    
                </ContainerPropertiesForm>
            </SectionFeaturedProperties>



        
        : <Loading/>
        }
        </>
     );

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

export default connect(NewDevelopment)