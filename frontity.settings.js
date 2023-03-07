const settings = {
  "name": "realstate",
  "state": {
    "frontity": {
      "url": "https://realstate.wildfreewalkingtours.com",
      "title": "Classic Jerusalem",
      "description": "A real state agency that offers accomodation in Jerusalem"
    }
  },
  "packages": [
    {
      "name": "classicjerusalem",

      "state": {
        "theme": {
          "menu": [
            {
              name: "Home", 
              link : "/",
              submenu: []
            },
  
            {
              name: "For Rent",
              link: "/#/",
              submenu: [
                {
                  name: 'Furnished',
                  link: '/furnished/'
                },
                {
                  name: 'Unfurnished',
                  link: '/unfurnished/'
                },
              ]
            },

            {
              name: "For Sell",
              link: "/sell/",
              submenu: []
            },

            {
              name: "Blog",
              link: "/blogposts/",
              submenu: []
            },

            {
              name: "Contact",
              link: "/contact/",
              submenu: []
            }
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://realstate.wildfreewalkingtours.com/wp-json",
         
          "params": {
            per_page: 100,
          },

          "postTypes": [
            {
              type: "properties",
              endpoint: "properties",
              archive: "properties",
            },
            {
              type: "blog",
              endpoint: "blog",
              archive: "blog",
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
