import React, { useState } from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import { MdSearch } from 'react-icons/md';
import SearchBarHomeMobile from './SearchBarHomeMobile';

const SearchInput = ({handleResults, setSearchTerm, setArrResult}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      {isOpen ? <SearchBarHomeMobile handleResults= {handleResults} setSearchTerm={setSearchTerm} setArrResult={setArrResult}  handleOpenCloseSearch={handleOpenCloseSearch}/>
        : 
        <SearchContainer  onClick={handleOpenCloseSearch}>
        <SearchIcon>
          <MdSearch size={24} />
        </SearchIcon>
        <Input type="text" placeholder="Search..." />
      </SearchContainer>
      }
    </>
  );
};

const SearchContainer = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  background-color: var(--main-color);
  border-radius: 4px;
  padding: 8px 1rem;
  border: 1px solid var(--golden-color);
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #888;
  color: var(--golden-color);
  margin-right: 8px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex-grow: 1;
  font-size: 16px;
  color: #333;
  color: var(--golden-color);


  &::placeholder {
    color: var(--white-color);
  }
`;

export default SearchInput;
