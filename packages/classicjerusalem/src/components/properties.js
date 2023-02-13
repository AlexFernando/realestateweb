import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import { IconContext } from "react-icons";
import {ImLocation} from 'react-icons/im';

const Properties = ({state, actions, libraries}) => {

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
        console.log("los post: ", myPosts)
    }



    return(

        <PropertiesGrid>

            {
                myPosts.slice(0,3).map(property => {
                    return(
                    <Link href={property.link}>
                        <SingleProperty key={property.id}>
                            <SinglePropertyThumb>
                                <ImageCard src={property.acf.images_carousel.img_one.sizes.medium_large} />
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
                                        {` `+property.acf.details_properties.price_dollars}
                                        <small>/mo</small>
                                    </p>

                                </ImageContent>
                            </SinglePropertyThumb>

                            <SinglePropertyDetails>
                                <div>
                                    <h4>
                                        <a href="#">{property.acf.details_properties.property_name}</a>
                                    </h4>

                                    <p>
                                        <span>
                                        <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                            <ImLocation />
                                        </IconContext.Provider>
                                        </span>
                                        {property.acf.details_properties.address}
                                    </p>

                                    <ul>
                                        <li>
                                            <p>{property.acf.details_properties.beds}</p>
                                            Beds
                                        </li>

                                        <li>
                                            <p>{property.acf.details_properties.baths}</p>
                                            Bathroom
                                        </li>
                                        <li>
                                            <p>{property.acf.details_properties.sqm}</p>
                                            Sqm
                                        </li>
                                    </ul>
                                </div>
                            </SinglePropertyDetails>
                        </SingleProperty>
                        </Link>
                    )
                })
            }

            {/* {
                [0,1].map(element => {
                    return(
                        <Link href="/details">
                        
                            <SingleProperty key={element} >
                                <SinglePropertyThumb>
                                    <ImageCard src="https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/02/image00001-1-768x512.jpeg" />
                                    <ImageContent>
                                        <ul>
                                            <li>
                                                <a>Featured</a>
                                            </li>

                                            <li>
                                                <a>Rent</a>
                                            </li>
                                        </ul>

                                        <p>
                                            $
                                            1400
                                            <small>/mo</small>
                                        </p>

                                    </ImageContent>
                                </SinglePropertyThumb>

                                <SinglePropertyDetails>
                                    <div>
                                        <h4>
                                            <a href="#"> Renovated Aparment</a>
                                        </h4>

                                        <p>
                                            <span>
                                            <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                                <ImLocation />
                                            </IconContext.Provider>
                                            </span>
                                            The German Colony, Jerusalem.
                                        </p>

                                        <ul>
                                            <li>
                                                <p>4</p>
                                                Beds
                                            </li>

                                            <li>
                                                <p>2</p>
                                                Bathroom
                                            </li>
                                            <li>
                                                <p>190</p>
                                                Sqm
                                            </li>
                                        </ul>
                                    </div>
                                </SinglePropertyDetails>
                            </SingleProperty>
                        </Link>
                    )
                })
            } */}
        
        </PropertiesGrid>
    )


}

export default connect(Properties);

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

export const SingleProperty = styled.div`   
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    transition: all .3s ease;
  
`

export const SinglePropertyThumb = styled.div`
    display: block;
    box-sizing: border-box;
    background: #1d293e;
    border-radius: 8px;
    overflow: hidden;
    margin: 10px 9px 0 10px;
    position: relative;
    max-height: 28vh;
`

export const ImageCard = styled(Image)`
    opacity: .7;
    vertical-align: middle;
    min-height: 220px;
    max-width: 100%;
`
export const ImageContent = styled.div`
    bottom: 0;
    left: 10px;
    position: absolute;
    right: 10px;
    top: 10px;

    ul{
        display: flex;
        position: absolute;
        left: 12px;
        top: 10px;
        list-style: none;
        margin:0;
        padding: 0;

        li {
            border-radius: 3px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            width: 75px;

            &:nth-of-type(2n+1) {
              
                background-color: #3e4c66;

            }
            
            &:nth-of-type(2n) {
                margin-left: 1rem;
                background-color: var(--golden);;
            }

            a {
                font-size: 14px;
            
                color: #fff;
                line-height: 1.2;
                text-decoration: none;
            }
        }


    }


    p {
        bottom: 15px;
        font-size: 22px;
        /* font-family: Nunito; */
        color: #fff;
        font-weight: 700;
        left: 20px;
        line-height: 1.2;
        position: absolute;

        small {
            font-size: 14px;
        }
    }
`

export const SinglePropertyDetails = styled.div`
    position: relative;

    div{
        padding: 20px;
        text-align: center;

        h4 {
            font-size: 1.2rem;
            font-family: Lato;
            color: #484848;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 15px;
            text-transform: capitalize;

            a {
                text-decoration: none;
                color: #484848;
            }

        }

        p {
            font-size: 1rem;
            font-family: Lato;
            color: var(--golden);
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;
        }

 

        ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            display: inline-block;
            font-weight: 300;
    
            :not(:last-child) {
                border-right: 1px solid #ccc;
            }
            
            font-size: 12px;
            font-weight: 500;
            padding: 0 8px;
            color: #777;
            

            a {
                text-decoration: none;
                color: #484848;
                font-size: .8rem;
            }

            p {

                font-size: 15px;
                line-height: 18px;
                margin-bottom: 5px;
                color: #484848;
                text-align: center;
            }
        }
    }
`