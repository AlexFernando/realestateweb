import React, {useEffect} from 'react';
import {connect, styled, css} from "frontity";
import Iframe from "@frontity/components/iframe";
import Loading from './Loading';
import {InfoSection , Container} from './Details'
import {ContainerBackgroundTour, BackgroundColor} from './AllProperties'
import { GrContactInfo } from 'react-icons/gr';

const GeneralContact = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact")       
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["37"];

    return ( 
        <>
            <ContainerBackgroundTour>

                <BackgroundColor>
                    <div>
                        <h3>Contact</h3>
                    </div>
                </BackgroundColor>

            </ContainerBackgroundTour>

            <InfoSection>
            <Container>

                {typeof contentForm === "undefined" ? <Loading /> 
                    :
                    <Content>
                        <h4>Send us an email</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.</p>
                        <Html2react html={contentForm.content.rendered} />
                    </Content>
                }

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
           
            </Container>

            </InfoSection>
        </>
    );
}



const MarginTop = styled.div`
    margin-top: 5rem;
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

const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background: rgba(255, 255, 255, 0.90);
    border-radius: .4rem;
    padding: 3rem;
    font-size: 1.1rem;
    border: 1px solid #ebebeb;
    line-height: 1.2;
    flex-basis: 40%;
    font-size: 1.1rem;

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
        /* border-radius: .4rem;
        box-shadow: 0 15px 30px 1px grey;
	    background: rgba(255, 255, 255, 0.90);
        padding: 3rem;
        margin: 2rem 0rem; */

    

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

    /* input, textarea, select {
        height: 100%;
        padding:10px;
        margin:10px 0; 
        border: 1px solid rgba(97, 97, 97, 0.7);
        
        //box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
        border-radius:5px;
        width:100%;
        font-family:inherit;
        font-size: inherit;
    }

    @media(max-width: 768px) {
        input, textarea {
            width: 100%;
        }
    } */

    input, textarea {

        &:focus {
           outline: none;
        } 
    }


    input, textarea, select {
    
        height: 100%;
        padding:10px;
        color: #484848;
        margin: 0; 
        border: 1px solid rgba(97, 97, 97, 0.4);
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
`;


export default connect(GeneralContact);