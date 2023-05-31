import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
    display: block;
    justify-content: center;
    background-color: var(--golden-color) ;
    align-self: center;
    padding: .5rem 1.5rem;
    box-sizing: border-box;
    border: 1px solid #a28427;
    /*#8d7422*/
    /* border-radius: 5px; */
    font-size: var(--step--1);
    
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    /* width: 7rem; */
    margin: 1rem 0 1rem 1rem ;

    @media(min-width: 768px) {
        margin-bottom: 0rem;
    }

    &:hover {
        background-color: var(--golden-icons);
        transition: all 0.4s;
    }
`;

const LinkButtonHome = ({ href, actions, children }) => {
  return (

      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </Anchor>

  );
};

export default connect(LinkButtonHome);