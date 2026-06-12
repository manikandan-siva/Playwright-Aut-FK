import{test as base, Page , expect} from '@playwright/test'
export {expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
export {LoginPage} from '../pages/LoginPage'

//defining fixture
type AuthFixtures={loggedinPage : Page}

//extend base test with fixture
export const test=base.extend<AuthFixtures>({
    loggedinPage:async({page},use)=>{
        //setup to run before every test
        const loginpage = new LoginPage(page)
        await loginpage.goto();
        await loginpage.login('mngr662789','qejahat')
        await expect(page).toHaveURL(/Manager/i)

        //handover page to test
        await use(page);
    }
})