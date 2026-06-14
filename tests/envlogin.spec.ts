//import{test,expect} from '@playwright/test'
import{test,expect,LoginPage} from '../fixtures/auth.fixture'

test.describe('env file play',()=>{
    test('Login with env',async({loggedinPage})=>{
        const loginpage = new LoginPage(loggedinPage)
        //await page.goto(process.env.BASE_URL!);
        //await loginpage.goto();
        //await loginpage.login(process.env.USER!,process.env.PWD!)
        expect (await (await loginpage.message()).textContent()).toMatch(/welcome/i)
    })
})
