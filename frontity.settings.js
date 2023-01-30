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
            ["Home", "/"],
            ["Properties", "/properties/"],
            ["Blog", "/blog/"],       
            ["Contact", "/contact/"]
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
          "api": "https://realstate.wildfreewalkingtours.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
