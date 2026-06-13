import{test,expect} from '@playwright/test'
import{LoginPage} from '../pages/LoginPage'

test.describe('env file play',()=>{
    test('Login with env',async({page})=>{
        const loginpage = new LoginPage(page)
        await loginpage.goto();
        await loginpage.login(process.env.USER!,process.env.PWD!)
        expect (await (await loginpage.message()).textContent()).toMatch(/welcome/i)
    })
})
