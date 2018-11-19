import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import truncateWords from 'truncate-words';

const MAX_WORDS = 20;
const MAX_CHARACTERS = 200;

const Paragraph = styled.p`
	color: ${props => props.theme.color.body};
	font-family: ${props => props.theme.font.body};
	line-height: 130%;
	margin: 0;
`;

const Summary = ({ children, className }) => {
	let summary = truncateWords(children, MAX_WORDS, '...');

	if (summary.length > MAX_CHARACTERS) {
		summary = summary.substr(0, MAX_CHARACTERS - 3) + '...';
	}

	return <Paragraph className={className}>{summary}</Paragraph>;
};

Summary.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string
};

Summary.defaultProps = {
	className: null
};

export default styled(Summary)``;
