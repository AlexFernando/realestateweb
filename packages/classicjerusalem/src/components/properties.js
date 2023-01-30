import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import Loading from './Loading';
import { IconContext } from "react-icons";
import {ImLocation} from 'react-icons/im';

const Properties = ({state, actions, libraries}) => {

    return(

        <PropertiesGrid>

            {
                [0,1,2].map(element => {
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
                                            <p>2</p>
                                            Beds
                                        </li>

                                        <li>
                                            <p>1</p>
                                            Bathroom
                                        </li>
                                        <li>
                                            <p>120</p>
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

            {
                [0,1,2].map(element => {
                    return(
                        <Link href="/details">
                        
                            <SingleProperty key={element} >
                                <SinglePropertyThumb>
                                    <ImageCard src="https://findhousenextjs.vercel.app/assets/images/property/fp3.jpg" />
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
                                            <IconContext.Provider value={{ color: "#b27c00", className: "global-class-name", size: "1rem" } }>
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
            }
        
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
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (min-width: 576px) and (max-width: 968px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
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
`

export const ImageCard = styled(Image)`
    opacity: .8;
    object-fit: fill;
    min-height: 220px;
    vertical-align: middle;
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
                background-color: #b27c00;;
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
        font-family: Nunito;
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
            font-family: Nunito;
            color: #484848;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 15px;

            a {
                text-decoration: none;
                color: #484848;
            }

        }

        p {
            font-size: 1rem;
            font-family: Nunito;
            color: #b27c00;
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
    
            :not(:last-child) {
                border-right: 1px solid #ccc;
            }
            
            font-size: 12px;
            font-weight: 300;
            padding: 0 8px;
            color: #777;
            

            a {
                text-decoration: none;
                color: #484848;
                font-size: .8rem;
            }

            p {

                font-size: 15px;
                font-weight: 100;
                line-height: 18px;
                margin-bottom: 5px;
                color: #484848;
                text-align: center;
            }
        }
    }
`