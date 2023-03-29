import React from 'react';
import styled from 'styled-components';

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
  font-weight: bold;
  cursor: pointer;
`;

const PrimaryButton = styled(ButtonContainer)`
  background-color: var(--primary);
  color: white;
`;

const SecondaryButton = styled(ButtonContainer)`
  background-color: var(gray);
  color: var(--dark-gray);
`;

const Button = ({ type = 'primary', icon: IconComponent, text }) => {
    const ButtonComponent = type === 'secondary' ? SecondaryButton : PrimaryButton;

    return (
        <ButtonComponent>
            {IconComponent && <IconComponent />}
            {text && <span>{text}</span>}
        </ButtonComponent>
    );
};

export default Button;