// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Example of a custom command:
// Cypress.Commands.add('login', (email, password) => {
//   cy.get('[data-cy=email]').type(email)
//   cy.get('[data-cy=password]').type(password)
//   cy.get('[data-cy=submit]').click()
// }) 

// ***********************************************
// Chat Bot Commands
// ***********************************************

import { SELECTORS, MESSAGES, TIMEOUTS, CREDENTIALS, CREDENTIALS_FIRST_LOGIN } from './constants';
import 'cypress-xpath'

// Wait for bot's initial messages
Cypress.Commands.add('waitForBotInitialMessage', () => {
  // Wait for all initial messages in sequence
  cy.wait(3000)

  cy.get(SELECTORS.MESSAGE_BUBBLE)
    .should('exist')
    .and('be.visible')
    .and('contain', MESSAGES.INITIAL.GREETING)
  
  cy.get(SELECTORS.MESSAGE_BUBBLE)
    .should('contain', MESSAGES.INITIAL.NO_ACCOUNT)
  
  cy.get(SELECTORS.MESSAGE_BUBBLE)
    .contains(MESSAGES.INITIAL.HELP_PROMPT)
    .should('be.visible')
    .and('exist')
})


// Start chat session
Cypress.Commands.add('startChat', () => {
  cy.get(SELECTORS.SUPPORT_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

  cy.get(SELECTORS.COOKIES_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

  cy.get(SELECTORS.CHAT_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

  cy.get(SELECTORS.YES_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

  cy.get(SELECTORS.MOBILITY_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

  cy.get(SELECTORS.MONTHLY_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

  cy.get(SELECTORS.LOGIN_CHAT_BUTTON)
    .should('exist')
    .and('be.visible')
    .click()

})

// First login command
Cypress.Commands.add('firstLogin', () => {
  //cy.origin('https://telusidentity-pp.telus.com', { args: { username: Cypress.env('USERNAME'), password: Cypress.env('PASSWORD') } }, ({ username, password }) => {
    cy.get('input[data-testid="username"]').first()
      .should('exist')
      .and('be.visible')
      .type(Cypress.env('USERNAME'))

    cy.get('input[data-testid="password"]').first()
      .should('exist')
      .and('be.visible')
      .type(Cypress.env('PASSWORD'))

    cy.get('button[type="submit"]').eq(1)
      .should('exist')
      .and('be.visible')
      .click()

  //})
})

// Send message and wait for response
Cypress.Commands.add('sendChatMessage', (message, waitTime = TIMEOUTS.MEDIUM) => {
  cy.get(SELECTORS.CHAT_TEXTAREA)
    .should('exist')
    .and('be.visible')
    .type(message)
    .type('{enter}')
  
  // Wait for bot to process and respond
  cy.wait(waitTime)
})


// Handle basic authentication popup
Cypress.Commands.add('loginStage', () => {
  // Handle basic auth popup
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Authentication required')
  })

  // Type credentials in the basic auth popup
  cy.on('window:confirm', () => {
    return true
  })

  // Visit the page with basic auth credentials
  cy.visit('https://www.wcstage.telus.com/', {
    auth: {
      username: CREDENTIALS.USERNAME,
      password: CREDENTIALS.PASSWORD
    },
    failOnStatusCode: false
  })
})

// Verify TELUS Expert button
Cypress.Commands.add('verifyExpertButton', () => {
  cy.get(SELECTORS.EXPERT_BUTTON)
    .should('be.visible')
    .then(($button) => {
      // Check for either of the possible button texts
      expect(
        $button.text().includes('Continue to TELUS Expert')
      ).to.be.true
    })
})