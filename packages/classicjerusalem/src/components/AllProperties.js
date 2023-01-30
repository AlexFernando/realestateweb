import React, {useState, useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
import {SectionFeaturedProperties} from './home';
import {SingleProperty, SinglePropertyThumb, SinglePropertyDetails, ImageCard, ImageContent} from './properties'
import Link from './Link';
import { IconContext } from "react-icons";
import {ImLocation} from 'react-icons/im';

const AllProperties = ({state, actions, libraries}) => {


    return ( 
 
        <>
            <ContainerBackgroundTour>

                <BackgroundColor>
                    <div>
                        <h3>Find your Property</h3>
                    </div>
                </BackgroundColor>

            </ContainerBackgroundTour>

            <SectionFeaturedProperties>
            
                <ContainerPropertiesForm>

                    <SearchTabContent>
                        <SearchForm>
                            <div>
                                <SearchMultiFilter>
                                    <ListFilter>
                                        <div>
                                            <h3>Find a Property</h3>
                                        </div>
                                        <ItemList>
                                            <EnterSearchInput>
                                                <div>
                                                    <input type="text" placeholder="Enter keyword" />
                                                </div>

                                            </EnterSearchInput>
                                        </ItemList>

                                        <ItemList>
                                            <ProperyType>
                                                <div>
                                                    <select>
                                                        <option value>Property Type</option>
                                                        <option>Apartment</option>
                                                        <option>House</option>
                                                        <option>Condo</option>
                                                        <option>Bungalows</option>
                                                    </select>
                                                </div>
                                            </ProperyType>
                                        </ItemList>

                                        <ItemList>
                                            <ProperyType>
                                                <div>
                                                    <select>
                                                        <option value>Bedrooms</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4 or more</option>
                                                    </select>
                                                </div>
                                            </ProperyType>
                                        </ItemList>


                                        <ItemList>
                                            <ProperyType>
                                                <div>
                                                    <select>
                                                        <option value>Price</option>
                                                        <option>1000 - 2000 usd</option>
                                                        <option>2000 - 4000 usd</option>
                                                        <option>4000 - 8000 usd</option>
                                                        <option>8000 usd or more</option>
                                                    </select>
                                                </div>
                                            </ProperyType>
                                        </ItemList>

                                     
                                            <div>
                                                <button>Search</button>
                                            </div>
                                      
                                    </ListFilter>
                                </SearchMultiFilter>
                            </div>
                        </SearchForm>
                    </SearchTabContent>

                    <PropertiesGrid>

                        {
                            [0,1,2,3,4,5].map(element => {
                                return(
                                    <Link href="/details">
                                        <SingleProperty key={element}>
                                            <SinglePropertyThumb>
                                                <ImageCard src="https://findhousenextjs.vercel.app/assets/images/property/fp2.jpg" />
                                                <ImageContent>
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
                                                        1600
                                                        <small>/mo</small>
                                                    </p>

                                                </ImageContent>
                                            </SinglePropertyThumb>

                                            <SinglePropertyDetails>
                                                <div>
                                                    <h4>
                                                        <a href="#">Luxury Aparment</a>
                                                    </h4>

                                                    <p>
                                                        <span>
                                                        <IconContext.Provider value={{ color: "#b27c00", className: "global-class-name", size: "1rem" } }>
                                                            <ImLocation />
                                                        </IconContext.Provider>
                                                        </span>
                                                        Talbiya, Jerusalem, Israel
                                                    </p>

                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                Beds
                                                                :   
                                                                1 
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="#">
                                                                Baths 
                                                                :   
                                                                1 
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                sqm 
                                                                :   
                                                                100
                                                            </a>
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
                    
                </ContainerPropertiesForm>
            </SectionFeaturedProperties>

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
    background-image: linear-gradient(to top, rgba(34,49,63, .3), rgba(34, 49, 63, .3)); 
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
    justify-content: space-between;
    align-items: flex-start;
    margin-left: calc(8rem + 1.5625vw);
    margin-right: calc(8rem + 1.5625vw);
    margin-top: 3rem;
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

    flex-basis: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

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


/**Search Form */
const SearchTabContent = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const SearchForm = styled.div`
    background-color: #fff;
    background-color: #1C2641;
    border-radius: 8px;
    padding: 30px 20px;
    position: relative;
    z-index: 9;


    &:before {
        /* background-color: hsla(0,0%,100%,.15); */
        border-radius: 8px;
        bottom: -10px;
        content: "";
        left: -10px;
        position: absolute;
        right: -10px;
        top: -10px;
        z-index: -1;
    }
`
const SearchMultiFilter = styled.div`
    /* position: relative; */
    display: flex;
    justify-content: center;
`

const ListFilter = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        flex-basis: 100%;
        width: 100%;
        @media (max-width: 1200px) {
            width: 100%;
        }

        h3 {
            color: #fff;
            text-transform: uppercase;
            margin-top: 0;
        }

        button {
            border-radius: 8px;
            background-color: var(--golden);
            font-size: 16px;
            color: #fff;
            font-weight: 700;
            line-height: 1.2;
            height: 50px;
            transition: all .3s ease;
            cursor: pointer;
            border: none;
            width: 100%;


            @media (max-width: 1200px) {
                width: 100%;
            }
        }
    }
`

const ItemList = styled.li`
    display: inline-block;
    line-height: 3;
    vertical-align: text-top;
    width: 100%;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
        margin-bottom: 1rem;
        width: 40%;
        margin-right: 0;
        margin-left: 0;
    }
`
const EnterSearchInput = styled.div`
    margin-bottom: 0;

    div {
        width: 100%;
        
        input {
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: 14px;
            color: #484848;
            line-height: 1.2;
            height: 50px;
            /* width: 215px;   */
            padding: 0 1rem;
            box-sizing: border-box; 
            width: 100%;

        &:focus {
           outline: none;
        }  
    }
    }

`
const ProperyType = styled.div`

    div {
        width: 100%;
        select {
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: 14px;
            color: #777;
            line-height: 1.2;
            height: 50px;
            /* width: 215px; */
            padding: 1rem;
            width: 100%;
            /* box-sizing: border-box; */
  
            &:focus {
                outline: none;
            }  

            &:after {
                margin-right: 2rem;
            }
        }
    }
`

/**Search Form */
/**END PROPERTY LISTING SECTION */

export default connect(AllProperties);