import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";
import Iframe from "@frontity/components/iframe";

import { IconContext } from "react-icons";
import { BsFillArrowDownCircleFill} from 'react-icons/bs'; 
import {ImLocation} from 'react-icons/im';
import {GrLanguage} from 'react-icons/gr'
import {BiTimeFive} from 'react-icons/bi'
import {MarginPaddingContainer} from './home'
import Loading from './Loading';

//Image
import ImageGallery from 'react-image-gallery';
import ImageSliderStyles from "react-image-gallery/styles/css/image-gallery.css";
import AddtionalStyles from '../styles/style.css'



const Details = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact-other")       
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["32"];

    const images = [
        {
          original: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_4-1536x1152.jpeg',
          thumbnail: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_4-150x150.jpeg',
        },
        {
          original: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_3-1024x768.jpeg',
          thumbnail: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_3-150x150.jpeg',
        },
        {
          original: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_2-1024x768.jpeg',
          thumbnail: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_2-150x150.jpeg',
        },
        {
            original: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_1-1024x768.jpeg',
            thumbnail: 'https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/property1_1-150x150.jpeg'
        }
    ];

    const imagesAlt = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
      

    return (
        <>         
            <GallerySection>
                <MainInfo>
                    <div>
                        <h4>Single Aparment</h4>
                        <ul>
                            <li>
                                <a>For Sale</a>
                            </li>
                        </ul>
                        <p>
                                <span>
                                <IconContext.Provider value={{ color: "#b27c00", className: "global-class-name", size: "1rem" } }>
                                    <ImLocation />
                                </IconContext.Provider>
                                </span>
                                Talbiya, Jerusalem, Israel
                            </p>
                    </div>
                    
                    <div>
                        <h4>$1500 <small>/mo</small> </h4>
                        <p>150 sqm</p>
                    </div>

                </MainInfo>

                <>
                    <Global styles={ImageSliderStyles} />
                    {/* <Global styles={AddtionalStyles} /> */}
                    <ImageGallery items={images} />
                </> 
            </GallerySection>

            <InfoSection>
                <Container>
                    <FirstColumn>
                        <ListingDescription>
                            <TagList>
                                <ul>
                                    <li><a href="#">Apartment</a></li>
                                    <li><a href="#">Beds: 2</a></li>
                                    <li><a href="#">Bath: 1</a></li>
                                    <li><a href="#">Sqm: 300</a></li>
                                </ul>
                            </TagList>
                            <h4>Description</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet enim pulvinar, vehicula leo vel, malesuada mauris. 
                                Aenean eget tortor eget nisi bibendum bibendum sed nec odio. 
                                Integer porttitor, ex vel elementum fermentum, lorem quam blandit nisl, mollis congue augue justo eu ex. 
                                Donec nec diam vel nisi iaculis auctor sit amet vel metus. Maecenas quis leo metus. 
                                Mauris nec purus nec enim condimentum maximus. Aenean quis massa sollicitudin, viverra risus vulputate, vehicula nisi. 
                                Sed blandit in quam vitae porttitor. Donec leo justo, rhoncus sed felis sed, posuere hendrerit elit. 
                                Curabitur diam turpis, lacinia eu odio vehicula, elementum fringilla urna. In hac habitasse platea dictumst.
                            </p>

                            <p>
                                Morbi eu suscipit nisi. Curabitur at lorem imperdiet, aliquam felis vitae, auctor diam. 
                                Vestibulum bibendum, nisi eget consequat semper, enim risus dignissim augue, quis imperdiet ligula eros nec odio. 
                                Suspendisse laoreet ante non nibh iaculis, cursus tincidunt velit fringilla. Praesent dignissim sagittis nisi quis lacinia. 
                                Maecenas at eros non massa malesuada hendrerit vel eu felis. 
                                Donec sapien purus, fringilla nec turpis at, viverra aliquam felis. Sed feugiat sit amet odio at placerat.
                            </p>
                        </ListingDescription>

                        <ListingDetails>
                            <h4>Property Details</h4>

                            <ListingDetailsItems>
                                <div>
                                    <ul>
                                        <li>
                                            <p>
                                                Price : 
                                                <span> $130,000</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Property Size : 
                                                <span> 400 sqm</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li>
                                            <p>
                                                Price : 
                                                <span> $130,000</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Property Size : 
                                                <span> 400 sqm</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li>
                                            <p>
                                                Price : 
                                                <span> $130,000</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Property Size : 
                                                <span> 400 sqm</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </ListingDetailsItems>
                        
                        </ListingDetails>

                        <ListingDetails>
                            <IframeMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217152.94172576632!2d34.90260814069641!3d31.742799330483617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c4edaeeb9e23%3A0x4ca1616bb452513d!2sDistrito%20de%20Jerusal%C3%A9n%2C%20Israel!5e0!3m2!1ses-419!2spe!4v1674433992414!5m2!1ses-419!2spe" 
                                width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </IframeMap>
                        </ListingDetails>
                    </FirstColumn>

                    <SecondColumn>

                       
            
                        {typeof contentForm === "undefined" ? <Loading /> 
                            :
                            <ContentForm>
                                <h3>Available from : <span>02/15/2023</span> </h3>
                                <Html2react html={contentForm.content.rendered} />
                            </ContentForm>
                        }
                    </SecondColumn>
                    
                </Container>
            
            </InfoSection>
        </>

    )
}

const GallerySection = styled.div`
    margin-top: calc(6rem + 1.5625vw);
    margin-bottom: calc(6rem + 1.5625vw);
    padding-left: calc(20rem + 1.5625vw);
    padding-right: calc(20rem + 1.5625vw);

    @media(max-width: 1248px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: calc(1rem + 1.5625vw);

    h4 {
        font-size: 1.8rem;
        font-family: Nunito;
        color: #484848;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 15px;
    }

    ul{
        display: flex;
        list-style: none;
        margin:0;
        padding: 0;

        li {
            border-radius: 3px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            width: 75px;
            background-color: #b27c00;;
            

            a {
                font-size: 14px;
                color: #fff;
                line-height: 1.2;
                text-decoration: none;
            }
        }
    }

    p {
        font-size: 1rem;
        font-family: Nunito;
        color: #b27c00;
        line-height: 10px;
        font-weight: 400;
        text-transform: capitalize;
    }
    
` 
const ImagesContainerSlider = styled.div`
    width: 1500px;
    height: 1100px;
    margin: 5% auto 10rem auto;
    
    @media(max-width: 1200px) {
        width: 100%;
        height: 100%;
        margin: 0;
    }
`

/**INFO SECTION WITH CONTACT FORM */
export const InfoSection = styled.section`
    background-color: #f7f7f7;
    padding: 60px 0;
    position: relative;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: calc(8rem + 1.5625vw);
    margin-right: calc(8rem + 1.5625vw);
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

const FirstColumn = styled.div`
    flex-basis: 60%;
    flex-wrap: wrap;
`
const ListingDescription = styled.div`
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 8px 8px 0 0;
    padding: 30px;
    

    h4 {
        margin-bottom: 30px;
        line-height: 1.2;
        color: #484848;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        font-size: 14px;
        color: #484848;
        font-weight: 400;
        line-height: 1.8;
    }
`
const TagList = styled.div`
    margin-bottom: 40px;
    position: relative;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: inline-block;
            border-radius: 8px;
            background-color: #f7f7f7;
            background-color: var(--golden);
      
            padding: 10px 25px;
            text-align: center;
            margin-right: 0.5rem;
         

            a{
                font-size: 14px;
                color: #484848;
                color: #f7f7f7;
                line-height: 1.2;
                text-decoration: none;
            }
        }
    }
`

const ListingDetails = styled.div`
    background-color: #fff;
    border: 1px solid #ebebeb;
    padding: 30px;
    position: relative;
`

const ListingDetailsItems = styled.div`
    display: flex;

    div {
        flex-basis: 30%;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
       
                p{
                    font-size: 1rem;
                    color: #484848;
                    line-height: 10px;
                    font-weight: 400;
                    text-transform: capitalize;
                    margin: 0;
                    padding: 0;

                    span {
                        font-size: 14px;
                        color: #484848;
                        line-height: 2.857;
                        font-weight: 700;
                    }
                }
            }
        }
    }
`

const IframeMap = styled(Iframe)`

        width: 100%;
        height: 400px;

          @media(max-width: 576px) {
            height: 250px;
        }
`

/**Second Column, row in some devices */
const SecondColumn = styled.div`
    flex-basis: 30%;
    flex-wrap: wrap;

    @media(max-width: 992px) {
        margin-top: 2rem;
    }
`
/**Contact Form Styles */
const ContentForm = styled.div`

    background: rgba(255, 255, 255, 0.90);
    background-color: #1C2641;
    /* background-color: #000; */
    border-radius: .4rem;
    /* box-shadow: 0 15px 30px 1px grey; */
    padding: 2rem;
    font-size: 1.1rem;

    line-height: 1.2;

    h3 {
        color: #fff;
        text-transform: uppercase;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }

    .wp-block-group {

        @media(max-width: 768px) {        
            width: 100%;
            height: 100%;
        }
    }

    .wpcf7  {

        @media(max-width: 768px) {
            iframe {
                width: 100%;
                height: 100%;
            }
        }
    }

    input, textarea, select {
        height: 100%;
        padding:10px;
        color: #484848;
        margin: 0; 
        border: 1px solid rgba(97, 97, 97, 0.7);
        border-radius:5px;
        width:90%;
        font-family:inherit;
        font-size: 1rem;
    }

    @media(max-width: 768px) {
        input, textarea, select {
            width: 90%;
        }
    }

    textarea {
        height: 150px;
    }

    input[type="submit"] { 
        width: auto;
        background-color: var(--golden);
        height: 48px;  
        padding: 1.5rem;
        text-transform: none;
        border: 1px solid #fff;
        font-weight: 500;
        font-size: 1rem;
        text-transform: capitalize;
        color: #FFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        padding: 2px 24px;
        position: relative;

        @media(max-width: 768px) {
            width: 100%;
            
        }
    
        &:hover {
            background-color: #bf930d;
            transition: all 0.4s;
        }
    }

    a {
        text-decoration: none;
        color: #ff8562;
    }
`

export default connect(Details);

