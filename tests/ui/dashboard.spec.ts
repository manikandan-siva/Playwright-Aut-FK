import {test,expect} from '../../fixtures/auth.fixture'
import {dashboardPage} from '../../pages/dashboardPage'

test.describe('Dashboard Tests',()=>{
    let dbPage : dashboardPage
    test('@smoke dashboard loads after login',async({loggedinPage})=>{
        dbPage=new dashboardPage(loggedinPage)
        await dbPage.checkDashMsg()
    })
    test('@regression dashboard links',async({loggedinPage})=>{
         dbPage=new dashboardPage(loggedinPage)
         expect(dbPage.newCustLink).toBeVisible()
         expect(dbPage.newAcctLink).toBeVisible()
         expect(dbPage.miniStmt).toBeVisible()
    })
    test('@smoke navigate to new customer page',async({loggedinPage})=>{
        dbPage=new dashboardPage(loggedinPage)
        //dbPage.checkDashMsg()
        await dbPage.goToNewCustPage()
        await expect(loggedinPage).toHaveURL(/addcustomer/i)
    })
    test('@smoke navigate to new account page',async({loggedinPage})=>{
        dbPage=new dashboardPage(loggedinPage)
        await dbPage.goToNewAcctPage()
        await expect(loggedinPage).toHaveURL(/addaccount/i)
    })
    test('@smoke navigate to mini statement',async({loggedinPage})=>{
        dbPage=new dashboardPage(loggedinPage)
        await dbPage.goToMiniStmtPage()
        await expect(loggedinPage).toHaveURL(/ministatement/i)
    })
    test('@smoke Logout',async({loggedinPage})=>{
        dbPage=new dashboardPage(loggedinPage)
        await dbPage.logoutFromAcc()
        await expect(loggedinPage).toHaveURL(/index/i)
    })
})