import styled from 'styled-components';

const Body = styled.span`
	color: ${props => props.theme.color.primary};
	font-family: ${props => props.theme.font.body};
`;

export default Body;
