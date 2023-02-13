import React from "react";
import { styled, keyframes, css } from "frontity";
import Image from "@frontity/components/image";
import logo from '../images/logo.png'

const Loading = () => (
  <Container>
      <Loader> Classic Jerusalem ...</Loader>

  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 25rem 0 15rem 0;
  }

  @media(max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const Spotlight = keyframes`
    0% , 20% {
      opacity: 1;
      letter-spacing: 2px;
    }

    80% , 100% {
      opacity: 0;
      letter-spacing: 32px;

        @media(max-width: 768px) {
            letter-spacing: 8px;
        }
    }
`
const Loader = styled.span`
    font-size: 2rem;
    font-weight: 300;
    display: inline-block;
    letter-spacing: 2px;
    font-family: 'Monserrat';
    color: var(--golden);
    box-sizing: border-box;
    animation: ${Spotlight} 2s linear infinite alternate;
    text-align: center;
    
    @media(max-width: 768px) {
        font-size: 1.2rem;
    }

`

export default Loading;