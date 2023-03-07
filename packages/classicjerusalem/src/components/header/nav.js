import React, {useState} from "react";
import { connect, styled, css} from "frontity";
import Link from "../linktrue";
import { FaAngleDown } from 'react-icons/fa';
import {RxTriangleDown} from 'react-icons/rx'
/**
 * Navigation Component
 *
 * It renders the navigation links
 */



const Nav = ({ state }) => (

  <NavContainer>
    {state.theme.menu.map(({name, link, submenu}) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;

      const [showSubMenu, setShowSubMenu] = useState(false);

      return(
          <>
          {submenu.length === 0? 

          
              <NavItem>
                   <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
              </NavItem>
              

            :
            <NavItem key={name} onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
                        <a href="#" aria-current={isCurrentPage ? "page" : undefined}>
                          {name}
                            <SubMenuIcon showIcon = {showSubMenu} />
                          </a>

                         
                          <SubMenu show={showSubMenu}>
                            {
                              submenu.map(({name, link}) => {
                                return(
                                  <SubMenuItem key={name}>
                                    <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
                                  </SubMenuItem>
                                )
                              })
                            }
                          </SubMenu>  
            </NavItem>

            

          }
          </>
      );
      
    })}
  </NavContainer>
);

export default connect(Nav);


const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`

  margin: 0 16px;
  color: var(--brand);
  font-size: var(--step--1);
  text-transform: uppercase;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    color:var(--white);
    transition: all 0.3s ease;
    text-decoration: none;
    padding: .5rem;

    &:hover {
      color: var(--golden);
      background-color: #191919;
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
      //color:var(--brand);
      color: var(--golden);
      text-decoration: underline;
    }
  }
  
  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

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
  z-index: 1;
  background-color: #0c0c0c;
  padding: 1rem;
  margin: 0;
  border: .5px solid var(--golden) ;


  ${({ show }) =>show && `display:flex;`}
`;


const SubMenuItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;
  list-style: none;

  & > a {
    display: inline-block;
    line-height: 2em;
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

const SubMenuIcon = styled(RxTriangleDown)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: #fff;
  ${({showIcon}) => showIcon && `transform: rotate(180deg);`}
  vertical-align: text-bottom;
`

