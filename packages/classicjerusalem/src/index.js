import Root from './Root';
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import links from "./processor/links";

export default {
  name: "classicjerusalem",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      coinExchange: [],
      myProperties: [],
      propertiesForRent: [],
      propertiesForSell: []
    },
    source: {
      data: {
        "/": {
          isReady: true,
          isFetching: false,
          isHomePage: true
        },

        "/admin-classic-jerusalem/": {
          isReady: true,
          isFetching: false,
          isAdmin: true
        },
      }
    }
  },

      /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
       actions: {
        theme: {
          toggleMobileMenu: ({ state }) => {
            state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
          },
          closeMobileMenu: ({ state }) => {
            state.theme.isMobileMenuOpen = false;
          },

          // updateUsdEur: ({state}) => (usdEur) => {
          //   state.theme.usdEur = usdEur;
          // },
          // updateUsdIls: ({state}) => (usdIls) => {
          //   state.theme.usdIls = usdIls;
          // },

          updateExchangeRate: ({state}) => (coinExchange) => {
            state.theme.coinExchange = coinExchange
          },

          updateProperties: ({state}) => (properties) => {
            state.theme.myProperties = properties
          },

          updatePropertiesRent: ({state}) => (properties) => {
            state.theme.propertiesForRent = properties
          },

          updatePropertiesSell: ({state}) => (properties) => {
            state.theme.propertiesForSell = properties
          },

            // Add this `beforeSSR` property to your index.js
          handleFBCLID: ({ state, actions }) => {
            // Check if the URL contains ?fbclid=
            if (state.router.link.includes('?fbclid=')) {
              // Remove the ?fbclid= parameter from the URL and update the state
              const cleanUrl = state.router.link.split('?')[0];
              // console.log("cleanurl ", cleanUrl)
              actions.router.set(cleanUrl);
            }
          },

        },
      },
  
      libraries: {
        html2react: {
          /**
           * Add a processor to `html2react` so it processes the `<img>` tags
           * inside the content HTML. You can add your own processors too
           */
          processors: [image, iframe, links],
        }
      },

    
};
