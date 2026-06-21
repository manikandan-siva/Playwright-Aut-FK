import {Page,Locator, expect} from '@playwright/test'
import { Urls } from '../data/testData'

export class dashboardPage{

    readonly newCustLink :Locator
    readonly newAcctLink:Locator
    readonly miniStmt:Locator
    readonly logout:Locator
    readonly dashMsg:Locator
   
    constructor(private readonly page:Page){
        this.newCustLink=this.page.getByRole('link', { name: 'New Customer' })
        this.newAcctLink=this.page.getByRole('link', { name: 'New Account' })
        this.miniStmt=this.page.getByRole('link', { name: 'Mini Statement' })
        this.logout=this.page.getByRole('link', { name: 'Log out' })
        this.dashMsg=this.page.getByText('Welcome To Manager\'s Page of')

    }

    //Actions
    async checkDashMsg(){
        await expect(this.dashMsg).toBeVisible()
    }

    async goToNewCustPage(){
        await this.newCustLink.click({force:true});
    }

    async goToNewAcctPage(){
        await this.newAcctLink.click({force:true});
    }

    async goToMiniStmtPage(){
        await this.miniStmt.click({force:true});
    }

    async logoutFromAcc(){
        await this.logout.click({force:true});
    }
}
