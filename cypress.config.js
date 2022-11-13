const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    fixturesFolder: false,
  },
  chromeWebSecurity: false,
})