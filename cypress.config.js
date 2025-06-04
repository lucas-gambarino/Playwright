const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Limpar memória do navegador após cada teste
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
          launchOptions.args.push(
            '--disable-dev-shm-usage',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--disable-background-networking',
            '--disable-extensions',
            '--disable-gpu',
            '--no-sandbox',
            '--js-flags="--max-old-space-size=4096"'
          )
        }
        return launchOptions
      })
    },
    env: {
      USERNAME: 'test@fake.address.com',
      PASSWORD: 'Passw0rd'
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    // Timeouts aumentados para chat
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 60000,
    // Configuração de retentativas
    retries: {
      runMode: 3,
      openMode: 3
    },
    // Otimizações de memória
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    testIsolation: true,
    chromeWebSecurity: false,
    // Reduzir uso de memória
    video: false,
    trashAssetsBeforeRuns: true,
    watchForFileChanges: false,
    // Configurações do navegador
    browser: 'chrome',
  
    // Configurações adicionais de performance
    nodeVersion: 'system',
    experimentalModifyObstructiveThirdPartyCode: true,
    // Limitar recursos
    numTestsKeptInMemory: 5,
    experimentalSessionAndOrigin: true,
    experimentalSourceRewriting: true
  },
  // Configurações de viewport
  viewportWidth: 1920,
  viewportHeight: 1080,
  // Configurações de screenshot
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots'
}) 