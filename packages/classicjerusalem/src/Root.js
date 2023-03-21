import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import Header from './components/header/header'
import Footer from './components/footer';
import FooterOne from './components/footer-one'
import Home from './components/home';
import Properties from './components/AllProperties'
import RentFurnished from './components/RentFurnished';
import RentUnfurnished from './components/RentUnfurnished'
import SellProperties from './components/SellProperties'
import Details from './components/Details';
import Neighborhood from './components/NeighborhoodPage'
import NeighborhoodDeatils from './components/NeighborhoodDetails';
import NewDevelopment from './components/NewDevelopment';
import Blog from './components/BlogPage';
import BlogDetails from './components/BlogDetails'
import GeneralContact from './components/MainContact';
import HeaderAlt from './components/header/headerAlternative'
import WhatsAppFloating from './components/WhatsAppFloating';
import SubscribeIcon from './components/SubscribeIcon';


const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link);
    
    return (
      <>
      <Global
                styles={css`

                    :root {
                        --green: #0c884a; //#5B3BE8;
                        /* --golden: #b27c00; */
                        /* --golden: #df9b00; */
                        --golden: #c88b00;
                        /* --golden : #e28f2d; */
                        /* --golden : #cba631; */
                        /* --golden: #b6952c; */
                        --black: #000000;
                        --white: #ffffff;
                        --blue-elegant : #3e4c66;
                        --blue-dark: #1C2641;
                        --bodycolor: #343434;
                        --main-color: #1c2641;
                        --golden-color: #cba631;
                        --white-color: #fff;
                        --gray-color: #939393;
                        --golden-icons: #c0962d;
                        --background-color-headband: rgba(203, 166, 49, 0.7);
                        --background-color-cards: rgba(28, 38, 65, 0.7);
                        --border-color-card: #4d5468;

                        --step--2: clamp(0.69rem, calc(0.67rem + 0.11vw), 0.80rem);
                        --step--1: clamp(0.83rem, calc(0.80rem + 0.17vw), 1.00rem);
                        --step-0: clamp(1.00rem, calc(0.95rem + 0.25vw), 1.25rem);
                        --step-1: clamp(1.20rem, calc(1.13rem + 0.36vw), 1.56rem);
                        --step-2: clamp(1.44rem, calc(1.34rem + 0.51vw), 1.95rem);
                        --step-3: clamp(1.73rem, calc(1.59rem + 0.71vw), 2.44rem);
                        --step-4: clamp(2.07rem, calc(1.88rem + 0.98vw), 3.05rem);
                        --step-5: clamp(2.49rem, calc(2.22rem + 1.33vw), 3.82rem);
                    }

                    body {
                        margin: 0;
                        font-family: 'Montserrat', sans-serif;
                        overflow-x: hidden;
                        width: 100%;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        -webkit-text-stroke: 0.3px;
                        /*height: 100%;*/
                    }

                
                     /* * {
                        border: 1px solid #f00 !important;
                    }      */
                     
                    p {
                        font-family: 'Montserrat', sans-serif; 
                        font-size: 400;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                
                    }

                    h1,h2,h3,h4,h5,h6 {
                        font-family: 'Lato', sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                `}
            />

            <Head>
                <title>{state.frontity.title}</title>
                <meta name="description" content={state.frontity.description} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,600&family=Nunito+Sans:wght@200;300;400;700&display=swap" rel="stylesheet" />
                <html lang="en" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>
            
            {/* <Header /> */}
            <HeaderAlt />
            <WhatsAppFloating />
            <SubscribeIcon />

            {data.isHomePage && <Home /> }
            {/* {data.isDetails && <Details />} */}
            {/* {data.isProperties && <Properties />} */}
            {/* {state.router.link === "/properties/" && <Properties /> } */}
            {data.isProperties && <Details /> }
            {state.router.link === "/long-term-rentals/" && <RentFurnished /> } 
            {state.router.link === "/short-term-rentals/" && <RentUnfurnished/>}
            {state.router.link === "/pesach-and-succot-rentals/" && <RentUnfurnished/>}
            {state.router.link === "/sell/" && <SellProperties/>}
            {state.router.link === "/neighborhoods/" && <Neighborhood />} 
            {data.isNeighborhood && <NeighborhoodDeatils />}
            {state.router.link === "/new-development/" && <NewDevelopment />}
            {state.router.link === "/blogposts/" && <Blog />}
            {data.isBlog && <BlogDetails />}
            {state.router.link === "/contact/" && <GeneralContact />}  
            <FooterOne />
            <Footer title= "Classic Jerusalem" />  

      </>
    );
  };

  export default connect(Root);