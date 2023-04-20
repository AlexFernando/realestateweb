import React, {useState} from 'react';
import { connect, styled, keyframes, css} from "frontity";
import Image from "@frontity/components/image";
import logo from '../images/logo.png'
import icon from '../images/icon.jpeg'


const zoomInRotate = keyframes`
  0% {
    transform: scale(0) rotateY(0);
  }
  /* 40% {
    transform: scale(1) rotateY(-180deg);
  } */

  45% {
    transform: scale(.8) rotateY(360deg);
  }

  90% {
    transform: scale(1) rotateY(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-image: linear-gradient(180deg, rgba(28, 38, 65, .7)  0%, rgba(28, 38, 65, .9) 100%);

  /*new line*/
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

// export const ImageStyled = styled.div`
//     max-width: 180px;
//     height: auto;
// `

const Icon = styled(Image)`
  animation: ${zoomInRotate} 4s ease-out infinite;

    /* background-color: var(--main-color); */
    /* border-radius: 50%; */
    /* padding: 1rem; */
    /* border:0px; */

    /* background-image: linear-gradient(180deg, rgba(28, 38, 65, .8)  0%, rgba(28, 38, 65, .8) 100%); */


    max-width: 200px;
    max-height: 160px;
  /* background: radial-gradient(circle at center, white 60%, transparent 61%); */
  overflow: hidden;
  /* border: 1px solid #000; */
`;

const LoadingComponent = () => {

  return(
  <Container>

    <Icon src={logo} alt="Loading icon" />
    
  </Container>
  )
};

export default LoadingComponent;
