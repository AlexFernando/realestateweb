import React, { useState } from 'react';
import {Global, connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
import SpanishImage from '../../images/es.svg';
import EnglishImage from '../../images/us.svg';

const LangSwitcher = ({state, actions}) => {

  let myLink = "/";
  let linkSpanish = "";
  //let linkFrench = "";
  let arrayEnglish = [];

  if(state.router.link.includes("/es/")) {
    linkSpanish = state.router.link;
    // linkFrench = state.router.link.replace("/es/", "/fr/")
    arrayEnglish = state.router.link.split("/");
    if(arrayEnglish.length >= 5){
      myLink += arrayEnglish[2] +"/"+ arrayEnglish[3];
    }

    else {
      myLink += arrayEnglish[2];
    }
  
  }

  // else if(state.router.link.includes("/fr/")) {
  //   linkFrench = state.router.link;
  //   linkSpanish = state.router.link.replace("/fr/", "/es/")
  //   arrayEnglish = state.router.link.split("/");
  //   myLink += arrayEnglish[2];
  // }


  else {
    linkSpanish = "/es" + state.router.link;
    // linkFrench = "/fr" + state.router.link;
    myLink = state.router.link;
  }

  return(

      <FlagContainer>
     
          <a href="#"><ImageFlagStyles src={EnglishImage}/></a>
       

     
          <a href="#"> <ImageFlagStyles src={SpanishImage}/> </a>
     
        
          {/* <a href={linkFrench}><ImageFlagStyles src={FrenchImage}/> </a>  */}
      </FlagContainer>
  
  
  )
}

export default connect(LangSwitcher);

const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 999;
  justify-content: center;
  margin-left: auto;


  @media(max-width: 768px) {
    display: none;
    //margin-left: 1rem;
  }

  a {
    margin-right: 1rem;
  }
`
const ImageFlagStyles = styled(Image)`
  width: 35px;
  height: 20px;
`