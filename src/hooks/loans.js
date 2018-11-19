import { useState, useEffect, useRef } from 'react';
import find from 'lodash/find';
import ms from 'milliseconds';
import axios from 'axios';

const UPDATE_INTERVAL = ms.minutes(5);
const API_URL = process.env.API_URL;

let cache = [];

export const useLoans = () => {
	const [state, setState] = useState({ loans: cache, isLoading: false, error: null });
	const intervalRef = useRef();
	const cancelRef = useRef();

	useEffect(() => {
		const update = () => {
			cancelRef.current = call(`${API_URL}/loans/marketplace`, 'loans', state, setState);
		};

		update();
		intervalRef.current = setInterval(update, UPDATE_INTERVAL);

		return () => {
			clearInterval(intervalRef.current);
			cancelRef.current && cancelRef.current();
		};
	}, []);

	return state;
};

export const useLoan = id => {
	const [state, setState] = useState({ loan: null, isLoading: true, error: null });

	useEffect(
		() => {
			const loan = find(cache, { id });

			if (loan) {
				setState({ loan, isLoading: false, error: null });
			}
			else {
				// `call` will return a cleanup/cancellation callback which is passed directly to `useEffect`.
				// This way we can prevent updating the state when the component is unmounted.
				return call(`${API_URL}/loans/${id}`, 'loan', state, setState);
			}
		},
		[id]
	);

	return state;
};

const call = (url, key, state, setState) => {
	const source = axios.CancelToken.source();

	setState({
		...state,
		isLoading: true,
		error: null
	});

	axios
		.get(url, { cancelToken: source.token })
		.then(response => {
			setState({
				[key]: response.data,
				isLoading: false,
				error: null
			});

			// Update the cache, this is a side-effect that should probably go somewhere else
			if (key === 'loans') {
				cache = response.data;
			}
		})
		.catch(error => {
			// We only cancel events when the component using this method is unmounting. After unmount
			// we don't want to update the state anymore.
			if (!axios.isCancel(error)) {
				setState({
					...state,
					isLoading: false,
					error: error.message
				});
			}
		});

	// Return a callback so requests can be cancelled when unmounting
	return () => {
		source.cancel();
	};
};
