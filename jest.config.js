module.exports = {
	roots: ['<rootDir>/src'],
	setupFiles: ['jest-date-mock'],
	setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
	moduleDirectories: ['node_modules', 'src/utils', __dirname]
};
