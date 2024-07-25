import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/imgs/Logo.svg?react';
import { useNavigate } from 'react-router-dom';

const LogoButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate('/');
      }}
    >
      <Logo></Logo>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;

  width: 5.375rem;
  height: 5rem;
  margin-left: 2.5rem;
  flex-shrink: 0;

  background: transparent;
`;

export default LogoButton;
