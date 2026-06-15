import {test,expect} from '@playwright/test'
import{LoginPage} from '../pages/LoginPage'

test.describe('POMLogin',()=>{
    test('validLogin',async({page})=>{
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.login('mngr662789','qejahat')
        await expect(page).toHaveURL(/Manager/i)
        const msg=await (await loginpage.message()).textContent()
        console.log(msg)
    })
})