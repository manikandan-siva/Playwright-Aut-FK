import {test,expect} from '@playwright/test';
test.describe('User API',()=>{
    test('Req1',async({request})=>{
        expect((await request.get('https://reqres.in/api/users')).status()).toBe(200);
    })
}

)