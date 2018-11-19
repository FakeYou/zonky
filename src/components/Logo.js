import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ms from 'milliseconds';

const SPEED = ms.seconds(10);

const Image = styled.img`
	height: 100px;
	width: 300px;
	overflow: visible;
	object-fit: cover;
`;

const Logo = ({ className }) => {
	const [logo, setLogo] = useState(1);
	const timeoutRef = useRef();

	useEffect(
		() => {
			timeoutRef.current = setTimeout(() => {
				setLogo((logo % 16) + 1);
			}, SPEED);

			return () => clearTimeout(timeoutRef.current);
		},
		[logo]
	);

	return (
		<Image
			className={className}
			src={`https://zonky.cz/images/nav-logo/svgs/zonky_cz_${logo}.svg`}
		/>
	);
};

Logo.propTypes = {
	className: PropTypes.string
};

Logo.defaultProps = {
	className: null
};

export default styled(Logo)``;
