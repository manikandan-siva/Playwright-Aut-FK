import {Page,Locator} from '@playwright/test'

export class signinPage{
readonly page: Page

//Locators
readonly user:Locator
readonly pwd:Locator
readonly signInButton:Locator
readonly msg:Locator

//constructor
constructor(page:Page){
    this.page=page
    this.user=page.locator('#email')
    this.pwd=page.locator('#passwd')
    this.signInButton=page.getByText(/sign in/i)
    this.msg=page.getByText(/success/i)
}

//actions
//signin
async signIn(user:string, pwd:string){
    await this.user.fill('user')
    await this.pwd.fill('pwd')
    await this.signInButton.click()
}

async message(){
    return this.msg
}
}