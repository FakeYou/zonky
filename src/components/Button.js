import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #fff;
	border: 1px solid #e7e7e7;
	border-radius: 2px;
	cursor: pointer;
	font-family: ${props => props.theme.font.body};
	font-size: 1rem;
	padding: 0.4rem 0.8rem;

	&:hover {
		color: ${props => props.theme.color.primary};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
	}
`;

export default Button;
