import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	animation: ${rotate} 0.5s linear infinite;
	border: 4px solid rgba(0, 0, 0, 0.12);
	border-top-color: ${props => props.theme.color.primary};
	border-radius: 100%;
	height: 12px;
	width: 12px;
`;

export default Spinner;
