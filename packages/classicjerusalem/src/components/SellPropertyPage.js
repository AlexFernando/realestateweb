import React , {useEffect} from 'react'
import { Head, connect, Global, css, styled } from "frontity";
import Loading from './Loading'
import ContactSectionInfo from './ContactSectionInfo';


const SellPropertyPage = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/sell-your-aparment");
    }, []);
    
    const sellYourProperty = state.source.page["701"];


    const Html2react = libraries.html2react.Component;

    return (
        <>
        {typeof sellYourProperty === "undefined" ? <Loading /> :  
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

export default connect(SellPropertyPage)

export const ContentGeneral = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin-top: 10rem;
    width: min(95%, 1500px);
    margin-right: auto;
    margin-left: auto;

    @media(max-width: 1023px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 8rem;
    }
`

export const ContainerArticle = styled.div`
    font-family: 'Lato', sans-serif;
    flex-basis: 50%;
    margin-right: 2rem;
`
export const ContainerContact = styled.div`
    flex-basis: 40%;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const Title = styled.h2`
    color: var(--golden-color);
    font-size: var(--step-2);
`
export const Content = styled.p`
    font-size: var(--step-0);
    color: #323232;
    text-align: justify;
`