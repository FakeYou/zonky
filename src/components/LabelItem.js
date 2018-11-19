import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display: inline-block;
	display: flex;
	flex-direction: column;
`;

const Label = styled.span`
	font-family: ${props => props.theme.font.body};
	font-size: 0.9rem;
	color: ${props => props.theme.color.gray};
`;

const Item = styled.div`
	display: inline-block;
	font-family: ${props => props.theme.font.body};
	font-size: 1.3rem;
	color: ${props => props.theme.color.body};
`;

const LabelItem = ({ children, label, className }) => (
	<Container className={className}>
		<Label>{label}</Label>
		<Item>{children}</Item>
	</Container>
);

LabelItem.propTypes = {
	children: PropTypes.any.isRequired,
	label: PropTypes.string.isRequired,
	className: PropTypes.string
};

LabelItem.defaultProps = {
	className: null
};

export default styled(LabelItem)``;
