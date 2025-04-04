import React from "react";
import { connect, styled } from "frontity";
import {FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {WhatsAppIcon, FacebookIcon, InstagramIcon} from './nav';

const SocialMediaSuperiorMobile = ({ state }) => {

  return (
      <SocialMediaSuperior>
            <li>
              <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                  <WhatsAppIcon />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/ClassicJerusalem" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                  <FacebookIcon />
              </a>
            </li>

            <li>
              <a href="https://instagram.com/classic_jerusalem?igshid=NTc4MTIwNjQ2YQ==" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                  <InstagramIcon />
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

    @media(min-width: 1025px) {
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
