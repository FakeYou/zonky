import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import url from 'url';
import qs from 'query-string';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import theme from './theme';

import Loans from './screens/Loans';
import Loan from './screens/Loan';
import Logo from './components/Logo';

const BASE_URL = process.env.BASE_URL;

const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	font-family: ${props => props.theme.font.body};
	color: ${props => props.theme.color.body};

	${Logo} {
		display: block;
		margin: 0 auto;
	}
`;

const App = () => {
	// We might receive an url like `/zonky/?redirect=/zonky/loan/1203` due to Github Pages
	// limitations (see readme). When this happens we want to replace the current route with the route
	// given in the `redirect` parameter.
	const routerRef = useRef(null);
	useEffect(() => {
		const { redirect } = qs.parse(window.location.search);

		if (redirect) {
			routerRef.current.history.replace(redirect);
		}
	}, []);

	const basename = url.parse(BASE_URL).path;

	return (
		<Router ref={routerRef} basename={basename}>
			<ThemeProvider theme={theme}>
				<Container>
					<Link to="/">
						<Logo />
					</Link>
					<Route path="/" exact component={Loans} />
					<Route path="/loans/:id" component={Loan} />
				</Container>
			</ThemeProvider>
		</Router>
	);
};

export default App;
