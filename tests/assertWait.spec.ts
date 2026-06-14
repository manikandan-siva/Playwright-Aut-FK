//import {test, expect} from '@playwright/test';
import{test,expect,signinPage} from '../fixtures/signIn.fixture'

test.describe('Assertions',()=>{    
    /*test.beforeEach(async({page})=>{
         await page.goto('https://demo.guru99.com/test/login.html');
    })*/
    /*test('login',async({page})=>{

        //await page.goto('https://demo.guru99.com/test/login.html');
        await expect(page).toHaveTitle(/Login Page/i);
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#passwd')).toBeVisible();


    })*/

    test('Home',async({signedinpage})=>{
        const siginpage=new signinPage(signedinpage)
        expect.soft(await (await siginpage.message()).textContent()).toMatch(/success/i)
       // await page.goto('https://demo.guru99.com/test/login.html');
        /*await page.locator('#email').fill('mngr662789');
        await page.locator('#passwd').fill('qejahat');
        await page.getByText(/sign in/i).click();
        await expect(page).toHaveURL(/success/i);*/        
        //await expect.soft(signedinpage.getByText(/abbfjgdfsdkgj/i)).toBeVisible();
         
    })

    test('wait',async({signedinpage})=>{
       /* await page.locator('#email').fill('mngr662789');
        await page.locator('#passwd').fill('qejahat');
        await page.getByText(/sign in/i).click();*/
       // await page.waitForURL(/khjjfhd;ls/i)
        await signedinpage.waitForURL(/success/i)
       // await expect.soft(page).toHaveURL(/success/i);
    })
})