import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import theme from '../theme';

beforeAll(() => jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect));
afterAll(() => React.useEffect.mockRestore());
afterEach(cleanup);

const renderWithTheme = (node, options) => {
	const rendered = render(
		<MemoryRouter>
			<ThemeProvider theme={theme}>{node}</ThemeProvider>
		</MemoryRouter>,
		options
	);

	return {
		...rendered,
		rerender: (ui, options) => renderWithTheme(ui, { container: rendered.container, ...options })
	};
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const flushPromises = () => new Promise(resolve => setImmediate(resolve));

export * from 'react-testing-library';
export { renderWithTheme, sleep, flushPromises };
