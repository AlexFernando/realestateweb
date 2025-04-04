import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import SearchBarBgRent from './SearchBarBgRent';
import SearchBarBgSell from './SearchBarBgSell';
import LoadingSearchBar from './Loader3'

const SearchBarSell = ({state, actions, libraries, handleResults, setSearchTerm, setArrResult}) => {

    const [stateProperty, setStateProperty] = useState('RentSearch')
    const [isLoading, setIsLoading] = useState(false);

    /**Item Switch color */
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = itemIndex => {
      setActiveItem(itemIndex);
      setIsLoading(true);

    // Simulate a delay to show the loading state
    setTimeout(() => {
      setStateProperty(stateProperty === 'RentSearch' ? 'SellSearch' : 'RentSearch');
      setIsLoading(false);
    }, 250);
    };
    

    return ( 
        <MarginTop>
            <ButtonSearchContainer>
                <ButtonToggleColor active={activeItem === 0} onClick={() => handleItemClick(0)}>Rent</ButtonToggleColor>
                <ButtonToggleColor active={activeItem === 1} onClick={() => handleItemClick(1)}>Buy</ButtonToggleColor>
            </ButtonSearchContainer>

            {isLoading ? (
                <LoadingSearchBar />
            ) : (
                <>
                {stateProperty === 'RentSearch' ? <SearchBarBgRent handleResults= {handleResults} setSearchTerm={setSearchTerm} setArrResult={setArrResult} /> 
                
                : <SearchBarBgSell handleResults= {handleResults} setSearchTerm={setSearchTerm} setArrResult={setArrResult}/>}
                </>
            )}

        </MarginTop>
    );
}



const MarginTop = styled.div`
    margin-bottom: .5rem;
    padding: 0 .5rem;
`

const ButtonSearchContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
    text-align: center;
    margin-bottom: 1rem;
`

const ButtonToggleColor = styled.li`
    font-size: 1rem;
    cursor: pointer;

    /* text-decoration: none; */
    /* background-color: var(--golden-color); */
    border-color: var(--main-color);
    color: #fff;
    padding: 1rem 2rem;
    position: relative;
    border-radius: 5px;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: ${props => (props.active ? "#cba631" : "#1c2641")};

    &:before {

        background-color: ${props => (props.active ? "#cba631" : "#1c2641")};
        content: ${props => (props.active ? "''" : "none")};
        height: 20px;
        margin-left: 5px;
        position: absolute;
        top: 35px;
        width: 20px;
        transform: rotate(45deg);
    }
`
export default connect(SearchBarSell);

// display: ${props => {props.active ? "flex" : "none"}} ;