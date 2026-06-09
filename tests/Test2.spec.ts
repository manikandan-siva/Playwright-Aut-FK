import {test, expect} from '@playwright/test'

test('has title',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveTitle(/TodoMVC/);
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Hello, Playwright!',);
    await input.press('Enter');
    await test.step('Text entered',async()=>{
    //await expect(page.getByTestId('todo-title').and(page.getByText('/hello/i')),'Task added').toBeVisible();
    await expect(page.getByText(/hello/i),'Task added').toBeVisible();    
});
    
});
test('complete',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveTitle(/TodoMVC/);
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Hello, Playwright!',);
    await input.press('Enter');
    //await test.step('Text entered',async()=>{
    //await expect(page.getByTestId('todo-title').and(page.getByText('/hello/i')),'Task added').toBeVisible();
    await expect(page.getByText(/hello/i),'Task added').toBeVisible(); 
    const box=page.getByTestId('todo-item');
    await page.pause();
    box.filter({hasText: 'Hello, Playwright!'}).getByRole('checkbox').check();
    await expect(page.getByTestId('todo-item')).toHaveClass('completed');
});
test('clear',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await expect(page).toHaveTitle(/TodoMVC/);
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Hello, Playwright!',);
    await input.press('Enter');
    //await test.step('Text entered',async()=>{
    //await expect(page.getByTestId('todo-title').and(page.getByText('/hello/i')),'Task added').toBeVisible();
    await expect(page.getByText(/hello/i),'Task added').toBeVisible(); 
    const box=page.getByTestId('todo-item');
    box.filter({hasText: 'Hello, Playwright!'}).getByRole('checkbox').check();
    await expect(page.getByTestId('todo-item')).toHaveClass('completed');
    await page.getByText('Clear completed').click();
    await page.pause();
});