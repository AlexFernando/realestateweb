import React , {useEffect} from 'react'
import { Head, connect, Global, css, styled } from "frontity";
import Loading from './Loading'
import {ContentGeneral, ContainerArticle, ContainerContact, Content, Title} from './SellPropertyPage'
import ContactSectionInfo from './ContactSectionInfo';

const AirbnbYourAparment = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/airbnb-your-aparment");
    }, []);
    
    const sellYourProperty = state.source.page["703"];


    const Html2react = libraries.html2react.Component;

    return (
        <>
        {typeof sellYourProperty === "undefined" ? null:  

        <ContentGeneral>
        
            <ContainerArticle>
                <Title><Html2react html={sellYourProperty.title.rendered} /></Title>
                <Content>
                    <Html2react html={sellYourProperty.content.rendered} />
                </Content>

            
            </ContainerArticle>
            
            <ContainerContact>
                <ContactSectionInfo />
            </ContainerContact>
        </ContentGeneral>

        }
        </>
    )
}

export default connect(AirbnbYourAparment);


