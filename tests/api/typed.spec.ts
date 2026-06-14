import{test,expect, APIResponse} from '@playwright/test'
import{CreateNewUser, error, ErrorRes, SingleUser, TokenGen, UserListResponse} from '../../data/apiTypes'

let body:APIResponse
let res:UserListResponse
let usr:SingleUser
let newUser:CreateNewUser
let tokenGen:TokenGen
test.describe('Typed API',()=>{
    test('Typed User List',async({request})=>{
        body=await request.get('https://reqres.in/api/users')
        res=await body.json()
        expect(res.data[0].id).toBe(1); // here we will get suggestions from playwright typescript and error if we give typo like di or iden instead of id
    })
    test('Typed single user',async({request})=>{
        body=await request.get('https://reqres.in/api/users/1')
        usr=await body.json()
        console.log(usr,usr.support.url)
    })
    test('typed post',async({request})=>{
        body=await request.post('https://reqres.in/api/users',
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
    test('typed token gen',async({request})=>{
        body=await request.post('https://reqres.in/api/login',
            {
                data:{
                    email:'eve.holt@reqres.in',
                    password:'cityslicka'
                }
            }
        )
        console.log((await body.json() as TokenGen).token)
    })
    test('error',async({request})=>{
        body=await request.post('https://reqres.in/api/login')
        console.log((await body.json() as ErrorRes).error)
    })
})