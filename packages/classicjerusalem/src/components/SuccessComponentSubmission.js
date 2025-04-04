import React, { useState, useRef } from 'react';
import { connect, styled, css, Global, loadable } from "frontity";

import Image from "@frontity/components/image";
import emailIcon from '../images/emailsent.png';
import agentIcon from '../images/agent_calling_you.png';
import successIcon from '../images/icon_success.png';

const SuccessComponentSubmission = ({state, actions}) => {


    return(
        <ContainerSuccessSubmission>
            <h3>Thanks for your request!</h3>
            <p>Your submission has been sent</p>
            <p>One of our agent will be in contact with you as soon as possible</p>
            
            <h3>State of the request</h3>
            <IconTextContainer>
                <ImageIcon src={emailIcon} />
                <h4>Request sent!</h4>
            </IconTextContainer>

            <IconTextContainer>
                <ImageIcon src={agentIcon} />
                <h4>An agent will take a look to your request inmediately</h4>
            </IconTextContainer>


            <IconTextContainer>
                <ImageIcon src={successIcon} />
                <h4>Confirmation of your reservation!</h4>
            </IconTextContainer>
        </ContainerSuccessSubmission>
    )
}

const ContainerSuccessSubmission = styled.div`
    h3{
        color: var(--blue-elegant);
        margin:1rem 0;
    }



    p{
        color: #484848;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 2rem;
    }

`

const IconTextContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    margin-bottom: 2rem;

    h4 {
        color: var(--blue-elegant);
        flex-basis: 40%;
        align-items: center;
        vertical-align: bottom;
    }
`

export const ImageIcon = styled(Image)`
    max-height: 120px;
    width: auto;
    
`

export default connect(SuccessComponentSubmission);