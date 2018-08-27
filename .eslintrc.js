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
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
        // default to "createReactClass"
        "pragma": "React", // Pragma to use, default to "React"
        "version": "16.0", // React version, default to the latest React stable release
      },
      "propWrapperFunctions": ["forbidExtraProps"] // The names of any functions used to wrap the
      // propTypes object, e.g. `forbidExtraProps`.
      // If this isn't set, any propTypes wrapped in
      // a function will be skipped.
    },
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
