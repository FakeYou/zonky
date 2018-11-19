import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Title from './Title';
import Summary from './Summary';
import Progress from './Progress';
import Deadline from './Deadline';
import Amount from './Amount';
import Body from './Body';

const Container = styled.section`
	background-color: #fff;
	border-radius: 0.3rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
`;

const HeaderImage = styled.img`
	background-color: #dde;
	object-fit: cover;
	height: 220px;
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 1rem;

	${Title} {
		margin: 0.2rem 0 0.4rem 0;
	}

	${Summary} {
		margin: 0.8rem 0 0 0;
		flex: 1;
	}

	${Progress} {
		margin: 0.8rem 0 0 0;
	}
`;

const Footer = styled.div`
	background-color: #f6f6f6;
	border-top: 1px solid #f0f0f0;
	padding: 1rem;
	position: relative;
	display: flex;
	flex-direction: column;

	.details {
		align-items: space-between;
		display: flex;
		font-size: 0.9rem;
		text-align: center;
		justify-content: space-between;

		${Deadline} {
			font-size: 0.8rem;
		}

		& > * {
			flex: 1;
		}
	}
`;

const Loan = ({
	id,
	name,
	story,
	amount,
	rating,
	deadline,
	termInMonths,
	investmentRate,
	photos
}) => (
	<Container>
		<HeaderImage src={`https://api.zonky.cz/${photos[0].url}`} />
		<Content>
			<Title>
				<Link to={`/loans/${id}`}>{name}</Link>
			</Title>
			<Amount amount={amount} />
			<Summary>{story}</Summary>
			<Progress percentage={Math.round(investmentRate * 100)} />
		</Content>
		<Footer>
			<div className="details">
				<Body>{termInMonths} Months</Body>
				<Body>{rating}</Body>
				<Deadline deadline={deadline} />
			</div>
		</Footer>
	</Container>
);

Loan.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	story: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	deadline: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)])
		.isRequired,
	termInMonths: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	investmentRate: PropTypes.number.isRequired,
	photos: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired
		})
	).isRequired
};

Loan.defaultProps = {};

export default Loan;
