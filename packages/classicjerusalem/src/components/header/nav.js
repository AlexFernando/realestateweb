import React, {useState} from "react";
import { connect, styled, css} from "frontity";
import Link from "../linktrue";
import {RxTriangleDown, RxTriangleLeft} from 'react-icons/rx'
import {RxTriangleRight} from 'react-icons/rx'

import {FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone} from 'react-icons/fa';
import { CiFacebook, CiInstagram, CiPhone} from 'react-icons/ci'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelephoneForward, BsEnvelope, BsTelephoneOutbound} from 'react-icons/bs'
import {AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'
import {TbBrandWhatsapp} from 'react-icons/tb'
import { IconContext } from "react-icons";
import LangSwitcher from './langSwitcher';
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (

  <NavbarContainer>

    <NavBarUp>
 
        <SocialMediaSuperior>
            <li>
              <PhoneIcon />
              +972-58-654-0969
            </li>
            <li>
              <NavBarIcon />
              <a href="mailto:scohenben@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
                scohenben@gmail.com
              </a>
            </li>
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
              <a href="https://www.instagram.com/classicjerusalem/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                  <InstagramIcon />
              </a>
            </li>

        </SocialMediaSuperior>

        <LangSwitcher />

    </NavBarUp>
   
    <NavBarDown>
      {state.theme.menu.map(({name, link, submenu}) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;

        const [showSubMenu, setShowSubMenu] = useState(false);
        const [showSubMenuSecond, setShowSubMenuSecond] = useState(false);
        


            return(
            <>
            {submenu.length === 0? 
             
              <NavItem>
                  <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
              </NavItem>
              :
              <>
                <NavItem key={name} onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
                  <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                    {name}
                      <SubMenuIcon showIcon = {showSubMenu} />
                    </Link>      
                    <SubMenu show={showSubMenu}>
                  {
                    submenu.map(({name, link}) => {
                      return(
                      
                        name === "Long Term Rentals" ?
                        <SubMenuItem key={name} onMouseEnter={() => setShowSubMenuSecond(true)} onMouseLeave={() => setShowSubMenuSecond(false)}>
                        

                          <a href="#" aria-current={isCurrentPage ? "page" : undefined}>
                            {name}
                            <SubMenuIconSecond showIconSecond = {showSubMenuSecond} />
                          </a>

                          <SubMenuSecond showSecond={showSubMenuSecond}>
                            <SubMenuItem key={name} >
                              <Link link="/Furnished/" aria-current={isCurrentPage ? "page" : undefined}>Furnished</Link>
                            </SubMenuItem>

                            <SubMenuItem key={name} >
                              <Link link="/Unfurnished/" aria-current={isCurrentPage ? "page" : undefined}>Unfurnished</Link>
                            </SubMenuItem>
                          </SubMenuSecond>
                        </SubMenuItem>

                        :
                    
                        <SubMenuItem key={name}>
                          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
                        </SubMenuItem>

                      )

                    })
                  }
                  </SubMenu>  
                                               
                </NavItem>

                                          

              </>
              
            }
          
            
            </>
            )
      })}
    </NavBarDown>
   


  </NavbarContainer>
);

export default connect(Nav);

const NavbarContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: auto;
  margin-left: 4rem;
  width: max(1050px, 65%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;
`
const NavBarUp = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  background-color: var(--main-color);
`
const NavBarDown = styled.nav`
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-grow: 1;
  height: 50px;
  max-width: 100%;
  box-sizing: border-box;
  /* overflow-x: auto; */
  /* background-color: #fff; */
  background-color: var(--golden-color);
  margin-bottom: 0;
  /* background-color: #fff;
  border-radius: 2px;
  border: 2px solid var(--golden-color); */

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`

  color: var(--main-color);
  font-size: var(--step--1);
  text-transform: uppercase;
  box-sizing: border-box;
  height: 100%;
  /* margin: 0 1rem; */
  /* margin-bottom: 1px; */
  /* flex-shrink: 0; */

  & > a {
    display: inline-block;
    line-height: 3em;
    color:var(--main-color);
    transition: all 0.4s ease;
    text-decoration: none;
    font-weight: 500;
    /* padding: 1px .5rem; */
    /* border-bottom: 3px solid transparent;
    border-radius: 3px; */
    
    &:hover {
      color : #fff;
    }

    /* &:hover > ul {
    display: flex;

    @media (max-width: 768px) {
      position: static;
      display: none;
    }
    } */

    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      /* text-decoration: underline; */
      /* background-color:  #b27c00; */
          color: #fff;
          /* border-bottom: 3px solid var(--main-color);
          border-radius: 3px;
          transition: all 0.4s ease; */
    }
  }

 

  &:last-of-type {
    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }

`;


const SubMenu = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 9999;
  /* background-color: #0c0c0c; */
  background-color: var(--golden-color);
  padding: 0;
  margin: 0;
  /* margin-top: 8px; */
  /* margin-top: 5px; */
  border-top: 5px solid var(--main-color) ;
  ${({ show }) =>show && `  display:flex; transition: all 0.4s ease;  z-index: 9999;`}
`;


const SubMenuSecond = styled.ul`
  display: flex;
  opacity: 0;
  flex-direction: column;
  position: absolute;
  left: 14.5rem;
  top: -.3rem;
  margin: 0;
  padding: 0;
  z-index: 1100;
  /* background-color: #0c0c0c; */
  background-color: var(--golden-color);
  /* margin: 0; */
  /* margin-top: 8px; */
  /* margin-top: 5px; */
  border-left: 1px solid var(--blue-dark);
  border-top: 5px solid var(--blue-dark);
  ${({ showSecond }) =>showSecond && `  opacity: 1; transition: all 0.4s ease;  z-index: 9999;`}
`;


const SubMenuItem = styled.li`
  cursor: pointer;
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 0 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  &:hover {
      background-color: var(--main-color);

      a{
        color: var(--white);  
      }
     
  }
  border-bottom: 1px solid var(--blue-dark);

  & > a {
    display: inline-block;
    line-height: 2em;
    color:var(--main-color);
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.4s ease;
    width: 100%;
    margin-top: .5rem;
    margin-bottom: 0.5rem;
    padding: .5rem;
    /* align-self: center;
   

    /* border-bottom: 3px solid transparent; */
    text-decoration: none;



    /* &:hover {
      border-bottom: 3px solid var(--main-color);
      transition: all 0.3s ease;
    } */
  }
`;

const SubMenuIcon = styled(RxTriangleDown)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  /* color: #fff; */
  color: var(--main-color);
  ${({showIcon}) => showIcon && `transform: rotate(180deg);`}
  vertical-align: text-bottom;
`

const SubMenuIconSecond = styled(RxTriangleRight)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  /* color: #fff; */
  color: var(--main-color);
  ${({showIconSecond}) => showIconSecond && `transform: rotate(180deg); color: #fff;`}
  vertical-align: text-bottom;
`

export const SocialMediaSuperior = styled.ul`

    display: flex;
    flex-grow: 1;
    margin-left: 0;
    padding-left: 0;

    @media(max-width: 1024px) {
      display: none;
    }

    li {
      list-style: none;
      font-weight: 100;
      letter-spacing: 1px;
      font-size: 1rem;
      color: var(--white);
      margin: 0 1rem;
    

      @media(max-width: 1024px) {
        margin-right: .5rem;
      }

      &:nth-of-type(3) {
        margin-left: auto;
      }

      &:nth-of-type(5) {
        margin-right: auto;
      }

      a {
        text-decoration: none;
        color: #262626;
        color: #fff;
        margin-left: .5rem;
      }
    }
`
export const NavBarIcon = styled(BsEnvelope)`
  color: var(--golden-icons);
  font-size: var(--step-1);
  vertical-align: middle;
`
export const WhatsAppIcon  = styled(TbBrandWhatsapp)`
  color: var(--golden-icons);
  font-size: var(--step-2);
  vertical-align: middle;
`;

export const FacebookIcon  = styled(CiFacebook)`
  color: var(--golden-icons);
  font-size: var(--step-2);
  vertical-align: middle;
`;

export const InstagramIcon  = styled(CiInstagram)`
  color: var(--golden-icons);
  font-size: var(--step-2);
  vertical-align: middle;
`;

export const PhoneIcon = styled(BsTelephoneOutbound)`
  color: var(--golden-icons);
  font-size: var(--step-1);
  vertical-align: middle;
`