import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import FilterSelect from './FilterSelect';

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
  z-index: 1;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const PopoverContent = styled.div`
  margin-bottom: 10px;
`;

const TextInput = styled.textarea`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-family: inherit;
    min-height: 100px; // Set a minimum height as per your preference
    resize: vertical; // Allow vertical resizing
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Popover = ({ onClose, onSubmit }) => {
    const title = `New request`;

    const skills = ['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma'];

    return (
        <PopoverContainer>
            <Title>{title}</Title>
            <PopoverContent>
                <TextInput type="text" placeholder="Description of request" />
                <p className='bold'>Skills you're requesting</p>
                <FilterSelect options={skills} placeholder="Select skills" />
            </PopoverContent>
            <ButtonsWrapper>
                <Button type="secondary" text="Cancel" onClick={onClose} />
                <Button type="primary" text="Send request" onClick={onSubmit} />
            </ButtonsWrapper>
        </PopoverContainer>
    );
};

export default Popover;
