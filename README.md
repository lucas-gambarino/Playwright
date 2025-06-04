# Telus Support Chat Testing Project

This project contains automated tests for the Telus Support Chat functionality, covering both Mobility (MOB) and Fixed & Home (FFH) scenarios.

## Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)
- Access to http://local.telus.com/#/en/bc/support

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Project Structure

- `cypress/e2e/` - Test files containing the test scenarios
- `cypress/fixtures/` - Test data files containing MOB and FFH scenarios
- `cypress/support/` - Support files and custom commands

## Test Scenarios

The test suite includes two main groups of scenarios:

### Mobility (MOB) Tests
- Tests for mobile-specific intents
- Includes scenarios for:
  - Rewards
  - Billing
  - Payments
  - Roaming
  - Plan changes

### Fixed & Home (FFH) Tests
- Tests for home services intents
- Includes scenarios for:
  - TV services
  - Internet
  - Home phone
  - Billing
  - Payments

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (with browser visible)
```bash
npm run test:headed
```

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```

### Run Specific Test Groups

To run only MOB or FFH tests, use the Cypress Test Runner or modify the test file by adding `.only` to the specific describe block:

```javascript
// For MOB tests only
describe.only('MOB Tests', () => {
  runTestGroup(mobScenarios)
})

// For FFH tests only
describe.only('FFH Tests', () => {
  runTestGroup(ffhScenarios)
})
```

## Test Flow

Each test follows this sequence:
1. Selects appropriate service configurations
2. Initiates chat
3. Sends test message
4. Sends follow-up message
5. Verifies TELUS Expert button presence

## Adding New Test Cases

Add new test cases in `cypress/fixtures/test-scenarios.js` under the appropriate section (mob or ffh):

```javascript
{
  message: 'Your test message',
  followUp: 'agent'
}
``` 