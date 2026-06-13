import {test,expect, APIResponse} from '@playwright/test';

test.describe('APIBody',()=>{
    let res : APIResponse;
    let Users : any;
    let status: number;
    test.beforeEach(async({request})=>{
       res = await request.get('https://reqres.in/api/users/99',{
            headers:{
                //'x-api-key':
            }
        });
    });
    test('assertAPIBody',async({request})=>{
        Users=await res.json();
        status= await res.status();
        expect(Users.page).toBe(1);
        expect.soft(Users.per_page).toBe(6)
        expect(Users.total).toBe(12);
        expect(Users.data).toHaveLength(6);
        expect(Array.isArray(Users.data)).toBeTruthy();
        expect(Users.data).toBeInstanceOf(Array);
        //expect.soft(Array.isArray(status)).toBeTruthy();
        //expect(status).toBeInstanceOf(Array);
        console.log(Users.data[0]);
        expect(Users.data[1].id).toBe(2);
        expect(Users.data[2].email).toBe('emma.wong@reqres.in');
        expect(Users.data[3].first_name).toBe('Eve');
        expect(Users.data[4].last_name).toBe('Morris');
        expect(Users.data[5].avatar).toBe('https://reqres.in/img/faces/6-image.jpg');
    })
    test('404API',async({page})=>{
        expect(res.status()).toBe(404);
        expect(await res.json()).toEqual({});
    })
})