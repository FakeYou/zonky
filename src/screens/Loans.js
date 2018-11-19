import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';

import LoanCard from '../components/LoanCard';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import Button from '../components/Button';
import { useLoans } from '../hooks/loans';

const Container = styled.div`
	${Spinner} {
		margin: 0 auto;
	}
`;

const Grid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
	grid-gap: 1rem;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 1rem;

	${Button} {
		margin: 0 0.4rem;
	}
`;

const LoansScreen = () => {
	const { loans, isLoading, error } = useLoans();
	const [sorting, setSorting] = useState({ key: 'datePublished', direction: 'asc' });

	function sortLoans(key) {
		let direction = 'asc';

		if (sorting.key === key) {
			direction = sorting.direction === 'asc' ? 'desc' : 'asc';
		}

		setSorting({ key, direction });
	}

	return (
		<Container>
			{isLoading && loans.length === 0 ? (
				<Spinner />
			) : !!error ? (
				<Error>{error}</Error>
			) : (
				<Fragment>
					<Buttons>
						<Button onClick={() => sortLoans('datePublished')}>
							Time remaining {sortArrow('datePublished', sorting)}
						</Button>
						<Button onClick={() => sortLoans('termInMonths')}>
							Duration {sortArrow('termInMonths', sorting)}
						</Button>
						<Button onClick={() => sortLoans('rating')}>
							Rating {sortArrow('rating', sorting)}
						</Button>
						<Button onClick={() => sortLoans('amount')}>
							Amount {sortArrow('amount', sorting)}
						</Button>
					</Buttons>
					<Grid>
						{orderBy(loans, [sorting.key], [sorting.direction]).map(loan => (
							<LoanCard key={loan.id} {...loan} />
						))}
					</Grid>
				</Fragment>
			)}
		</Container>
	);
};

const sortArrow = (key, sorting) => {
	if (sorting.key === key) {
		return sorting.direction === 'asc' ? '↑' : '↓';
	}

	return '';
};

export default LoansScreen;
