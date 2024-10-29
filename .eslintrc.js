module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:vue/vue3-recommended",
      "@vue/airbnb",
      "@vue/typescript",
    ],
  
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@typescript-eslint/parser",
    },
  
    plugins: [
      "vue",
      "json-format",
    ],
  
    rules: {
      "dot-notation": 0,
      "vue/no-deprecated-filter": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-deprecated-destroyed-lifecycle": "off",
      "vue/no-deprecated-v-bind-sync": "off",
      "vue/no-useless-template-attributes": "off",
      "vue/max-attributes-per-line": ["error", {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      quotes: [
        "error",
        "double",
      ],
      "import/extensions": [
        "off",
        "ignorePackages",
      ],
      "import/no-unresolved": "off",
      // rule to enable semicolon in interface
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: true,
          },
        },
      ],
      
      // semicolons at the end of types
      semi: "off",
      "@typescript-eslint/semi": ["error"],
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      /**
       * There is bug that gives error "Enum alrady declared in above scope"
       * whenever someone tries to declare an enum, the following rules
       * solve the error Refer: https://stackoverflow.com/a/63961972
       */
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
  
    },
    overrides: [
      {
        files: ["./**/*.vue"],
        rules: {
          /**
           * Adding the indentation rule only to vue files
           * beacause in other files its conflicting
           */
          indent: "off",
          "@typescript-eslint/indent": ["error", 2],
        },
      },
    ],
  };
  