module.exports = {
    setupFiles:["<rootDir>/config/test-setup.js"],
    moduleFileExtensions: ["js", "json", "tsx"],
    testMatch: ['**/__tests__/**/*.(ts|js)?(x)', '**/?(*.)+(spec|test).(js|tsx)'],
    transform: {
        "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.(tsx)$": "ts-jest",
    },
    verbose: true,
    moduleDirectories: [
        ".",
        "src",
        "node_modules"
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    globals: {
    }
};