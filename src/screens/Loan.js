import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useLoan } from '../hooks/loans';
import Title from '../components/Title';
import Error from '../components/Error';
import LabelItem from '../components/LabelItem';
import Amount from '../components/Amount';
import Progress from '../components/Progress';
import Deadline from '../components/Deadline';
import Spinner from '../components/Spinner';

const Screen = styled.div`
	${Spinner} {
		margin: 0 auto;
	}
`;

const BackButton = styled(Link)`
	display: inline-block;
	margin-bottom: 1rem;
	text-decoration: none;
	padding: 0.4rem;
	color: ${props => props.theme.color.primary};

	&:hover {
		color: ${props => props.theme.color.secondary};
	}
`;

const Container = styled.div`
	background-color: #fff;
	border-radius: 0.3rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
	overflow: hidden;
	display: grid;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: min-content 1fr min-content;
	grid-template-areas:
		'header header header'
		'image content content'
		'. footer footer';

	@media (max-width: 640px) {
		grid-template-columns: 100%;
		grid-template-rows: min-content min-content 1fr;
		grid-template-areas:
			'header'
			'image'
			'content';
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fbfbfc;
	border-bottom: 1px solid #f0f0f0;
	grid-area: header;
	padding: 1rem;

	@media (max-width: 640px) {
		flex-direction: column;

		${LabelItem} {
			margin-bottom: 0.8rem;
		}
	}
`;

const Image = styled.img`
	grid-area: image;
	margin: 0.5rem;

	@media (max-width: 640px) {
		width: 100%;
		object-fit: cover;
		margin: 0;
	}
`;

const Content = styled.div`
	grid-area: content;
	padding: 1rem 1rem 1rem 2rem;

	${LabelItem} {
		margin-top: 1rem;
	}
`;

const Footer = styled.div`
	grid-area: footer;
	padding: 1rem 1rem 1rem 2rem;
`;

const LoanScreen = ({ match }) => {
	const id = parseInt(match.params.id, 10);
	const { loan, isLoading, error } = useLoan(id);

	return (
		<Screen>
			<BackButton to="/">← Back</BackButton>
			{isLoading ? (
				<Spinner />
			) : !!error ? (
				<Error>{error}</Error>
			) : (
				<Container>
					<Header>
						<LabelItem label="Amount">
							<Amount amount={loan.amount} />
							<Progress percentage={Math.round(loan.investmentRate * 100)} small />
						</LabelItem>
						<LabelItem label="Deadline">
							<Deadline deadline={loan.deadline} />
						</LabelItem>
						<LabelItem label="Investors">{loan.investmentsCount}</LabelItem>
						<LabelItem label="Interest">{(loan.interestRate * 100).toFixed(2)}%</LabelItem>
						<LabelItem label="Duration">{loan.termInMonths} months</LabelItem>
						<LabelItem label="Rating">{loan.rating}</LabelItem>
					</Header>
					<Image src={`https://api.zonky.cz/${loan.photos[0].url}`} />
					<Content>
						<Title>{loan.name}</Title>
						<em>by {loan.nickName}</em>
						<p>{loan.story}</p>

						<LabelItem label="Discussion">{loan.questionsCount} questions</LabelItem>
						<LabelItem label="Covered by insurance">
							{loan.insuranceActive ? 'Yes' : 'No'}
						</LabelItem>
						<LabelItem label="Fastcash">{loan.fashcash ? 'Yes' : 'No'}</LabelItem>
					</Content>
					<Footer />
				</Container>
			)}
		</Screen>
	);
};

export default LoanScreen;
