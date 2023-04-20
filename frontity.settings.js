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
              link: "/rent/",
              submenu: [
                {
                  name: 'Long Term Rentals',
                  link: '/rent/long-term-rentals/'
                },
                {
                  name: 'Short Term Rentals',
                  link: '/rent/short-term-rentals/'
                },
                {
                  name: 'Pesach and Succot Rentals',
                  link: '/rent/pesach-and-succot-rentals/'
                }
              ]
            },

            {
              name: "For Sell",
              link: "/sell/",
              submenu: []
            },

            {
              name: "Neighborhoods",
              link: "/neighborhoods/",
              submenu : [
                {
                  name: 'Abu Tor',
                  link: '/neighborhood/abu-tor/'
                },
                {
                  name: 'Baka',
                  link: '/neighborhood/baka/'
                },
                {
                  name: 'Beit Hakerem',
                  link: '/neighborhood/beit-hakerem/'
                },
                {
                  name: 'City Center',
                  link: '/neighborhood/city-center/'
                },

                {
                  name: 'The Germany Colony',
                  link: '/neighborhood/the-germany-colony/'
                },

                {
                  name: 'Gilo',
                  link: '/neighborhood/gilo/'
                },

                {
                  name: 'The Greek Colony',
                  link: '/neighborhood/the-greek-colony/'
                },

           
                {
                  name: 'Old Katamon',
                  link: '/neighborhood/old-katamon/'
                }
              ]
            },

            {
              name: "New Development",
              link: "/new-development/",
              submenu : []
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
            }, 
            {
              type: "neighborhood",
              endpoint: "neighborhood",
              archive: "neighborhood",
            }
          ],

          "taxonomies": [
            {
              taxonomy: "category",
              endpoint: "categories",
              postTypeEndpoint: "properties",
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
