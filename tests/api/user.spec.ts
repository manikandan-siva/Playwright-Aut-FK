import {test,expect,APIResponse} from '../../fixtures/api.fixture';
import {SingleUser} from '../../data/apiTypes'
import {API_CONFIG} from '../../config/apiConfig'

const {endpoints }= API_CONFIG.reqres
test.describe.serial('User API',()=>{
     let req : APIResponse;
       let res: SingleUser;
       let status: number;
    test.beforeAll(async({reqresContext})=>{
   req=await reqresContext.get(endpoints.users+'/1')/*, {
            headers: {
                'Content-Type': 'application/json',
                //'x-api-key':  // Replace with your actual key
                
            }});*/
   status=req.status();
   res=await req.json();
   
        });
    test('Req1',async({})=>{
          expect(status).toBe(200);
        
        console.log(res);
        console.log(res.data.avatar);
        console.log(res.support.text)
    })
 
 
}

)