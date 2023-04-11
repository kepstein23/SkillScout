import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 400px;
  background-color: #eee;
`;

const SearchBar = ({onSearch, id, style}) => {
  const inputRef = useRef(null);
  
  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  return (
    <StyledInput id={id || ''} style={style}type="text" ref={inputRef} onChange={handleSearch} placeholder="Search..."/>
  );
};

export default SearchBar;