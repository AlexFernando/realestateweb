import React, {useEffect} from 'react';
import {connect, styled, css} from "frontity";
import Iframe from "@frontity/components/iframe";
import Loading from './Loading';
import {CiLocationOn} from 'react-icons/ci';
import {NavBarIcon, WhatsAppIcon, PhoneIcon} from './header/nav';

const GeneralContact = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact")   
        actions.source.fetch("/join-our-team")           
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["37"];
    const contentFormTeam = state.source.page["170"];


    return ( 
        <>

        {(typeof contentForm === "undefined") || (typeof contentFormTeam === "undefined") ? <Loading /> :
            <>

            <GeneralSection>
        
                <WidthContainer>

                    <TextHeader>
                    
                        <h2>Get in touch</h2>
                        <p>Just drop us a line. We will be glad to answer your inquiries</p>
                
                    </TextHeader>
        
                
                    <SectionContact>
                        <SocialMediaSection>
                            <GradientContact>
                                <h3>Contact Information</h3>
                                
                                <SocialItem>
                                    <PhoneIcon /> <span>+972-58-654-0969</span>
                                </SocialItem>
            
                                <SocialItem href="mailto:classicjerusaleminfo@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
                                    <NavBarIcon />
                                    <span> classicjerusaleminfo@gmail.com</span>
                                </SocialItem>
            
            
                                <SocialItem href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                                    <WhatsAppIcon />
                                    <span>+972-58-654-0969</span>
                                </SocialItem>
            
                                <SocialItem href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217152.94172576632!2d34.90260814069641!3d31.742799330483617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c4edaeeb9e23%3A0x4ca1616bb452513d!2sDistrito%20de%20Jerusal%C3%A9n%2C%20Israel!5e0!3m2!1ses-419!2spe!4v1674433992414!5m2!1ses-419!2spe" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                            
                                    <Location />
                                    <span>2023 Jerursalem St, Jerusalem, Israel</span>
                                </SocialItem>
                            </GradientContact>
                        </SocialMediaSection>
                        <Content>
                            <h4>Send us a Message</h4>
                            <Html2react html={contentForm.content.rendered} />
                        </Content>
                    </SectionContact>


                <TextHeader>
                    <h2>Work with us</h2>
                    <p>Fill up the form and We will be glad to answer you back as soon as possible.</p>
                
                </TextHeader>
               
                   <SectionContact>
                       <SocialMediaSection>
                           <GradientContact>
                               <h3>Contact Information</h3>


                               <SocialItem>
                                   <PhoneIcon /> <span>+972-58-654-0969</span>
                               </SocialItem>
           
                               <SocialItem href="mailto:classicjerusaleminfo@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
                                   <NavBarIcon />
                                   <span> classicjerusaleminfo@gmail.com</span>
                               </SocialItem>
           
           
                               <SocialItem href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                                   <WhatsAppIcon />
                                   <span>+972-58-654-0969</span>
                               </SocialItem>
           
                               <SocialItem href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217152.94172576632!2d34.90260814069641!3d31.742799330483617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c4edaeeb9e23%3A0x4ca1616bb452513d!2sDistrito%20de%20Jerusal%C3%A9n%2C%20Israel!5e0!3m2!1ses-419!2spe!4v1674433992414!5m2!1ses-419!2spe" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                           
                                   <Location />
                                   <span>2023 Jerursalem St, Jerusalem, Israel</span>
                               </SocialItem>
                           </GradientContact>
                       </SocialMediaSection>
                       <Content>
                                <h4>Join the team</h4>
                                <Html2react html={contentFormTeam.content.rendered} />
                            </Content>
                   </SectionContact>

               </WidthContainer>
           </GeneralSection>

            </>
            }
        </>
    );
}

const GeneralSection = styled.section`
    padding-bottom: 4rem;
    &:nth-of-type(1){
        margin-top: 120px;
    }
    
    @media (max-width: 1024px) {
      margin-top: 100px;
    }

    /* background-image: linear-gradient(180deg, rgba(28, 38, 65, .8)  0%, rgba(28, 38, 65, .8) 100%); */
    background-color: var(--main-color);
`

export const WidthContainer = styled.div`

    width: min(98%, 77.5rem + 10vw);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(98%, 67.5rem + 10vw);
    }
`

const TextHeader = styled.div`
    background-color: var(--main-color);
    width: 100%;
    padding: 3rem 0;
    margin-bottom: 2rem;
    text-align: center;
    /* border-top: 1px solid var(--golden-color);
    border-bottom: 1px solid var(--golden-color); */

    h2{
        color: #fff;
        text-transform: capitalize;
        font-size: var(--step-3);
    }

    p {
        color: #fff;
        font-size: var(--step-0);
        font-family: 'Lato', sans-serif;
    }
`

const SectionContact = styled.section`
    display: flex;
    justify-content: space-between;
    /* padding: 3rem; */
    border: 1px solid var(--golden-color);
    position: relative;
    /* margin-bottom: 3rem; */
`
const GradientContact = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFF;
    padding: 0 3rem;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Lato';
    background-image: linear-gradient(180deg, rgba(28, 38, 65, .9)  0%, rgba(28, 38, 65, .8) 100%);
    height: 100%;
    
    @media(max-width: 768px) {
        flex-direction: column;
        align-content: center;
    }
`

export const SocialMediaSection = styled.div`

    /* background-image:url('https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/aparment_background.jpg');  */
    background-repeat: no-repeat;
    background-size: cover;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
`

export const SocialItem = styled.a`
    text-align: center;
    text-decoration: none;
    margin: 0 3rem;
    width: min(15rem + 5vw, 100%);

    span {
        color: #fff;
    }

    &:nth-of-type(1){
        margin-top: 2rem;
    }
`

export const Location = styled(CiLocationOn)`
  color: var(--golden-icons);
  font-size: var(--step-1);
  vertical-align: middle;
`

const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    line-height: 1.2;
    background-color: #fff;
    border: 1px solid var(--golden-color);

    h4{
        font-size: var(--step-1);
        line-height: 1.2;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 500;
        color: var(--main-color)
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

        h3 {
            margin-bottom: 4rem;


        }
    }

    .wpcf7-form {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        p {

            color: var(--main-color);
            flex-basis: 50%;
            padding: 0;
            margin: .2rem 0;
            
            &:nth-of-type(5){
                flex-basis: 100%;   
            }

            &:nth-of-type(6){
                flex-basis: 100%;   
            }

            @media (max-width: 768px){
                flex-basis: 100%;
            }

            textarea {
                width: 70%;
                margin-left: auto;
                margin-right: auto;
                vertical-align: bottom;
            }


        }
    }

    input {
        width: 70%;
    }


    input, textarea {

        &:focus {
           outline: none;
        } 
    }


    input, textarea, select {
    
        background-color: transparent;
        outline: none;    
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        border-bottom: 1px solid var(--golden-color); 
        border-radius: 2px;
        font-family:inherit;
        font-size: 1rem;
        margin-right: 1rem;
        padding: .5rem;

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


    input[type="submit"] { 
        width: 200px;
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

const ContainerRigth = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 993px) {
        margin-top: 1rem;
    }
`

const IframeMapContact = styled(Iframe)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 2rem 0;
    width: 100%;
    height: 400px;

`
const ContactInfo = styled.div`

    background: rgba(255, 255, 255, 0.90);
    border-radius: .4rem;
    padding: 2rem;
    font-size: 1.1rem;
    border: 1px solid #ebebeb;
    line-height: 1.2;
    margin-bottom: 1rem;

    h4{
        font-size: 18px;
        color: #484848;
        line-height: 1.2;
        margin-bottom: 20px;
        font-weight: 600;
    }

    p {
        font-size: 14px;
        color: #484848;
        line-height: 1.714;
        margin-bottom: 20px;
    }
`

const ContentList = styled.div`
    display: block;
    box-sizing: border-box;
    
    h5 {
        font-size: 16px;
        color: #484848;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 0;
    };

    p {
        font-size: 14px;
        color: #484848;
        line-height: 1.714;
        margin-bottom: 30px;
    }
`

export default connect(GeneralContact);