module.exports = {
	preset: 'ts-jest',
	snapshotSerializers: ['enzyme-to-json/serializer'],
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/core/__mocks__/fileMock.js',
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFiles: ['<rootDir>/core/setupTests.ts'],
	collectCoverage: true,
	moduleDirectories: ['src', 'node_modules'],
};
