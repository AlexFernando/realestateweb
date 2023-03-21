import { connect } from "frontity";
import { useEffect, useState } from "react";
import { styled } from "frontity";

const Navbar = ({ state }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHidden(scrollPosition < 750);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isHidden={isHidden}>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: ${({ isHidden }) =>
    isHidden ? "none" : "0 2px 5px rgba(0, 0, 0, 0.2)"};
  transition: box-shadow 0.3s ease;
  transform: ${({ isHidden }) =>
    isHidden ? "translateY(-100%)" : "translateY(0)"};
  z-index: 1;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

export default connect(Navbar);
