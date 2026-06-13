import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config();

export default defineConfig({
  testDir : './tests',
  //timeout: 30000,
  retries: process.env.CI?2:0,
  workers: process.env.CI?1:4,
  reporter :[
    ['html',{open :'never'}],
    ['list']
  ],
  use:{
    baseURL : process.env.BASE_URL || ' https://demo.guru99.com/V1/index.php',
    headless: true,
    screenshot: 'only-on-failure',
    extraHTTPHeaders:{
      'x-api-key': process.env.API_KEY!
    }
   // video:'retain-on-failure',
   // trace: 'retain-on-failure'
  },
  projects:[
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name:'firefox',
      use:{...devices['Desktop Firefox']}
    }
  ]
})