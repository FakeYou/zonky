import React from 'react';
import cases from 'jest-in-case';
import { renderWithTheme } from '../../utils/test-utils';

import Amount from '../Amount';

describe('<Amount />', () => {
	test('renders text in a span tag', () => {
		const { container } = renderWithTheme(<Amount amount={0} />);

		expect(container.querySelector('span').nodeName).toBe('SPAN');
	});

	test('defaults to 0', () => {
		const { container } = renderWithTheme(<Amount />);

		expect(container.querySelector('span')).toHaveTextContent('0,00 Kč');
	});

	cases(
		'renders in czech locale',
		({ amount, expected }) => {
			const { container } = renderWithTheme(<Amount amount={amount} />);

			expect(container.querySelector('span')).toHaveTextContent(expected);
		},
		[
			{ name: '0 as 0,00 Kč', amount: 0, expected: '0,00 Kč' },
			{ name: '0.49 as 0,49 Kč', amount: 0.49, expected: '0,49 Kč' },
			{ name: '11 as 11,00 Kč', amount: 11, expected: '11,00 Kč' },
			{ name: '12331 as 12 331,00 Kč', amount: 12331, expected: '12 331,00 Kč' },
			{ name: '-2838 as -2 838,00 Kč', amount: -2838, expected: '-2 838,00 Kč' }
		]
	);
});
