import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import Loading from './Loading'

const ContactSectionInfo = ({state, actions, libraries}) => {
    useEffect( () => {
        actions.source.fetch("/contact-other")     
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["32"];

    return (
        <>
            {typeof contentForm === "undefined" ? null :  
                <Content>
                    <Html2react html={contentForm.content.rendered} />
                </Content>
            }
        </>
    )
}

const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    padding: 2rem;
    line-height: 1.2;
    background-color: #fff;
    border: 1px solid var(--golden-color);

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }


    h4{
        font-size: var(--step-1);
        line-height: 1.2;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 500;
        color: var(--main-color)
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

        h3 {
            margin-bottom: 4rem;


        }
    }

 .wpcf7-form {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     /* flex-wrap: wrap;
     margin-right: auto;
     margin-left: auto; */

     p {

         color: var(--main-color);

         /* flex-basis: 100%;
         margin-right: auto;
         margin-left: auto;

         &:nth-of-type(5){
             flex-basis: 100%;   
         }

         &:nth-of-type(6){
             flex-basis: 100%;   
         }

         @media (max-width: 768px){
             flex-basis: 100%;
         } */
     }
 }

 input, textarea {

     &:focus {
        outline: none;
     } 
 }

 /* input {
     width: 50%;
 }
 */

 input, textarea, select {
  
     background-color: transparent;
     outline: none;    
     border-top-style: hidden;
     border-right-style: hidden;
     border-left-style: hidden;
     border-bottom-style: groove;
     border-bottom: 1px solid var(--golden-color); 
     font-family:inherit;
     font-size: 1rem;
     padding: 1rem;

     &::placeholder {
         font-family: 'Lato', sans-serif;
         text-transform: uppercase;
         font-weight: 300;
     }
 }

 @media(max-width: 768px) {
     input, textarea, select {
         width: 90%;
     }
 }

 /* textarea {
     width: 70%;
     height: 50px;
 } */


 input[type="submit"] { 
     width: 100%;
     background-color: var(--golden-color);
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
 }


`;

export default connect(ContactSectionInfo);
