import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
    display: block;
    justify-content: center;
    background-color: var(--golden-color) ;
    align-self: center;
    padding: .8rem 0.5rem;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: var(--step--2);
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    width: 7rem;
    margin: 1rem auto;

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