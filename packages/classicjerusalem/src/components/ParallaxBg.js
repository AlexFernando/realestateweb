import React from 'react';
import { connect, styled, css, Global } from "frontity";

const HeroSection = styled.section`
  background-image: url("path/to/image.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: #ff6600;
  color: white;
  font-size: 1.5rem;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #cc5500;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Nav>
        <Logo href="#">Real Estate Jerusalem</Logo>
        <NavList>
          <NavListItem><NavLink href="#">Home</NavLink></NavListItem>
          <NavListItem><NavLink href="#">About</NavLink></NavListItem>
          <NavListItem><NavLink href="#">Properties</NavLink></NavListItem>
          <NavListItem><NavLink href="#">Contact</NavLink></NavListItem>
        </NavList>
      </Nav>
      <HeroContent>
        <HeroTitle>Welcome to Real Estate Jerusalem</HeroTitle>
        <HeroText>We specialize in buying, selling, and renting properties in Jerusalem. Our team of experienced agents can help you find the perfect home or investment property.</HeroText>
        <HeroButton href="#">View Properties</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
