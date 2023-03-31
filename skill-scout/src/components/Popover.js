import React from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
import Button from './Button';

const PopoverContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  margin-top: 4px;
  border: 1px solid var(--light-gray));
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 250px;
  transform: translateX(-25%);
`;

const Title = styled.h3`
  margin-top: 0;
`;

const PopoverContent = styled.div`
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Popover = ({ onClose, onSubmit }) => {
    const title = `New request`;


    return (
        <PopoverContainer>
            <Title>{title}</Title>
            <PopoverContent>
                <TextInput type="text" placeholder="Enter text here" />
            </PopoverContent>
            <ButtonsWrapper>
                <Button type="secondary" text="Close" onClick={onClose} />
                <Button type="primary" text="Submit" onClick={onSubmit} />
            </ButtonsWrapper>
        </PopoverContainer>
    );
};

export default Popover;
