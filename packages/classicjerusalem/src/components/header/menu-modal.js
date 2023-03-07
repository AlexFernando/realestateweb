import React, {useState} from "react";
import { styled, connect } from "frontity";
import Link from "../linktrue";
import LangSwitcherMobile from './langSwitcherMobile';
import SocialMediaSuperiorMobile from './SocialMediaSuperiorMobile';
import { FaAngleDown } from 'react-icons/fa';
import {RxTriangleUp} from 'react-icons/rx'

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  //line for submenu function
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">

        {isThereLinks &&
          menu.map(({name, link, submenu}) => (
            <>
              {submenu.length === 0? 
              
              <MenuLink 
                key={name}
                link={link}
                aria-current={state.router.link === link ? "page" : undefined}
              >
                {name}
              </MenuLink>
              
              :

                <CustomLink  onClick={() => setShowSubMenu(true)} onMouseLeave = {() => setShowSubMenu(false)}
                  key={name}
                >
                  {name}
               
                    <SubMenuIcon showIcon = {showSubMenu} />
                

                  <SubMenu show={showSubMenu}>
                      {
                        submenu.map(({name, link}) => {
                          return(
                            <SubMenuItem key={name}>
                              <MenuLink  key={name} link={link} aria-current={state.router.link === link ? "page" : undefined}>
                                {name}
                              </MenuLink>
                            </SubMenuItem>
                          )
                        })
                      }
                    </SubMenu> 
                </CustomLink>

              }
            </>
          ))}
          <SocialMediaSuperiorMobile />
          {/* <LangSwitcherMobile /> */}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: var(--black);//#1f38c5;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
position: absolute;
top:0;
  z-index: 3;
  display:flex;
  flex-direction: column;
  flex-grow: 0;
  width: 100%;
  height: auto;
  margin-top: 5rem;
`;

const CustomLink = styled.div`

    width: 100%;
    outline: 0;
    font-size: 20px;
    text-align: center;
    padding: 1.2rem 0;
    color:var(--white);
      display: block;
      z-index: 999;
      transition: all 0.3s ease 0s;
    &:hover,
    &:focus {
      color: var(--golden);
      background-color: #191919;
    }
    text-decoration: none;
    /* styles for active link */
    &[aria-current="page"] {
      color: var(--golden);
      font-weight: bold;
    }
  
`
const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color:var(--white);
  display: block;
  z-index: 3;
  transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color: var(--golden);
    background-color: #191919;
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--golden);
    font-weight: bold;
  }
`;


const SubMenu = styled.ul`
  display: none;
  flex-direction: column;

  z-index: 3;
  background-color: #0c0c0c;
  padding: .5rem;
  border: .5px solid var(--golden) ;


  ${({ show }) =>show && `display:flex;`}
`;


const SubMenuItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;
  list-style: none;

  & > a {
    display: inline-block;
    color:var(--white);
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--golden);
    }
  }
`;


const SubMenuIcon = styled(RxTriangleUp)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: #fff;
  ${({showIcon}) => showIcon && `transform: rotate(180deg);`}
`;

export default connect(MenuModal);
