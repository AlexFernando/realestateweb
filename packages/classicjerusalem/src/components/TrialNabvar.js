import React, { useState } from 'react';
import { connect, styled } from "frontity";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  margin-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const MenuItem = styled.li`
  margin-right: 1rem;
  cursor: pointer;
  position: relative;

  /* &:hover > ul {
    display: flex;

    @media (max-width: 768px) {
      position: static;
      display: none;
    }
  } */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const SubMenu = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #333;
  padding: 1rem;

  @media (max-width: 768px) {
    position: static;
    display: none;
  }

  ${({ show }) =>show && `display:flex; `}
`;


const SubMenuItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #ff0;
  }
`;

const NavbarWithSubMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <Navbar>
      <div>Logo</div>
      <Menu>
        <MenuItem onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
          Menu 1
          <SubMenu show={showSubMenu}>
            <SubMenuItem>Submenu Item 1</SubMenuItem>
            <SubMenuItem>Submenu Item 2</SubMenuItem>
            <SubMenuItem>Submenu Item 3</SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          Menu 2
        </MenuItem>
        <MenuItem>
          Menu 3
        </MenuItem>
      </Menu>
    </Navbar>
  );
}

export default NavbarWithSubMenu;
