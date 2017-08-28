module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "no-console": 0,
        "no-debugger": 0,
        "quotes": [
            "error",
            "single"
        ],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "semi": [
            "error",
            "never"
        ]
    }
};