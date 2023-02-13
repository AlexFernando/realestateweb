import React, {useState, useEffect} from 'react';
import {Global, connect, styled, css, Head } from "frontity";
import Image from "@frontity/components/image";

//icons
import { IconContext } from "react-icons";
import {AiOutlineArrowRight} from 'react-icons/ai'

import Loading from './Loading';
import Link from './Link';
import localAuthor from '../images/location-icon.svg'
import LinkReadPost from './LinkReadPost'
import { MarginTopContainer } from './home';
import {ContainerBackgroundTour, BackgroundColor} from './AllProperties'

const Blog = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/blog/")
    }, [])

    const data = state.source.get('/blog/');

    let myPosts = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.blog[id];
            myPosts.push(singlePost);

            console.log("los post: ", myPosts)
        })
    }

    const pageBlog = state.source.page[47];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>
        {data.isReady ?
            <Section>   
                   <ContainerBackgroundTour>

                        <BackgroundColor>
                            <div>
                                <h3>WELCOME TO CLASSIC JERUSALEM BLOG</h3>
                            </div>
                        </BackgroundColor>

                    </ContainerBackgroundTour>     
                        
                {typeof pageBlog === "undefined" ? <Loading /> : 
                    <MarginTopContainer>
                       
                        {
                            data.isReady && myPosts.length > 0? 
        
                                <Container>
                                    {
                                        myPosts.map( post => {
                                            return(
                                                <Article>
                                                    
                                                    <Link href={post.link}>
                                                 
                                                        <FeaturedMedia>
                                                            <StyledImage src={post.acf.imagepost.sizes.medium_large} alt="blog-image" />
                                                        </FeaturedMedia>
                                                        <AuthorBio>
                                                            <Image src={localAuthor} alt="blog-image" />
                                                            <AuthorBioBox>
                                                                <AuthorName>
                                                                    Classic Jerusalem
                                                                </AuthorName>

                                                                <PublishDate>Wed Feb 01 2023</PublishDate>
                                                            </AuthorBioBox>
                                                        </AuthorBio>

                                                        <BlogArchiveBottom>
                                                            <TitlePost>{post.title.rendered}</TitlePost>
                                                            <Excerpt>
                                                    
                                                                <Html2react html={post.excerpt.rendered} />
                                                            </Excerpt>

                                                            <LinkReadPost href={post.link}>
                                                            

                                                                  
                                                          
                                                                    <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                                                    <span>Read Post</span> <AiOutlineArrowRight/> 
                                                                    </IconContext.Provider>
                                                              
                                                              
                                                              
                                                            </LinkReadPost>
                                                        </BlogArchiveBottom>
                                                    
                                                    </Link>
                                                </Article>

                                            )
                                        })
                                    }
                                </Container>
        
                            :null
                        }
                    </MarginTopContainer>
                }
            </Section>

        : <Loading />}
        
        </>
    );
}

export default connect(Blog);

const HeaderPage = styled.h1`
    margin-top: 6.25rem;
    text-align: center;
    font-size: 2.375rem;

    @media(max-width: 768px) { 
        font-size: 2rem;
        margin-top: 4.25;
    }
` 
export const MarginPaddingContainer = styled.div`
    max-width: 77.5rem;
    margin: 5% auto;

    h2 {
        text-align: center;
    }
`

const Section = styled.section`
    /* padding: 50px 0px; */
    background-color: #f7f7f7;
    padding: 0 0 1rem 0;
    position: relative;
    font-family: 'Lato';

    @media(max-width: 768px) { 
        max-width: 100%;}

   
`

const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;

    @media(max-width: 768px) { 
        max-width: 300px;
    }
`

const Article = styled.article`
    max-width: 771px;
    margin: 0px auto 5rem;
    position: relative;

    @media(max-width: 768px) { 
        margin: 0 auto;
        margin-bottom: 5rem;
        max-width: 300px;
    }

    background: rgba(255, 255, 255, 0.90);
    border-radius: .4rem;
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid #ebebeb;
    line-height: 1.2;
    margin-bottom: 1rem;

`

export const FeaturedMedia = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;

    img {
        transition: all 0.8s ease-in 0s;
        border-radius: 5px;
   
    }
`
export const StyledImage = styled(Image)`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;


`
export const AuthorBio = styled.div`
    margin-top: -3.5rem;
    background: var(--white);
    border-radius: 3px;
    padding: 0.8rem 1rem 1rem;
    display: inline-block;
    position: absolute;
    left: 6.3rem;

    img {
        border-radius: 50%;
        margin-right: 1rem;
    }

    @media(max-width: 768px) { 
        padding: 0.8rem 1rem 1rem 1rem;
        left: 2.3rem;
    }
`

export const AuthorBioBox = styled.div`
    display: inline-block;
    vertical-align: middle;
`
export const AuthorName = styled.span`
    display: block;
    color: rgb(216, 216, 216);
    font-size: 0.75rem;
    font-weight: normal;
    color: var(--brand);
    font-size: 0.8125rem;
`

export const PublishDate = styled.span`
    display: block;
    color: gray;
    font-size: 0.75rem;
`

const BlogArchiveBottom = styled.div`
    max-width: 570px;
    margin: 1.5rem auto 0px;

    @media(max-width: 768px) { 
        margin: 0 auto;
        margin-top: 1.5rem;
        max-width: 300px;
    }
`

const TitlePost = styled.h2`
    color: #000;
    font-size: 1.75rem;
    margin: 0px;
    padding-top: 24px;
    padding-bottom: 1rem;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
    line-height: 1.2;
`
const Excerpt = styled.div`
    margin-bottom: 1.25rem;

    p {
        font-size: medium;
        line-height: 1.5;
        text-align: justify;
    }
`

const InfoButton = styled.div`
    display: flex;

    span {
        margin-top: 0;
    }
`

const Content = styled.div`

`

