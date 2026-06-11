import {test,expect} from '@playwright/test'

test.describe('Post Req',()=>{
    test('New user',async({request})=>{
        const res=await request.post('https://reqres.in/api/users/',
        {
            headers:{
                'x-api-key':'free_user_3EtVCaF2Tfp3zv83DOpHJXBI1X4'
            },
            data:{
                name:'Rajendran',
                job:'Teacher'
            }
        })
        expect (res.status()).toBe(201);
        const body=await res.json();
        console.log(body);
        expect(body.createdAt).toBeDefined();
        expect(typeof body.id).toBe('string');

    })
    test('Register',async({request})=>{
        const res=await request.post('https://reqres.in/api/register',
            {
                headers:{
                    'x-api-key':'free_user_3EtVCaF2Tfp3zv83DOpHJXBI1X4'
                },
                data:{
                    //email:'email@email.com',
                    //password: 'program'
                    "name": "cerulean",
         "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
                }
            }
        )
        expect(res.status()).toBe(201)
        const body=await res.json()
        console.log(body)
    })
})