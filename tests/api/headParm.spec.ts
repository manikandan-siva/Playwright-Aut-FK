import {test,expect} from '@playwright/test';

test.describe('Headers & Params',() =>{
    test('params',async({request})=>{
        const body=await request.get('https://reqres.in/api/users/',
            {
                headers:{
                   // 'x-api-key':,
                },
                params:{
                    page : 2,
                    per_page: 3
                }
            }
        )
        await expect(body).toBeOK();
        console.log(await body.json())
    })
    test('token gen',async({request})=>{
        const body=await request.post('https://reqres.in/api/login',
            {
                 headers:{
                    //'x-api-key':,
                },
                data:{
                    email:'eve.holt@reqres.in',
                   password:'cityslicka'
                }
            }
        )
        console.log(body.status(), (await body.json()).token)
        const token=(await body.json()).token

        const res=await request.get('https://reqres.in/api/users',
            {
                headers:{
                    //'x-api-key':,
                    'Authorization':'Bearer ${token}',
                    'Content-Type':'application/json'
                }
            }
        )
        console.log(res.status(), await res.json(), res.headers()['content-type'])
    })
    test('contenttype',async({request})=>{
        const body=await request.post('https://reqres.in/api/users',
            {
                headers:{
                    'content-type':'application/json'
                },
                data:{
                    'name':'main',
                    'job':'sdet'
                }
            }
        )
        console.log(await body.json())
    })
})