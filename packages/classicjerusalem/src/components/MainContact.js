import React, {useEffect} from 'react';
import {connect, styled, css} from "frontity";
import Iframe from "@frontity/components/iframe";
import Loading from './Loading';
import {CiLocationOn} from 'react-icons/ci';
import {NavBarIcon, WhatsAppIcon, PhoneIcon} from './header/nav';

const GeneralContact = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact")       
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["37"];

    return ( 
        <>
            {/* <ContainerBackgroundTour>

                <BackgroundColor>
                    <div>
                        <h3>Contact</h3>
                    </div>
                </BackgroundColor>

            </ContainerBackgroundTour> */}

            <SectionContact>
                <GradientContact>
                    <WidthContainer>

                        {typeof contentForm === "undefined" ? <Loading /> 
                            :
                            <>
                            <Content>
                                <h4>Send us an email</h4>
                                <ParagraphContent>We offer the best option for you. Leave us your details and we will get back to you as soon as possible</ParagraphContent>
                                <Html2react html={contentForm.content.rendered} />
                            </Content>

                            </>
                        }
                        {/* 
                        <ContainerRigth>

                        <ContactInfo>
                            <h4>Contact Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.</p>
                            
                            <ContentList>
                                <h5>Adress</h5>
                                <p>2023 Jerursalem St</p>
                            </ContentList>

                            <ContentList>
                                <h5>Phone</h5>
                                <p>987654321</p>
                            </ContentList>

                            <ContentList>
                                <h5>Email</h5>
                                <p>classicjerusalem@gmail.com</p>
                            </ContentList>
                        </ContactInfo>

                
                        <ContactInfo>
                            <IframeMapContact 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217152.94172576632!2d34.90260814069641!3d31.742799330483617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c4edaeeb9e23%3A0x4ca1616bb452513d!2sDistrito%20de%20Jerusal%C3%A9n%2C%20Israel!5e0!3m2!1ses-419!2spe!4v1674433992414!5m2!1ses-419!2spe" 
                                width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </IframeMapContact>
                        </ContactInfo>
                        </ContainerRigth>
                    */}
                    </WidthContainer>
                    </GradientContact>
            </SectionContact>


            <SocialMediaSection>
                <SocialItem>
                    <PhoneIcon />
                    <p>+972-58-654-0969</p>
                </SocialItem>

                <SocialItem href="mailto:scohenben@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
                    <NavBarIcon />
                    <p> scohenben@gmail.com</p>
                </SocialItem>


                <SocialItem href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                    <WhatsAppIcon />
                    <p>+972-58-654-0969</p>
                </SocialItem>

                <SocialItem href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217152.94172576632!2d34.90260814069641!3d31.742799330483617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c4edaeeb9e23%3A0x4ca1616bb452513d!2sDistrito%20de%20Jerusal%C3%A9n%2C%20Israel!5e0!3m2!1ses-419!2spe!4v1674433992414!5m2!1ses-419!2spe" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
              
                    <Location />
                    <p>2023 Jerursalem St</p>
                </SocialItem>
            </SocialMediaSection>

            <SectionContact>
                <GradientContact>
                    <WidthContainer>

                        {typeof contentForm === "undefined" ? <Loading /> 
                            :
                            <>
                            <Content>
                                <h4>Join the team</h4>
                                <ParagraphContent>We are always happy to co-work with others, please leave your details below, and we will get back to you shortly:</ParagraphContent>
                                <Html2react html={contentForm.content.rendered} />
                            </Content>

                            </>
                        }
                    </WidthContainer>
                </GradientContact>
            </SectionContact>
        </>
    );
}



const MarginTop = styled.div`
    margin-top: 5rem;
`

const SectionContact = styled.section`
    background-color: #f7f7f7;
    /* padding: 60px 0; */
    position: relative;
    margin-top: 7rem;
    
    background-image:url('https://realstate.wildfreewalkingtours.com/wp-content/uploads/2023/01/aparment_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* Set a specific height */
    /* max-height: 100vh;
    min-width: 400px; */
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    margin-bottom: 5rem;

    @media(max-width: 1024px) {
        margin-top: 6rem;
    }

`
const GradientContact = styled.div`
    display: flex;
    color: #FFF;
    display: flex;
    /* padding: 1.5rem 2rem; */
    justify-content: space-between;
    align-content: flex-start;
    overflow-wrap: break-word;
    height: auto;
    font-family: 'Lato';
    background-image: linear-gradient(180deg, rgba(0,0,0,.8)  0%, rgba(200,139,0, 0.4) 100%);
    background-image: linear-gradient(180deg, rgba(28, 38, 65, .5)  0%, rgba(28, 38, 65, .7) 100%);
    height: 100%;
    
    @media(max-width: 768px) {
        flex-direction: column;
        align-content: center;
    }
`

export const WidthContainer = styled.div`
    width: min(98%, 77.5rem + 10vw);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(98%, 67.5rem + 10vw);
    }
`
const ParagraphContent = styled.p`

    font-size: var(--step-0);
    text-align: center;
    color: #fff;
    line-height: 1.714;
`

const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
    /* background: rgba(255, 255, 255, 0.90); */
    /* border-radius: .4rem; */
    /* padding: 3rem; */
    font-size: 1.1rem;
    /* border: 1px solid #ebebeb; */
    line-height: 1.2;

    h4{
        font-size: var(--step-2);
        /* font-family: Nunito; */
        color: #fff;
        line-height: 1.2;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px solid var(--golden-color);
        margin-left: auto;
        margin-right: auto;
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
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: flex-end;

        p {

            color: #fff;
            flex-basis: 30%;

            &:nth-of-type(4){
                flex-basis: 60%;
            }

            &:nth-of-type(5){
                flex-basis: 30%;
                margin-right: auto;
            
            }

            @media (max-width: 576px){
                flex: 100%;
                &:nth-of-type(4){
                    flex-basis: 100%;
                }
            }

            @media (min-width: 576px) and (max-width: 1440px){
                flex-basis: 40%;
            }


            textarea {
                height: 50px;
                width: 90%;
                vertical-align: bottom;
            }

        }
    }


    input, textarea {

        &:focus {
           outline: none;
        } 
    }


    input, textarea, select {
    
        /* height: 100%; */
        /* padding:10px; */
        /* color: #484848; */
        /* margin: 0;  */
        background-color: transparent;
        color:#fff;
        outline: none;
        /* border: 1px solid rgba(97, 97, 97, 0.4);
        */
    
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        border-bottom: 1px solid var(--golden-color);
        /* border-radius:5px; */
        /* width:90%; */
        font-family:inherit;
        font-size: 1rem;
        margin-right: 1rem;

        &::placeholder {
            color: #fff;
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
        color: #fff;
    }
`;


export const SocialMediaSection = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

export const SocialItem = styled.a`
    background-color: var(--main-color);
    padding: 2rem 1rem;
    text-align: center;
    text-decoration: none;
    /* flex-basis: 15%; */

    margin: 1rem;

    width: min(10rem + 5vw, 100%);

    p {
        color: #fff;
    }
    
`

export const Location = styled(CiLocationOn)`
  color: var(--golden-icons);
  font-size: var(--step-1);
  vertical-align: middle;
`


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
    /* display: block;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    padding: 30px;
    position: relative; */

    background: rgba(255, 255, 255, 0.90);
    border-radius: .4rem;
    padding: 2rem;
    font-size: 1.1rem;
    border: 1px solid #ebebeb;
    line-height: 1.2;
    margin-bottom: 1rem;

    h4{
        font-size: 18px;
        /* font-family: Nunito; */
        color: #484848;
        line-height: 1.2;
        margin-bottom: 20px;
        font-weight: 600;
    }

    p {
        font-size: 14px;
        /* font-family: Nunito; */
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
        /* font-family: Nunito; */
        color: #484848;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 0;
    };

    p {
        font-size: 14px;
        /* font-family: Nunito; */
        color: #484848;
        line-height: 1.714;
        margin-bottom: 30px;
    }
`

export default connect(GeneralContact);