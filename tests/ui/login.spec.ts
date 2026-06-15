import{test,expect,LoginPage} from '../../fixtures/auth.fixture'
import {Users,Urls} from '../../data/testData'

test.describe('Banking Login Suite',()=>{
    let loginPage : LoginPage
    test('@smoke login',async({page})=>{
            loginPage=new LoginPage(page);
            await loginPage.goto()
            await loginPage.login(Users.valid.uid,Users.valid.pwd)
            //await page.pause()
            await page.waitForURL(/Manager/)
            await expect (page).toHaveURL(/Manager/)
            await expect (page.getByText(/manager/i).first()).toBeVisible()
    })
    test('@regression invalid login',async({page})=>{
        loginPage=new LoginPage(page);
        await loginPage.goto()
        await loginPage.login(Users.invalid.uid,Users.invalid.pwd)
        await expect (page).not.toHaveURL(/manager/i)

    })
    test('@regression empty login',async({page})=>{
        loginPage = new LoginPage(page);
        await loginPage.goto()
        await loginPage.login( Users.empty.uid,Users.empty.pwd)
        await expect(page).not.toHaveURL(/manager/i)
    })

})