import React, {useState, useEffect, useRef} from "react";
import Loading from './Loading'
import { connect, styled, css} from "frontity";
import {BsTelephoneForward, BsEnvelopeOpen, BsTelephoneOutbound} from 'react-icons/bs'
import {HiOutlineEnvelopeOpen} from 'react-icons/hi2'
import axios from 'axios';

const SubscribeForm = ({state, actions, libraries, handleClose }) => {

  useEffect(() => {
    actions.source.fetch("/home/");
  }, []);

  const pageHomeData = state.source.page[12];

  const Html2react = libraries.html2react.Component;

  const [myInputValue, setMyInputValue] = useState('')
  const [mySubmit, setMySubmit] = useState(false)
  const [dataToSendgrid, setDataToSendgrid] = useState({})

  // Create a ref to store the input element
  const formRef = useRef();


  useEffect(() => {


    const inputElement =  formRef.current && formRef.current.querySelector("input[type='email']");
    const submitElement = formRef.current && formRef.current.querySelector("input[type='submit']");

    const handleInputChange = () => {
      if (inputElement) {
        const inputValue = inputElement.value;
        setMyInputValue(inputValue)
      }
    };


    const handleSubmitClick = () => {
  
      // event.preventDefault(); // Prevent the default form submission

      const inputElement = formRef.current.querySelector("input[type='email']");
      const inputValue = inputElement.value;

      const data = {
        "contacts": [
          {
            "email": inputValue,
          }
        ]
      };

      // Perform your desired actions here

        //TAKE EMAIL CONTACT TO SENDGRID
      

        axios.put('https://api.sendgrid.com/v3/marketing/contacts', data, {
          headers: {
              //copy header token here with authorization word
          }
        })
        .then(response => {
          console.log(response.status);
          console.log(response.data);
        })
        .catch(error => {
          console.error("error: ", error.response);
        });
    };

    if (inputElement) {
      inputElement.addEventListener("input", handleInputChange);
    }

    if (submitElement) {
      submitElement.addEventListener("click", handleSubmitClick);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("input", handleInputChange);
      }
      if (submitElement) {
        submitElement.removeEventListener("click", handleSubmitClick);
      }
    };
  }, []);

  return (
    <>
    {typeof pageHomeData === "undefined" ? <Loading /> :

    
    <FormContainer>
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>

      <ContainerIconText>
        <Icon>
            <EnvelopeIcon />
        </Icon>
        <p>Be the first to get updates about Jerusalem real estate deals &#38; great off market opportunities. We keep your data in privacy.</p>
      </ContainerIconText>
      <Form ref={formRef}>
        <Html2react html={pageHomeData.content.rendered} />
        <CloseButton onClick={handleClose}>X</CloseButton>
      </Form>
     
    </FormContainer>

    }

    </>
  );
};

export default connect(SubscribeForm);

const FormContainer = styled.div`
  position: fixed;
  transform: translateX(15%);
  z-index: 1100;
  background-color: #1c2641;
  max-width: min(70%,350px);
  left: 0;
  padding: 1rem;
  bottom: 15px;
  box-shadow: 2px 4px 9px 5px rgb(0 0 0 / 40%);
  color: #fff;
  font-family: 'Lato', sans-serif;

    @media (max-width: 768px){
        transform: translate(0);
    }

  h3 {
    font-size: var(--step--1);
    text-align: center;
    line-height: 2;
    border-bottom: 2px solid var(--golden-color);
    margin-top: 0;
  }

  p {
    font-size: var(--step--2);
    line-height: 1.5;
    font-weight: 100;

  }


`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1c2641;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 3px 3px 0px;

  .wp-block-group {
    display: flex;
    object-fit: fill;
  }

  .wpcf7-form {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        object-fit: cover;

        p {
          margin: 0;
          padding: 0;

          &:nth-of-type(1){
            flex-basis: 70%;
          }


          &:nth-of-type(2){
            flex-basis: 30%;
          }
     

          input[type="email"] {
            padding: 10px;
            border: none;
            width: 90%;
            /* margin-right: 2px; */
            font-size: 14px;
         
            font-family: 'Lato', sans-serif;
            margin: 0;
          }

          input[type="submit"] { 
            background-color: var(--golden-color);
            color: #fff;
            border: none;
            border-radius: 0 3px 3px 0px;
            padding: 10px 40px;
            font-size: 14px;
      
            text-transform: uppercase;
            cursor: pointer;
            flex-grow: 1;
            font-family: 'Lato', sans-serif;
            margin: 0;
          }


    input{

        &:focus {
           outline: none;
        } 
    }

        }


  }


`;

const Input = styled.input`
  padding: 10px;
  flex-grow: 1;
  border: none;

  /* margin-right: 2px; */
  font-size: 14px;
  max-width: 100%;
  font-family: 'Lato', sans-serif;

  /* margin-bottom: 1rem; */
`;

const Button = styled.button`
  background-color: var(--golden-color);
  color: #fff;
  border: none;
  border-radius: 0 3px 3px 0px;
  padding: 10px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  /* flex-grow: 1; */
  font-family: 'Lato', sans-serif;
  margin-left: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    color: var(--golden-icons)
  }
`;

const ContainerIconText = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

const Icon = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  z-index: 1100;
  margin-right: 1rem;
`;


const EnvelopeIcon = styled(HiOutlineEnvelopeOpen)`
  color: var(--golden-color);
  font-size: var(--step-4);
  vertical-align: middle;
  font-weight: 100;
`