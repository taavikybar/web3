module.exports = {
    root: true,
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
        // project: ['./tsconfig.json'],
    },
    env: {
        es2022: true,
        browser: true,
        node: true,
        mocha: true,
        jest: true,
    },
    // parser: "babel-eslint",
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'no-var': 'error',
    },
    ignorePatterns: [],
    globals: {
        artifacts: true,
        contract: true,
        Window: true,
    },
}
