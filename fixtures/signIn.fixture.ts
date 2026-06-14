import {test as base,expect,Page} from '@playwright/test'
export {expect} from '@playwright/test'
import {signinPage} from '../pages/signinPage'
export {signinPage} from '../pages/signinPage'

//defining fixtures
type AuthFixtures = {signedinpage:Page}

export const test=base.extend<AuthFixtures>({
    signedinpage:async({page},use)=>{
        //Calling pom
        const signinpage=new signinPage(page)
        await page.goto(process.env.SIGNIN_URL!)
        await signinpage.signIn(process.env.USER!,process.env.PWD!)
        await expect(page).toHaveURL(/success/i)

        //handover page to test
        await use(page)
    }
})
