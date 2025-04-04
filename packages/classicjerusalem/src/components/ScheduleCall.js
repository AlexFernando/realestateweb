import React, { useState, useRef } from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import emailjs from '@emailjs/browser';

//react date time Picker
import DateTimePicker from 'react-datetime-picker';
//styles dateTimePicker 
import DateTimePickerStyles from 'react-datetime-picker/dist/DateTimePicker.css';
import CalendarCss from 'react-calendar/dist/Calendar.css';
import ClockCss from 'react-clock/dist/Clock.css';
import CustomStyles from '../styles/style.css'

const ScheduleCall = ({state, actions, libraries, propertyName, propertyCode, setSuccessFirstForm}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  // const [numOfPeople, setNumOfPeople] = useState('');
  const [arrivalDate, setArrivalDate] = useState(null);
//   const [checkoutDate, setCheckoutDate] = useState(null);
  const [errors, setErrors] = useState({});

  //state for handling success or error server 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ctx7au', 'template_lztb3pw', form.current, 'q9LuBvcYELpbrizSY')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage('Email sent successfully.');
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
          setName('')
          setLastName('')
          setPhoneNumber('')
          setEmail('')
          setArrivalDate('')
          setSuccessFirstForm(true)
          setTimeout(() => {
            setSuccessFirstForm(false)
          }, 15000)
      }, (error) => {
          console.log(error.text);
          setErrorMessage('An error occurred while sending the email. Try again please.');
          setTimeout(() => {
            setErrorMessage('');
          }, 5000);
      });
  };


  const validateForm = () => {
    let formErrors = {};

    const currentDate = new Date();
    if (!name.trim()) {
        formErrors.name = 'Please enter your name.';
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        formErrors.name = 'Please enter a valid name.';
    }
    
    if (!lastName.trim()) {
        formErrors.lastName = 'Please enter your last name.';
      } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
        formErrors.lastName = 'Please enter a valid last name.';
    }

    if (!phoneNumber.trim()) {
        formErrors.phoneNumber = 'Please enter your phone number.';
      } else if (!/^\+?\d{1,3}\s?\d{1,14}$/.test(phoneNumber)) {
        formErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (!email.trim()) {
      formErrors.email = 'Please enter your email address.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      formErrors.email = 'Please enter a valid email address.';
    }

    if (!arrivalDate) {
        formErrors.arrivalDate = 'Please select the arrival date.';
      } else if (arrivalDate < currentDate) {
        formErrors.arrivalDate = 'Please select a future arrival date.';
      } 

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Reset errors
    setErrors({});

    // Perform form submission or further processing
    // No form errors, call sendEmail handler
    sendEmail(e);
  };

  return (
    <FormContainer>
            <Global styles={DateTimePickerStyles} />
                <Global styles={CalendarCss} />
                <Global styles={ClockCss}/>
                <Global styles= {CustomStyles} />
      <form ref={form} onSubmit={handleSubmit}>
        <Label>

          <Input
            type="text"
            value={name}
            name="user_name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <Error>{errors.name}</Error>}
        </Label>

        <Label>
          <Input
            type="text"
            value={lastName}
            name="last_name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <Error>{errors.lastName}</Error>}
        </Label>

        <Label>
          <Input
            type="text"
            value={phoneNumber}
            name="phone_number"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
        </Label>

        <Label>
          <Input
            type="email"
            value={email}
            name="user_email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <Error>{errors.email}</Error>}
        </Label>

        <Label>  
            <Input
            type="text"
            value= {`${propertyCode}-${propertyName}`}
            name="property_info"
            readOnly
            />
        </Label>



        <Label>
          Day/Time Meeting:
          <br />
          <DateTimePicker
            value={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            format="yyyy-MM-dd HH:mm"
            name="arrival_date"
            required
          />
          {errors.arrivalDate && <Error>{errors.arrivalDate}</Error>}
        </Label>


        <Button type="submit" value="Send">Schedule a Visit</Button>

        {successMessage && <div>{successMessage}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </FormContainer>
  );
};


export default connect(ScheduleCall);



const FormContainer = styled.div`
  width: min(500px, 95%);
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #191919;
  width: 100%;
`;

const Input = styled.input`
  width: min(500px, 90%);
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 10px;

  background-color: transparent;
  outline: none;    
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  border-bottom: 1px solid var(--golden-color); 
  font-family:inherit;
  font-size: 1rem;
  padding: 1rem;

  &::placeholder {
      font-family: 'Lato', sans-serif;
      text-transform: uppercase;
      font-weight: 300;
      color: #333232;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

const Button = styled.button`
  /* background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  } */


  /*addtional styles */
  width: 100%;
  background-color: var(--golden-color);
  height: 48px;  
  padding: 1.5rem;
  text-transform: none;
  border: 1px solid #fff;
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
  color: #FFF;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  padding: 2px 24px;
  position: relative;

  @media(max-width: 768px) {
      width: 100%;
        
  }

  &:hover {
      background-color: #bf930d;
      transition: all 0.4s;
  }
`;