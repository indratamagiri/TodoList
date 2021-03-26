module.exports = {
    extends: 'airbnb',
    plugins: [
      'react',
      'react-native',
      'react-hooks'
    ],
    parser: 'babel-eslint',
    env: {
      jest: true,
      'react-native/react-native': true,
    },
    rules: {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'padded-blocks': 'off',
      'arrow-body-style': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react-native/no-unused-styles': 2,
      'react-native/split-platform-components': 2,
      'react-native/no-single-element-style-arrays': 2,
      "import/prefer-default-export": "off",
      "linebreak-style": 0,
      "react/jsx-props-no-spreading": 'off',
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
     ]
    },
    globals: {
      fetch: false
    },
    settings: {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      },
  };