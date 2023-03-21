import { useEffect } from "react";

const App = ({ state }) => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + windowHeight;
      
      if (scrollPosition >= bodyHeight) {
        // User has reached the bottom of the page
        console.log("Reached the bottom of the page");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>Your Frontity app</div>;
};