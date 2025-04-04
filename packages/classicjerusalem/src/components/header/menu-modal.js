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
  const [showSubMenuRent, setShowSubMenuRent] = useState(false);
  const [showSubMenuLongTerm, setShowSubMenuLongTerm] = useState(false);
  
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

                  name === 'Neighborhoods'? 
                  <>
                  <CustomLink  onClick={() => {setShowSubMenu(!showSubMenu), setShowSubMenuRent(false), setShowSubMenuLongTerm(false)}} key={name}>
                    {name}

                    <SubMenuIcon showIcon = {showSubMenu} />
                                  
                  </CustomLink>


                  <SubMenu show={showSubMenu}>
                    <SubMenuItem key="All Neighborhoods">
                     <MenuLink  key="All Neighborhoods" link='/neighborhoods/' aria-current={state.router.link === 'neighborhoods' ? "page" : undefined}>
                        All Neighborhoods
                      </MenuLink>
                    </SubMenuItem>
                    {
                      submenu.map(({name, link}) => {
                        return(
                          <SubMenuItem key={name}>
                            <MenuLinkSubMenu  key={name} link={link} aria-current={state.router.link === link ? "page" : undefined}>
                              {name}
                            </MenuLinkSubMenu>
                          </SubMenuItem>
                        )
                      })
                    }
                  </SubMenu> 
                  </>
                  
                  : 
                  
                      
                  name === 'For Rent'? 
                  <>
                  <CustomLink  onClick={() => {setShowSubMenuRent(!showSubMenuRent), setShowSubMenu(false)}} key={name}>
                    {name}
               
                    <SubMenuIcon showIconRent = {showSubMenuRent} />
              
                  </CustomLink>

                  <SubMenu showRent={showSubMenuRent}>

                  <SubMenuItem key="All Rentals">
                  <MenuLinkSubMenu  key="All Rent" link='/rent/' aria-current={state.router.link === 'rent' ? "page" : undefined}>
                      All Rentals
                  </MenuLinkSubMenu>
                  </SubMenuItem>

                  {
                    submenu.map(({name, link}) => {
                      return(
                        <SubMenuItem key={name}>

                      
                          {
                            name === "Long Term Rentals" ?

                            <>
                                  <SubMenuItem key="long term rentals">
                            <CustomLinkSecond  onClick={() => setShowSubMenuLongTerm(!showSubMenuLongTerm)} key={name}>
                            {name}
                            <SubMenuIconSecondLevel showIconLongTerm = {showSubMenuLongTerm} />
                          </CustomLinkSecond>
                          </SubMenuItem>
                          
                   
            
                              <SubMenu show={showSubMenuLongTerm}>
                                <SubMenuItemSecondLevel key={name}>
                                  <MenuLinkSubMenu key="furnished" link="/rent/long-term-rentals/furnished/" aria-current={state.router.link === link ? "page" : undefined}>Furnished</MenuLinkSubMenu>
                                </SubMenuItemSecondLevel>

                                <SubMenuItemSecondLevel key={name} >
                                  <MenuLinkSubMenu key="unfurnished" link="/rent/long-term-rentals/unfurnished/" aria-current={state.router.link === link ? "page" : undefined}>Unfurnished</MenuLinkSubMenu>
                                </SubMenuItemSecondLevel>
                              </SubMenu> 
                            </>

                          :                       
                            <MenuLink  key={name} link={link} aria-current={state.router.link === link ? "page" : undefined}>
                              {name}
                            </MenuLink>
                          }
                               
                        
                        </SubMenuItem>
                      )
                    })
                  }
                  </SubMenu> 
                  </>

                  : null

              }
            </>
          ))}
          <SocialMediaSuperiorMobile />
          <LangSwitcherMobile />
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  /* background-color: var(--black); */
  background-color: var(--main-color);
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 1500;
  top: 101px;
  left: 0;
`;

const MenuContent = styled.div`
  position: absolute;
  top:50px;
  z-index: 1501;
  display:flex;
  flex-direction: column;
  flex-grow: 0;
  width: 100%;
  height: 600px;
  margin-top: 5rem;

  overflow-y: auto;
`;

const CustomLink = styled.div`

  width: 100%;
  outline: 0;
  font-size: 16px;
  text-align: center;
  padding: 1.2rem 0;
  color:var(--white);
    display: block;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color: var(--golden);
    /* background-color: #191919; */
    background-color: var(--main-color);
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--golden);
    font-weight: bold;
  }
  
  border-bottom: 1px solid #2d395c;
`

const CustomLinkSecond = styled.div`

  width: 100%;
  outline: 0;
  font-size: 16px;
  text-align: center;
  padding: 1.2rem 0;
  color:#2d395c;
    display: block;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    /* color: var(--golden); */
    /* background-color: #191919; */
    /* background-color: var(--main-color); */
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    /* color: var(--golden); */
    font-weight: bold;
  }
  
  border-bottom: 1px solid #2d395c;
`
const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 16px;
  text-align: center;
  padding: 1.2rem 0;
  color:var(--white);
  display: block;
  z-index: 3;
  transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color: var(--golden);
    /* background-color: #191919; */
    background-color: var(--main-color);
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--golden);
    font-weight: bold;
  }

  overflow: hidden;
  object-fit: contain;
  border-bottom: 1px solid #2d395c;
`;


const MenuLinkSubMenu = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 16px;
  text-align: center;
  padding: 1.2rem 0;
  color: #2d395c;
  display: block;
  z-index: 3;
  transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color: var(--golden);
    /* background-color: #191919; */
    background-color: var(--main-color);
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--golden);
    font-weight: bold;
  }

  overflow: hidden;
  object-fit: contain;
  border-bottom: 1px solid #2d395c;
`;

const SubMenu = styled.ul`
  display: none;
  flex-direction: column;
  justify-content: center;

  z-index: 3;
  /* background-color: #0c0c0c; */
  background-color: var(--golden-color);
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  color: #2d395c;
  /* border: .5px solid var(--golden) ; */


  ${({ show }) =>show && `display:flex;`}
  ${({ showRent }) =>showRent && `display:flex;`}
`;


const SubMenuItem = styled.li`
  /* margin-bottom: 0.5rem; */
  margin-bottom: 0;
  padding-bottom: 0;
  cursor: pointer;
  list-style: none;

  & > a {
    display: inline-block;
    color: #2d395c;
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--golden);
    }
  }
`;


const SubMenuItemSecondLevel = styled.li`
  /* margin-bottom: 0.5rem; */
  margin-bottom: 0;
  padding-bottom: 0;
  cursor: pointer;
  list-style: none;
  background-color: #e3e3e3;

  & > a {
    display: inline-block;
    color: #2d395c;
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

  &:hover,
  &:focus {
    color: var(--golden);
  }
`;

const SubMenuIconSecondLevel = styled(RxTriangleUp)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: #2d395c;
  ${({showIconRent}) => showIconRent && `transform: rotate(180deg);`}
`;

export default connect(MenuModal);
