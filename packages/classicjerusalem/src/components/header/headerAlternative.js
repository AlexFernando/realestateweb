import React, {useState, useEffect}  from "react";
import { connect, styled } from "frontity";
import Link from "../linktrue";
import Nav from "./nav";
import MobileMenu from "./menu";
import Image from "@frontity/components/image";
import logo from '../../images/logo.png'
import NavBarTest from "./NavBarTest";

const HeaderAlt = ({ state }) => {

    /**state for scrolling navbar */
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsHidden(scrollPosition > 100 && scrollPosition<750);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  

  return (
    <AllNavbar isHidden={isHidden}>
      <BrandContainer>
        <StyledLink link="/">
          <ImageStyled>
            <Image alt="logo" src={logo} />  
          </ImageStyled>
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
      {/* <NavBarTest /> */}
    </AllNavbar>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(HeaderAlt);

const AllNavbar = styled.div`
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    z-index: 10;
    background-color: #0c0c0c;
    background-color: var(--main-color);
 
    width: 100%;
    height: 90px;
    height: 120px;
    border-bottom: 1px solid var(--golden);
  
    @media (max-width: 1024px) {
      height: 100px;
    }

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
    }

    /**
      new code for scrolling appearing desapearing navbar  
     */
    box-shadow: ${({ isHidden }) =>
    isHidden ? "none" : "0 2px 5px rgba(0, 0, 0, 0.2)"};
    transition: box-shadow 0.3s ease;
    transform: ${({ isHidden }) =>
    isHidden ? "translateY(-100%)" : "translateY(0)"};
`

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    width: auto;
  }
  margin-left: auto;
  /* margin-right: auto; */
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
          max-width: 120px;
          height: 120px;
    }

    img {

      max-width: 100%;
      object-fit: cover;
      height: auto;
    }
`

