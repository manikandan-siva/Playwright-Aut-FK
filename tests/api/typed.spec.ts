import{test,expect, APIResponse} from '../../fixtures/api.fixture'
import{CreateNewUser, error, ErrorRes, SingleUser, TokenGen, UserListResponse} from '../../data/apiTypes'
import {API_CONFIG} from '../../config/apiConfig'

let body:APIResponse
let res:UserListResponse
let usr:SingleUser
let newUser:CreateNewUser
let tokenGen:TokenGen
const {endpoints}=API_CONFIG.reqres
test.describe('Typed API',()=>{
    test('Typed User List',async({reqresContext})=>{
        body=await reqresContext.get(endpoints.users)
        res=await body.json()
        expect(res.data[0].id).toBe(1); // here we will get suggestions from playwright typescript and error if we give typo like di or iden instead of id
    })
    test('Typed single user',async({reqresContext})=>{
        body=await reqresContext.get(endpoints.users+'/1')
        usr=await body.json()
        console.log(usr,usr.support.url)
    })
    test('typed post',async({reqresContext})=>{
        body=await reqresContext.post(endpoints.users,
            {
                data:{
                    name:'Rajan',
                    job:'captain'
                }
            }
        )
        newUser=await body.json();
        console.log(newUser,newUser.id,newUser.job,newUser.createdAt)
    })
    test('typed token gen',async({reqresContext})=>{
        body=await reqresContext.post(endpoints.login,
            {
                data:{
                    email:'eve.holt@reqres.in',
                    password:'cityslicka'
                }
            }
        )
        console.log((await body.json() as TokenGen).token)
    })
    test('error',async({reqresContext})=>{
        body=await reqresContext.post(endpoints.login)
        console.log((await body.json() as ErrorRes).error)
    })
})