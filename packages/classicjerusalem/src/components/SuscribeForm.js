import React from "react";
import { connect, styled, css} from "frontity";
import {BsTelephoneForward, BsEnvelopeOpen, BsTelephoneOutbound} from 'react-icons/bs'
import {HiOutlineEnvelopeOpen} from 'react-icons/hi2'

const SubscribeForm = ({ handleClose }) => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // handle subscription logic
  };

  return (
    <FormContainer>
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>

      <ContainerIconText>
        <Icon>
            <EnvelopeIcon />
        </Icon>
        <p>Be the first to get updates about Jerusalem real estate deals &#38; great off market opportunities. We keep your data in privacy.</p>
      </ContainerIconText>
      <Form onSubmit={handleSubscribe}>
        <Input type="email" placeholder="Enter your email" required />
        <Button type="submit">Subscribe</Button>
        <CloseButton onClick={handleClose}>X</CloseButton>
      </Form>
     
    </FormContainer>
  );
};

export default SubscribeForm;

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

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 3px 3px 0px;
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