import React, { useState, useRef } from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import {IoLogoWhatsapp} from 'react-icons/io'
import Image from "@frontity/components/image";
import ReservationForm from './MyFormReservation'
import ScheduleCall from './ScheduleCall'
import SamuelAgent from '../images/real-state-agent-v1.jpeg'
import SuccessComponentSubmission from './SuccessComponentSubmission';

const FormsDetails = ({state, actions, libraries, propertyName, propertyCode, category}) => {

    const [stateForm, setStateForm] = useState('Book')

    /**Item Switch color */
    const [activeItem, setActiveItem] = useState(0);

    /**Handle success Message */
    const [successFirstForm , setSuccessFirstForm] = useState(false);

    const handleItemClick = itemIndex => {
      setActiveItem(itemIndex);

      if(itemIndex === 0) {
        setStateForm('Book')
      }
      else {
        setStateForm('Schedule')
      }
    };
    
    /**End Item Switch color */

    return(
        
        <ContentForm>
            
            {
                successFirstForm? <SuccessComponentSubmission />

                : 
                

                category.length === 1 && (category.includes(3) || category.includes(7))  ? 

                <>
                         
                    <h3>Schedule a Call</h3>

                    
                    <ScheduleCall propertyName = {propertyName} propertyCode = {propertyCode} setSuccessFirstForm={setSuccessFirstForm}  />
                    
                    <h3>Phone Call</h3>

                    <AgentContact>
                        <StyledImage src={SamuelAgent} />
                        <div>
                            <h4>
                                Samuel Cohen
                            </h4>

                            <ul>
                                <li>
                                    <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                                    <IoLogoWhatsapp /> <span>+972586540969</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </AgentContact>
                </>
                

                :category.length === 2 && category.includes(3) && category.includes(7)  ? 

                <>
                    <h3>Schedule a Call</h3>

                    <ScheduleCall propertyName = {propertyName} propertyCode = {propertyCode} setSuccessFirstForm={setSuccessFirstForm}  />
                    
                    <h3>Phone Call</h3>

                    <AgentContact>
                        <StyledImage src={SamuelAgent} />
                        <div>
                            <h4>
                                Samuel Cohen
                            </h4>

                            <ul>
                                <li>
                                    <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                                    <IoLogoWhatsapp /> <span>+972586540969</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </AgentContact>
                </>


                :
                    
                    <>
                        <ListContainer>
                            <ListItem active={activeItem === 0} onClick={() => handleItemClick(0)}>Book this Aparment </ListItem>
                            <ListItem active={activeItem === 1} onClick={() => handleItemClick(1)}>Schedule a Visit</ListItem>
                        </ListContainer>

                        {
                            stateForm === 'Book'? <ReservationForm propertyName = {propertyName} propertyCode = {propertyCode} setSuccessFirstForm={setSuccessFirstForm} category={category}/>
                            : <ScheduleCall propertyName = {propertyName} propertyCode = {propertyCode} setSuccessFirstForm={setSuccessFirstForm} />
                        }
            
                        <h3>Phone Call</h3>

                        <AgentContact>
                            <StyledImage src={SamuelAgent} />
                            <div>
                                <h4>
                                    Samuel Cohen
                                </h4>

                                <ul>
                                    <li>
                                        <a href="https://wa.me/+972586540969" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                                        <IoLogoWhatsapp /> <span>+972586540969</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </AgentContact>
                    </>                
            }
        </ContentForm>
    )
}

/**Contact Form Styles */
const ContentForm = styled.div`


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    line-height: 1.2;
    background-color: #fff;
    /* padding: 1rem; */


    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        /* padding: 1rem; */
    }

    h3 {
        padding: 0 1rem;
    }
`

/**Button for switching forms */
const ListContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    margin-bottom: 1rem;
`

const ListItem = styled.li`
    font-size: 1rem;
    cursor: pointer;
    border-color: var(--main-color);
    padding: 1rem 2rem;
    /* max-width: 100%; */
    flex-grow: 1;
    position: relative;
    /* border-radius: 5px; */
    color: ${props => (props.active ? "#000" : "#fff")};
    background-color: ${props => (props.active ? "#fff" : "#cdcccc")};
    /* -webkit-box-shadow: ${props => (props.active ? "8px 5px 37px -8px rgba(98,96,96,0.6);" : 'unset')}; 
    -moz-box-shadow: ${props => (props.active ? "8px 5px 37px -8px rgba(98,96,96,0.6);" : 'unset')}; 
    box-shadow: ${props => (props.active ? "8px 5px 37px -8px rgba(98,96,96,0.6);" : 'unset')};  */
    /* border-bottom: ${props => (props.active ? "1px solid var(--golden-color)" : 'unset')}; 
    border-right: ${props => (props.active ? "1px solid var(--golden-color)" : 'unset')};  */
    margin: 0;
`
/**End styling buttons for switching forms */

const AgentContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    padding: 1rem;

    div{
        margin-left: 1rem;

        h4{
            text-transform: uppercase;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li{
                text-decoration: none;

                a {
                    text-decoration: none;
                    color: var(--main-color);
                }
            }
        }
    }
`

const StyledImage = styled(Image)`
    display: block;
    width: 150px;
    height: 150px;
    object-fit: contain;
`

export default connect(FormsDetails);