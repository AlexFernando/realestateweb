import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";
import logo from '../images/logo.png'

const SuccessMessage = () => {
  return (
    <div className="success-message">
      <Image src={logo} alt="Success" />
      <p>Thank you for your message!</p>
    </div>
  );
};

//success-message css-181qacr-SuccessMessage e1qd7a8v1

export default SuccessMessage;
