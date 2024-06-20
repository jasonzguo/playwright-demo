import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: false,

  // Retry on CI only.
  retries: 0,

  // Opt out of parallel tests on CI.
  workers: undefined,

  // Reporter to use
  reporter: 'line',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://127.0.0.1:8000',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:8000',
    reuseExistingServer: true,
  },
});