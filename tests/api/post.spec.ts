import {test,expect,APIResponse} from '../../fixtures/api.fixture'
import {API_CONFIG} from '../../config/apiConfig'
import {CreateNewUser,TokenGen} from '../../data/apiTypes'

let res:APIResponse
let body:CreateNewUser
let body1:TokenGen
const {endpoints}=API_CONFIG.reqres
test.describe('Post Req',()=>{
    test('New user',async({reqresContext})=>{
         res=await reqresContext.post(endpoints.users,
        {
            /*headers:{
               // 'x-api-key':
            },*/
            data:{
                name:'Rajendran',
                job:'Teacher'
            }
        })
        expect (res.status()).toBe(201);
        body=await res.json();
        console.log(body);
        expect(body.createdAt).toBeDefined();
        expect(typeof body.id).toBe('string');

    })
    test('Register',async({reqresContext})=>{
         res=await reqresContext.post(endpoints.login,
            {
                /*headers:{
                   // 'x-api-key':
                },*/
                data:{
                    email : "eve.holt@reqres.in",
                    password : "cityslicka"
                }
            }
        )
        expect(res.status()).toBe(200)
        body1=await res.json()
        console.log(body1.token)
    })
})