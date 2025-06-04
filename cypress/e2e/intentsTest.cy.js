import { mobScenarios, ffhScenarios } from '../fixtures/test-scenarios';
import { TIMEOUTS } from '../support/constants';

describe('Telus Support Page Tests', () => {
  beforeEach(() => {
    cy.loginStage()
  })

  const runTestGroup = (group) => {
    describe(group.name, () => {
      group.testCases.forEach((testCase) => {
        it(`should handle intent: "${testCase.intent}"`, () => {

          // Start chat and wait for initial message
          cy.startChat()

          cy.firstLogin()

          cy.waitForBotInitialMessage()

          // Send initial message with longer timeout for first response
          cy.sendChatMessage(testCase.intent, TIMEOUTS.LONG)

          // Handle follow-up messages with medium timeout
          testCase.followUps.forEach((followUp) => {
            cy.sendChatMessage(followUp, TIMEOUTS.MEDIUM)
          })

          // Verify expert button
          cy.verifyExpertButton()
        })
      })
    })
  }

  // Run MOB Tests
  describe('MOB Tests', () => {
    runTestGroup(mobScenarios)
  })

  // Run FFH Tests
  describe('FFH Tests', () => {
    runTestGroup(ffhScenarios)
  })
})