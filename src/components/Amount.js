import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
	color: ${props => props.theme.color.primary};
	font-family: ${props => props.theme.font.body};
`;

const Amount = ({ amount }) => (
	<Span>{amount.toLocaleString('cs-CZ', { style: 'currency', currency: 'CZK' })}</Span>
);

Amount.propTypes = {
	amount: PropTypes.number
};

Amount.defaultProps = {
	amount: 0
};

export default Amount;
