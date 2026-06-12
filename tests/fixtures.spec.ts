import {test,expect,LoginPage} from '../fixtures/auth.fixture'

test.describe('Homepage',()=>{
    test('UserDetails',async({loggedinPage})=>{
        //Already logged in due to fixture
        //const loginpage = new LoginPage
        expect(await loggedinPage.getByText(/manager/i).first().textContent()).toBe('Manager')

    })
   test('New Customer Link',async({loggedinPage})=>{
    //await loggedinPage.pause();
    await expect(loggedinPage.getByText(/New Customer/i)).toBeVisible();
   })
})