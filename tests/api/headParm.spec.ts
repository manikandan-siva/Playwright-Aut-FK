import {test,expect} from '../../fixtures/api.fixture'
import {API_CONFIG} from '../../config/apiConfig'

const { endpoints } = API_CONFIG.reqres

test.describe('Headers & Params',() =>{
    test('params',async({reqresContext})=>{
        const body=await reqresContext.get(endpoints.users,
            {
               params:{
                    page : 2,
                    per_page: 3
                }
            }
        )
        await expect(body).toBeOK();
        console.log(await body.json())
    })
    test('token gen',async({reqresContext})=>{
        const body=await reqresContext.post(endpoints.login,
            {
                data:{
                    email:'eve.holt@reqres.in',
                   password:'cityslicka'
                }
            }
        )
        console.log(body.status(), (await body.json()).token)
        const token=(await body.json()).token

        const res=await reqresContext.get(endpoints.users,
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
    test('contenttype',async({reqresContext})=>{
        const body=await reqresContext.post(endpoints.users,
            {
               /* headers:{
                    'content-type':'application/json'
                },*/
                data:{
                    'name':'main',
                    'job':'sdet'
                }
            }
        )
        console.log(await body.json())
    })
})