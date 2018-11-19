module.exports = {
	get: jest.fn(() => Promise.resolve({ data: {} })),
	CancelToken: {
		source: jest.fn(() => ({
			token: 'token',
			cancel: jest.fn(() => {})
		}))
	},
	isCancel: jest.fn(error => error && error.__CANCEL__)
};
