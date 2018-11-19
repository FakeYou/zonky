import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
	color: ${props => props.theme.color.danger};
	font-family: ${props => props.theme.font.body};
	text-align: center;
`;

export default Error;
