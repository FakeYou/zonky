import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ms from 'milliseconds';
import Duration from 'duration';
import isDate from 'lodash/isDate';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import isPast from 'date-fns/is_past';

const Span = styled.span`
	font-family: ${props => props.theme.font.mono};
`;

const Deadline = ({ deadline, className }) => {
	const [remaining, setRemaining] = useState(calcRemaining(deadline));
	const timeoutRef = useRef(null);

	useEffect(
		() => {
			timeoutRef.current = setTimeout(() => {
				setRemaining(calcRemaining(deadline));
			}, ms.seconds(1));

			return () => clearTimeout(timeoutRef.current);
		},
		[deadline, remaining]
	);

	return <Span className={className}>{remaining}</Span>;
};

Deadline.propTypes = {
	deadline: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	className: PropTypes.string
};

Deadline.defaultProps = {
	deadline: 0,
	className: null
};

const calcRemaining = deadline => {
	if (isPast(deadline)) {
		return '00:00:00';
	}
	else if (isDate(deadline)) {
		return Duration(new Date(), deadline).toString('%H:%M:%S');
	}
	else if (isNumber(deadline) || isString(deadline)) {
		return Duration(new Date(), new Date(deadline)).toString('%H:%M:%S');
	}

	return '00:00:00';
};

export default styled(Deadline)``;
