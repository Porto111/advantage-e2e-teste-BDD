const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/integration/**/*.feature',
  },
  baseurl: 'https://advantageonlineshopping.com/#/',
  env: {
    viewportWidthBreakpoint: 768,
  },
  defaultCommandTimeout: 60000,
},
  {
    "testFiles": "**/*.{feature,features}"
  }


);
