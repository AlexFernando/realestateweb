import React, { useState } from 'react';
import { connect, styled, keyframes, css } from "frontity";
import { IconContext } from "react-icons";
import {FaWhatsapp} from 'react-icons/fa';

const WhatsAppFloating = () => {
    return(
        <FloatContainer>
            <Float href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                <WhatsAppIcon />
            </Float>
        </FloatContainer>
    )
}

export default connect(WhatsAppFloating);

const Pulse = keyframes`
	0% {
		box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
	}
	80% {
		box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
	}
}
`
const FloatContainer = styled.div`
	position: relative;
`

const Float = styled.a`
    background: #25d366;
	color: white;
	position: fixed;
	bottom: 20px;
	right: 20px;
    font-size: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: .8rem;
	text-decoration: none;
	border-radius: 50%;
	animation-name: ${Pulse};
	animation-duration: 1.5s;
	animation-timing-function: ease-out;
	animation-iteration-count: infinite;
    z-index: 1100;
`

const WhatsAppIcon  = styled(FaWhatsapp)`
  color: white;
  font-size: var(--step-3);
`;