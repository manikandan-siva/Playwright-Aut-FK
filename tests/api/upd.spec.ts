import{test,expect} from '@playwright/test'

test.describe('Put-Patch-Delete',()=>{
    test('put',async({request})=>{
        const body=await request.get('https://reqres.in/api/users/1',
            {
                headers:{
                    'x-api-key':'free_user_3EtVCaF2Tfp3zv83DOpHJXBI1X4'
                }
            }
        )
        console.log(body.status())
        console.log(await body.json())

       const body2=await request.put('https://reqres.in/api/users/1',
            {
                headers:{
                    'x-api-key':'free_user_3EtVCaF2Tfp3zv83DOpHJXBI1X4'
                },
                data:{
                    name: ' Radhe',
                    job : ' Full stack dev'
                }
            }
        )
        console.log(body2.status())
        console.log(await body2.json())
    })
    test('patch',async({request})=>{
        const body=await request.patch('https://reqres.in/api/users/1',
            {
                headers:{
                    'x-api-key':'free_user_3EtVCaF2Tfp3zv83DOpHJXBI1X4'
                },
                data:{
                    job : 'sheperd'
                }
            }
        )
        console.log(body.status())
        console.log(await body.json())
    })
})