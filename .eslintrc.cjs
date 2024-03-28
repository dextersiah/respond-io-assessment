/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    env: {
        "node": true
    },
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "indent": [
            "error",
            4
        ],
        "no-tabs": 0,
        "vue/html-indent": [
            "error",
            4
        ],
        "eol-last": 0,
        "no-trailing-spaces": 0,
        "@typescript-eslint/no-unused-vars": 2, // Change to 1 to set to warning instead of error
        "semi": 0,
        "vue/multi-word-component-names": 0,
    }
}
