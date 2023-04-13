import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 200px;
  background-color: #eee;
`;

const LoginInput = ({id, style, type, placeholder}) => {

  return (
    <StyledInput id={id || ''} style={style} type={type} placeholder={placeholder}/>
  );
};

export default LoginInput;