const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jj17eg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // retries: 1,
    baseUrl: 'http://qamid.tmweb.ru'
  },
});