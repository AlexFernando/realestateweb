import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`

/* CSS */
display: inline-block;
font-weight: normal;
color: var(--white);
border-width: 1px;
border-style: solid;
border-image: initial;
/* border-radius: 3px; */
padding: 0.7rem 1.2rem;
transition: all 0.3s ease 0s;
border-color: rgb(196, 188, 210);
text-decoration: none !important;
background-color: var(--golden-color);
font-size: var(--step--2);
font-family: 'Lato', sans-serif;

&:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

&:hover {
    background-color:var(--golden-icons);
}

&:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

&:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

&:active {
  background-color:var(--golden-icons);
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
`;

const LinkReadPost = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href); 
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(LinkReadPost);