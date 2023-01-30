import React from "react";
import { connect, styled } from "frontity";
import {FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { IconContext } from "react-icons";

const SocialMediaSuperiorMobile = ({ state }) => {

  return (
      <SocialMediaSuperior>
          <li>
            <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                <FaWhatsapp />
              </IconContext.Provider>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/ClassicJerusalem/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                <FaFacebook />
              </IconContext.Provider> 
            </a>
          </li>
    
          <li>
            <a href="https://www.instagram.com/classicjerusalem/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </li>
      </SocialMediaSuperior>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(SocialMediaSuperiorMobile);

const SocialMediaSuperior = styled.ul`

    display: flex;
    z-index: 999;
    justify-content: center;

    @media(min-width: 768px) {
        display: none;
    }

    li {
        list-style: none;
        font-weight: 100;
        margin-right: 1rem;
        letter-spacing: 1px;
        font-size: 1rem;

        a {
            text-decoration: none;
            color: var(--white);
        }
    }
`
