const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://admin-demo.nopcommerce.com/",
    screenshotOnRunFailure:false,
    trashAssetsBeforeRuns:false,
    trashAssetsBeforeRuns:true,
    screenshotsFolder:"screenshot1",

    video:true,
    videosFolder:"video1",
    videoCompression:20,
  },
});
