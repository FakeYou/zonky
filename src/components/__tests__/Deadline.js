import React from 'react';
import { renderWithTheme } from 'test-utils';
import { advanceTo, clear } from 'jest-date-mock';
import ms from 'milliseconds';

import Deadline from '../Deadline';

jest.useFakeTimers();

describe('<Deadline />', () => {
	afterEach(clear);

	test('renders the remaining time', () => {
		const deadline = new Date(Date.now() + ms.seconds(5.5));
		const { container } = renderWithTheme(<Deadline deadline={deadline} />);

		expect(container.firstChild).toHaveTextContent('00:00:05');
	});

	test('defaults to 00:00:00', () => {
		const { container } = renderWithTheme(<Deadline />);

		expect(container.firstChild).toHaveTextContent('00:00:00');
	});

	test('updates every second', () => {
		advanceTo(0);
		const deadline = Date.now() + ms.seconds(5.5);
		const { container, rerender } = renderWithTheme(<Deadline deadline={deadline} />);

		advanceTo(ms.seconds(1));
		jest.runOnlyPendingTimers();
		rerender(<Deadline deadline={deadline} />);
		expect(container.firstChild).toHaveTextContent('00:00:04');

		advanceTo(ms.seconds(2));
		jest.runOnlyPendingTimers();
		rerender(<Deadline deadline={deadline} />);
		expect(container.firstChild).toHaveTextContent('00:00:03');
	});

	test('Stops at 00:00:00', () => {
		advanceTo(0);
		const deadline = Date.now() + ms.seconds(30);
		const { container, rerender } = renderWithTheme(<Deadline deadline={deadline} />);
		expect(container.firstChild).toHaveTextContent('00:00:30');

		advanceTo(ms.seconds(40));
		jest.runOnlyPendingTimers();
		rerender(<Deadline deadline={deadline} />);
		expect(container.firstChild).toHaveTextContent('00:00:00');
	});
});
