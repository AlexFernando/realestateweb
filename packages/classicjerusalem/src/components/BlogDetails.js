import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";
import {MarginPaddingContainer, AuthorBioBox, AuthorName, PublishDate, FeaturedMedia, StyledImage} from './BlogPage'
import {ContainerBackgroundTour, BackgroundColor} from './AllProperties'
import Loading from './Loading';



const BlogDetails = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const idTour = data.id;

    const postTour = state.source[data.type][idTour];

    const Html2react = libraries.html2react.Component;

    return (
        <>
            <ContainerBackgroundTour>
                <BackgroundColor>
                    <div>
                        <h3>WELCOME TO CLASSIC JERUSALEM BLOG</h3>
                    </div>
                </BackgroundColor>
            </ContainerBackgroundTour> 

        {typeof postTour === "undefined" ? <Loading /> : 

            <BlogMain>
                <HeaderDetails>
                    <Content>
                        <h2><Html2react html={postTour.title.rendered} /></h2>
                
                        <AuthorBioBox>
                            <AuthorName>
                                Classic Jerusalem
                            </AuthorName>

                            <PublishDate>Fri Jul 01 2022</PublishDate>
                        </AuthorBioBox>
              
                        <Html2react html={postTour.content.rendered} />
                    </Content>

                </HeaderDetails>
        
             
       
            </BlogMain>
        }
        
        </>

    )
}

const BlogMain = styled.div`
    max-width: 969px;
    width: 100%;
    margin: 2rem auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;


    @media(max-width: 768px) { 
        max-width: 100%;
        width: 100%;
        padding-right: 0px;
        padding-left: 0px;
    }
`

const HeaderDetails = styled.div`
    margin-top: 10vh;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    color: #484848;
    line-height: 1.5;

    h1 {
        margin-bottom: 0;
    }
    span {
        color: gray;
        margin-top: 0;
    }
`
const AuthorBioDetails = styled.div`

    background: var(--white);
    border-radius: 3px;
    /* padding: 0.8rem 1rem 1rem; */
    display: inline-block;
    left: 6.3rem;

    /* img {
        border-radius: 50%;
        margin-right: 1rem;
    } */
    
`


const Content = styled.div`
    color: #484848;
    margin-top: 2rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    line-height: 1.5;
    word-break: break-word;
    text-align: justify;


    h2 {

    }

    img {
       
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    
 
    @media(max-width: 1200px) {
        flex-direction: column;
        align-content: center;

        padding-left: 0;
        padding-right: 0;
    }


`;

export default connect(BlogDetails);

