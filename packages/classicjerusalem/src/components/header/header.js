import React from "react";
import { connect, styled } from "frontity";
import Link from "../linktrue";
import Nav from "./nav";
import MobileMenu from "./menu";
import Image from "@frontity/components/image";
import LangSwitcher from './langSwitcher';
import {FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { IconContext } from "react-icons";
import logo from '../../images/logo.png';

const Header = ({ state }) => {

  return (
    <AllNavbar>
      <BrandContainer>
        <StyledLink link="/">
          <ImageStyled>
            <Image alt="logo" src={logo} />  
          </ImageStyled>
         
        </StyledLink>
        
        <MobileMenu />
      </BrandContainer>
      <Nav />

      <SocialMediaSuperior>
          <li>
            <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.7rem" } }>
                <FaWhatsapp />
              </IconContext.Provider>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/ClassicJerusalem" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.7rem" } }>
                <FaFacebook />
              </IconContext.Provider> 
            </a>
          </li>

          <li>
            <a href="https://instagram.com/classic_jerusalem?igshid=NTc4MTIwNjQ2YQ==" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.7rem" } }>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </li>
       
      </SocialMediaSuperior>
      {/* <LangSwitcher /> */}
    </AllNavbar>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const AllNavbar = styled.div`

    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    z-index: 9999;
    background-color: #0c0c0c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid var(--golden);
  
    @media (max-width: 1024px) {
      height: 100px;
    }
`

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight:800;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color:var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color:var(--black);
  }
`;


export const ImageStyled = styled.div`
    max-width: 80px;
    height: auto;
    margin-left: 1rem;
    margin-top: 5px;

    @media(min-width: 1024px) {
          max-width: clamp(5.49rem, calc(2.22rem + 1.33vw), 8.82rem);
          height: auto;
    }

    img {

      max-width: 100%;
      object-fit: cover;
      height: auto;
    }
`

export const SocialMediaSuperior = styled.ul`

    display: flex;

    @media(max-width: 1024px) {
      display: none;
    }

    li {
      list-style: none;
      font-weight: 100;
      letter-spacing: 1px;
      font-size: 1rem;
      margin-right: 1rem;

      @media(max-width: 1024px) {
        margin-right: .5rem;
      }

      a {
        text-decoration: none;
        color: #262626;
      }
    }
`
  
