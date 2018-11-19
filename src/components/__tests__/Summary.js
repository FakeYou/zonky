import React from 'react';
import { renderWithTheme } from 'test-utils';

import Summary from '../Summary';

describe('<Summary />', () => {
	test('renders text in a p tag', () => {
		const { container } = renderWithTheme(<Summary>Hello world</Summary>);

		expect(container.firstChild.nodeName).toBe('P');
	});

	test('shows short test without modification', () => {
		const { container } = renderWithTheme(
			<Summary>Ut quia quisquam et expedita impedit sit rem nobis.</Summary>
		);

		expect(container.firstChild.innerHTML).toBe(
			'Ut quia quisquam et expedita impedit sit rem nobis.'
		);
	});

	test('shows a maximum of 20 words', () => {
		const { container } = renderWithTheme(
			<Summary>
				Inventore et voluptatem dolore dolorem in assumenda veniam atque. Nemo laboriosam temporibus
				deleniti commodi consequatur. Maiores sit architecto repellendus exercitationem sed ex
				quisquam deleniti in.
			</Summary>
		);

		expect(container.firstChild.innerHTML).toBe(
			'Inventore et voluptatem dolore dolorem in assumenda veniam atque. Nemo laboriosam temporibus deleniti commodi consequatur. Maiores sit architecto repellendus exercitationem...'
		);
	});

	test('shows a maximum of 200 characters', () => {
		const { container } = renderWithTheme(
			<Summary>
				Inventore voluptatem repellendusrem dolorem assumenda. Laboriosam temporibus deleniti
				commodion consequatur. Maiores architecto repellendus exercitationem sed ex quisquam,
				deleniti Inventore voluptatem dolore dolorem assumenda.
			</Summary>
		);

		expect(container.firstChild.innerHTML).toBe(
			'Inventore voluptatem repellendusrem dolorem assumenda. Laboriosam temporibus deleniti commodion consequatur. Maiores architecto repellendus exercitationem sed ex quisquam, deleniti Inventore volupt...'
		);
	});
});
