import{Page,Locator} from '@playwright/test'
import{Urls} from '../data/testData'
import { TIMEOUT } from 'node:dns'

export class LoginPage{
    readonly page : Page

    //define locators
    readonly username:Locator
    readonly password:Locator
    readonly loginbutton:Locator
    readonly msg:Locator

    //constructor - inject page and locate webelements
    constructor(page:Page){
        this.page=page;
        this.username=page.locator('input[name="uid"]')
        this.password=page.locator('input[name="password"]')
        this.loginbutton=page.getByRole('button',{name:'LOGIN'})
        this.msg=page.getByText(/Welcome/i)
    }

    //Actions
    async goto(){
        await this.page.goto(Urls.login)
    }

    async login( usr:string,pwd:string){
        await this.username.fill(usr)
        await this.password.fill(pwd)
        await this.loginbutton.click();
    }

    async message(){
        return this.msg 
    }

    //helper method
    async isLoginSuccessful():
    Promise<boolean>{
        try{
            await this.page.waitForURL(/manger/i,
            {timeout:5000})
            return true
        }catch{
            return false
        }
    }
}