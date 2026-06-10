import {test, expect} from '@playwright/test';

test.describe('Assertions',()=>{

    test.beforeEach(async({page})=>{
         await page.goto('https://demo.guru99.com/test/login.html');
    })
    test('login',async({page})=>{

        //await page.goto('https://demo.guru99.com/test/login.html');
        await expect(page).toHaveTitle(/Login Page/i);
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#passwd')).toBeVisible();


    })

    test('Home',async({page})=>{
       // await page.goto('https://demo.guru99.com/test/login.html');
        await page.locator('#email').fill('mngr662789');
        await page.locator('#passwd').fill('qejahat');
        await page.getByText(/sign in/i).click();
        await expect(page).toHaveURL(/success/i);

        await expect.soft(page.getByText(/abbfjgdfsdkgj/i)).toBeVisible();

    })

    test('wait',async({page})=>{
        await page.locator('#email').fill('mngr662789');
        await page.locator('#passwd').fill('qejahat');
        await page.getByText(/sign in/i).click();
        await page.waitForURL(/khjjfhd;ls/i)
        await expect.soft(page).toHaveURL(/success/i);
    })
})