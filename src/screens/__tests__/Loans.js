import React from 'react';
import { renderWithTheme, sleep } from 'test-utils';
import axiosMock from 'axios';
import ms from 'milliseconds';

import Loans from '../Loans';

jest.useFakeTimers();

// I'm not sure yet how to properly test custom hooks. Especially `useEffect` seems to be tricky

describe('<Loans />', () => {
	afterEach(() => {
		axiosMock.get.mockClear();
	});

	test('makes a GET request to `/loans/marketplace`', () => {
		axiosMock.get.mockResolvedValueOnce({ data: [] });
		renderWithTheme(<Loans />);

		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		expect(axiosMock.get.mock.calls[0][0]).toContain('/loans/marketplace');
	});

	test('refreshes after 5 minutes', () => {
		axiosMock.get.mockResolvedValueOnce({ data: [] });
		renderWithTheme(<Loans />);

		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		jest.advanceTimersByTime(ms.minutes(3));
		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		jest.advanceTimersByTime(ms.minutes(3));
		expect(axiosMock.get).toHaveBeenCalledTimes(2);
	});

	test('refreshes every 5 minutes', () => {
		axiosMock.get.mockResolvedValueOnce({ data: [] });
		renderWithTheme(<Loans />);

		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		jest.advanceTimersByTime(ms.minutes(5));
		expect(axiosMock.get).toHaveBeenCalledTimes(2);
		jest.advanceTimersByTime(ms.minutes(5));
		expect(axiosMock.get).toHaveBeenCalledTimes(3);
	});

	test.skip('handles http errors', () => {});
});
