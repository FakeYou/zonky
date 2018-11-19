import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #dde;
	border-radius: 0.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	height: ${props => (props.small ? 5 : 22)}px;
`;

const Fill = styled.div`
	background-color: ${props =>
		props.percentage === 100 ? props.theme.color.success : props.theme.color.primary};
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: ${props => props.percentage}%;
`;

const Text = styled.span`
	font-family: ${props => props.theme.font.body};
	font-size: 0.9rem;
	color: #000;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
`;

const Progress = ({ percentage, small, className }) => (
	<Container className={className} small={small}>
		<Fill percentage={percentage} />
		{!small && <Text>{percentage}%</Text>}
	</Container>
);

Progress.propTypes = {
	percentage: PropTypes.number.isRequired,
	small: PropTypes.bool,
	className: PropTypes.string
};

Progress.defaultProps = {
	small: false,
	className: null
};

export default styled(Progress)``;
