module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "browser": true
    },
    "extends": ["eslint:recommended", "react-app", "plugin:jsx-a11y/recommended"],
    "plugins": ["jsx-a11y"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "indent": 0,
        "no-tabs": "off",
    }
};
