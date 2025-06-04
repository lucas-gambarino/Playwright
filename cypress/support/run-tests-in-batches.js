const { exec } = require('child_process');
const fs = require('fs');

// Configuration
const BATCH_SIZE = 7;
const TEST_FILE = 'cypress/e2e/intentsTest.cy.js';

// Read the original test scenarios
const { mobScenarios, ffhScenarios } = require('../fixtures/test-scenarios.js');

// Combine all test cases
const allTestCases = [
  ...mobScenarios.testCases.map(tc => ({ ...tc, group: 'mob' })),
  ...ffhScenarios.testCases.map(tc => ({ ...tc, group: 'ffh' }))
];

// Calculate total batches
const totalBatches = Math.ceil(allTestCases.length / BATCH_SIZE);

// Function to create a temporary test file with specific test cases
function createTemporaryTestFile(testCases) {
  const mobTests = testCases.filter(tc => tc.group === 'mob');
  const ffhTests = testCases.filter(tc => tc.group === 'ffh');

  const tempScenarios = `
    export const mobScenarios = {
      name: 'MOB Intents',
      testCases: ${JSON.stringify(mobTests, null, 2)}
    };
    
    export const ffhScenarios = {
      name: 'FFH Intents',
      testCases: ${JSON.stringify(ffhTests, null, 2)}
    };
  `;

  fs.writeFileSync('./cypress/fixtures/temp-test-scenarios.js', tempScenarios);
}

// Function to run Cypress with a promise
function runCypress() {
  return new Promise((resolve, reject) => {
    // Using --browser chrome to ensure clean browser instance each time
    const command = 'npx cypress run --browser chrome --spec ' + TEST_FILE;
    
    const cypressProcess = exec(command, { maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        console.error('Error running tests:', error);
        reject(error);
        return;
      }
      console.log(stdout);
      resolve();
    });

    // Pipe the output to console in real-time
    cypressProcess.stdout?.pipe(process.stdout);
    cypressProcess.stderr?.pipe(process.stderr);
  });
}

// Main function to run tests in batches
async function runTestsInBatches() {
  console.log(`Total tests: ${allTestCases.length}`);
  console.log(`Will run in ${totalBatches} batches of ${BATCH_SIZE} tests each`);

  // Backup original test scenarios
  const originalContent = fs.readFileSync('./cypress/fixtures/test-scenarios.js', 'utf8');

  try {
    for (let i = 0; i < totalBatches; i++) {
      const start = i * BATCH_SIZE;
      const end = Math.min(start + BATCH_SIZE, allTestCases.length);
      const batchTests = allTestCases.slice(start, end);

      console.log(`\nRunning batch ${i + 1}/${totalBatches} (tests ${start + 1}-${end})`);
      
      // Create temporary test file with current batch
      createTemporaryTestFile(batchTests);
      
      // Modify the test file to use temporary scenarios
      const modifiedTestFile = fs.readFileSync(TEST_FILE, 'utf8')
        .replace(
          "import { mobScenarios, ffhScenarios } from '../fixtures/test-scenarios';",
          "import { mobScenarios, ffhScenarios } from '../fixtures/temp-test-scenarios';"
        );
      fs.writeFileSync(TEST_FILE, modifiedTestFile);

      try {
        // Run the batch
        await runCypress();
      } catch (error) {
        console.error(`Batch ${i + 1} failed:`, error);
        // Continue with next batch even if current one fails
      }

      // Clean up memory between batches
      global.gc && global.gc();
      
      console.log('\nWaiting before next batch...');
      // Delay between batches
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  } finally {
    // Restore original files
    fs.writeFileSync('./cypress/fixtures/test-scenarios.js', originalContent);
    fs.unlinkSync('./cypress/fixtures/temp-test-scenarios.js');
    
    const originalImport = "import { mobScenarios, ffhScenarios } from '../fixtures/test-scenarios';";
    const testFileContent = fs.readFileSync(TEST_FILE, 'utf8');
    fs.writeFileSync(TEST_FILE, testFileContent.replace(
      "import { mobScenarios, ffhScenarios } from '../fixtures/temp-test-scenarios';",
      originalImport
    ));
  }
}

// Run the batched tests
runTestsInBatches().catch(console.error); 