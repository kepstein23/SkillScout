import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Popover from './Popover';
import '../App.css'

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px 14px 18px;
  gap: 10px;
  min-width: 49px;
  height: 49px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-family: var(--font-family);
`;

const PrimaryButton = styled(ButtonContainer)`
  background-color: var(--primary);
  color: white;
`;

const SecondaryButton = styled(ButtonContainer)`
  background-color: var(gray);
  color: var(--dark-gray);
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = ({ type = 'primary', icon: IconComponent, text, onClick }) => {
    // const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const ButtonComponent = type === 'secondary' ? SecondaryButton : PrimaryButton;

    // const handleClick = () => {
    //     if (showPopover) {
    //         setIsPopoverVisible(!isPopoverVisible);
    //     }
    // };

    return (
        <ButtonWrapper>
            <ButtonComponent onClick={onClick}>
                {IconComponent && <IconComponent />}
                {text && <p className='no-margin no-wrap'>{text}</p>}
            </ButtonComponent>
            {/* {isPopoverVisible && (<Popover />)} */}
        </ButtonWrapper>
    );
};

export default Button;