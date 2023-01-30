import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';

import Loading from './Loading';
import Properties from './properties';
import SearchBar from './SearchBar'


const Home = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/home/");
    }, []);
    
    const pageHomeData = state.source.page[12];

    return ( 
        <>     
                {typeof pageHomeData === "undefined" ? <Loading /> :     
                    <>
                        <MarginTopContainer>
                            {/* <Content> 
                                <TextoImagen>
                        
                                    <div>
                                        <h2>Your home, our priority</h2>
                                        <h3>Classic Jerusalem</h3>
                                        <div>
                                            <a href="/properties/">VIEW PROPERTIES</a>
                                        </div>  
                                    </div>

                                    <SearchBar></SearchBar>
                                   
                                </TextoImagen>      

                            </Content> */}

                            <Main>
                                
                                <VideoBackground autoPlay loop>
                                    <source src="https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4" type="video/mp4" />
                                </VideoBackground>

                                <Overlay>

                                    <TextoImagen>
                            
                                        <div>
                                            <h2>Your home, our priority</h2>
                                            <h3>Classic Jerusalem</h3>
                                            <div>
                                                <a href="/properties/">VIEW PROPERTIES</a>
                                            </div>  
                                        </div>

                                        <SearchBar></SearchBar>
                        
                                    </TextoImagen>      

                                    
                                </Overlay>
                           
                         
                            </Main>

                   
                            {/* <video autoPlay loop>
                                <source src="https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4" type="video/mp4" />
                            </video>  */}
                       
                        </MarginTopContainer>
            
                        <SectionFeaturedProperties>
                            <MarginPaddingContainer>
                                <HeaderContainer>
                                    <Title>Featured Properties</Title>
                                    <Separator></Separator>
                                </HeaderContainer>
                                <Properties />
                            </MarginPaddingContainer> 
                        </SectionFeaturedProperties>                   
                    </> 
                }
            
        </>
     );
}

export default connect(Home)

export const MarginTopContainer = styled.div`
    margin-top: 12vh;

    @media(min-width: 768px) {
        margin-top: 12vh;
    }
`;

// const Content = styled.div`  
//     background-image: url("https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position:center center;
//     height: 80vh;

//     @media (max-width: 480px) {
//         background-image: url("https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4");
//         height: 100%;
//     }

//     @media (min-width: 481px) and (max-width: 1024px) {
//         background-image: url("https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/backgorund_video.mp4");
//         height: 100%;
//     }
// `
const TextoImagen = styled.div`
    /* background-image: linear-gradient(to top, rgba(34,49,63, .2), rgba(34, 49, 63, .2));  */
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    overflow-wrap: break-word;
    height: 80vh;

    @media (max-width: 480px) {
        height: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
   
        h2 {
            text-transform: uppercase;
            font-size: 1.5rem;
            margin-top: 5rem;
            font-weight: 900;

            @media(min-width: 768px) {
                font-size: 2rem;
                padding-top: 0;
            }
        }

        h3 {
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 300;
            margin-top: 0;
            margin-bottom: 2rem;
            line-height: 1.8;
            font-family: 'Montserrat', sans-serif;

            @media(min-width: 768px) {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 2rem;
            }
        }

            div {

                display: flex;
                justify-content: flex-start;
                align-items: center;

                a {
                    text-decoration: none;
                    background-color: #b27c00;
                    text-transform: uppercase;
                    color: #fff;
                    padding: 1rem 2rem;
                    border-radius: 10px;
                    text-align: center;
                    margin-bottom: 2rem;
                    font-weight: 500;
                    font-size: 1rem;

                    &:hover {
                        background-color: #444;
                        transition: all 0.4s;
                    }
                }

        }
    }    
`


// export const ContainerBackground = styled.div`
//     display: flex;
//     overflow: hidden;
//     position: relative;
//     width: 100vw;
//     height: 100vh;
//     margin-top: 2rem;

//     @media (max-width: 768px){
     
//         height: 276px;
//     }

//     img {
//         width: 100vw;
//     height: 100vh;
//     pointer-events: none;
//     position: absolute;
//     z-index: -1;
//     object-fit: cover;

//     @media (max-width: 767px){
       
//         width: auto;
//         height: 276px;
//     }
//     }
// `

// export const TextContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-content: flex-start;
//     width: 100vw;
//     color: #fff;



//     h1{
//         /* background-image: linear-gradient(to top, rgba(255,140,0, .8), rgba(255,140,0, .9)); */
//         background-color: #00000075;
//         padding: 2%;
//         width: 100vw;

//         @media (max-width: 768px){
//             font-size: 1rem;
//         }
//     }
// `

// export const ImageTag = styled(Image)`
//     width: 100vw;
//     height: 100vh;
//     pointer-events: none;
//     position: absolute;
//     z-index: -1;
//     object-fit: cover;

//     @media (max-width: 767px){
       
//         width: auto;
//         height: 276px;
//     }
// `

/**BACKGROUND VIDEO */  
export const Main = styled.section`

  width: 100%;
  height: 100vh;
  position: relative;

`

export const MainText = styled.div`

  position: absolute;
  left: 13%;
  top: 42%;
  transform: translate(-13%, -42%);
  line-height: 0;
  color: #fff;

  h2 {
            text-transform: uppercase;
            font-size: 1.5rem;
            margin-top: 5rem;
            font-weight: 900;

            @media(min-width: 768px) {
                font-size: 2rem;
                padding-top: 0;
            }
        }

        h3 {
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 300;
            margin-top: 0;
            margin-bottom: 2rem;
            line-height: 1.8;
            font-family: 'Montserrat', sans-serif;

            @media(min-width: 768px) {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 2rem;
            }
        }

            div {

                display: flex;
                justify-content: flex-start;
                align-items: center;

                a {
                    text-decoration: none;
                    background-color: #b27c00;
                    text-transform: uppercase;
                    color: #fff;
                    padding: 1rem 2rem;
                    border-radius: 10px;
                    text-align: center;
                    margin-bottom: 2rem;
                    font-weight: 500;
                    font-size: 1rem;

                    &:hover {
                        background-color: #444;
                        transition: all 0.4s;
                    }
                }

        }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: linear-gradient(to bottom, rgba(34,35,46,0.3) 50%, rgba(34,35,46));
`

export const VideoBackground = styled.video`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
/**ENDS BACKGROUND VIDEO */
  
/**ABOUT SECTION */

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-transform: uppercase;
        font-size: 1.5rem;
        padding: 1rem 5rem;

        @media(max-width: 768px) {
            font-size: 1.2rem;
            padding: 1rem;
        }
    }
`
export const Title = styled.h2`

    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    margin: 1.5rem 15%;
    text-transform: capitalize;
    text-align: center;
 
    @media(min-width: 768px) {
        font-size: 2.5rem;
    }

    @media(max-width: 768px) {
        font-size: 1.9rem;
        text-align: center;
        margin: 1rem 15%;
    }
`

export const Separator = styled.span`
    display: block;
    width: 8%;
    height: 8px;
    margin-top: 0;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: var(--brand);
    align-self:center;

    @media(max-width: 768px) {
        width: 4rem;
        height: 5px;
        margin-top: 0;
    }
`
/**SECTION FEATURED PROPERTIES */

export const SectionFeaturedProperties = styled.section`
    background-color: #f7f7f7;
    padding: 1rem 0;
    position: relative;
`

export const MarginPaddingContainer = styled.div`
    max-width: 77.5rem;
    margin: 5% auto;

`
