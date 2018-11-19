import styled from 'styled-components';

const Title = styled.h1`
	font-family: ${props => props.theme.font.title};
	color: ${props => props.theme.color.primary};
	margin: 0;

	a {
		display: block;
		text-decoration: none;
		color: inherit;

		&:hover {
			color: ${props => props.theme.color.secondary};
		}
	}
`;

export default Title;
