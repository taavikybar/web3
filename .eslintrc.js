module.exports = {
    root: true,
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    env: {
        es2022: true,
        browser: true,
        node: true,
        mocha: true,
        jest: true,
    },
    // parser: "babel-eslint",
    // "parser": "@typescript-eslint/parser",
    // "parserOptions": { "project": ["./tsconfig.json"] },
    // "plugins": [
    //     "@typescript-eslint"
    // ],
    rules: {
        'no-var': 'error',
        // "@typescript-eslint/strict-boolean-expressions": [
        //     2,
        //     {
        //         "allowString" : false,
        //         "allowNumber" : false
        //     }
        // ]
    },
    ignorePatterns: [],
    globals: {
        artifacts: true,
        contract: true,
    },
}
