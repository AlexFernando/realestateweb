import { useState, useEffect } from "react";
import { styled } from "frontity";
import SubscribeForm from "./SuscribeForm";
import {BsTelephoneForward, BsEnvelope, BsTelephoneOutbound} from 'react-icons/bs'

const SubscribeIcon = () => {
  
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showForm) {
        setShowForm(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  // const handleScroll = () => {
  //   if (!showForm && window.scrollY === window.outerHeight) {
  //     setShowForm(true);
  //   }

  //   if (!showForm && window.scrollY >= window.innerHeight * 0.7) {
  //     setShowForm(true);
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const bodyHeight = document.documentElement.scrollHeight;
  //     const scrollPosition = window.scrollY + windowHeight;
      
  //     if (scrollPosition >= (bodyHeight - 200)) {
  //       // User has reached the bottom of the page
  //       setShowForm(true);
  //     }

  //     else {
  //       setShowForm(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [showForm]);


  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [showForm]);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <SubscribeForm handleClose={handleClose} />
      ) : (
        <Icon onClick={() => setShowForm(true)}>
            <EnvelopeIcon />
        </Icon>
      )}
    </>
  );
};

export default SubscribeIcon;

const Icon = styled.div`
  position: fixed;
  bottom: 20px;
  left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #007bff; */
  background-color: var(--golden-icons);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;
`;

const EnvelopeIcon = styled(BsEnvelope)`
  color: #fff;
  font-size: var(--step-1);
  vertical-align: middle;
`