import {test,expect} from '@playwright/test';
test.describe.serial('User API',()=>{
     let req : any;
       let res: any;
       let status: number;
    test.beforeAll(async({request})=>{
   req=await request.get('https://reqres.in/api/users/1', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'free_user_3EtVCaF2Tfp3zv83DOpHJXBI1X4' // Replace with your actual key
                
            }});
   status=req.status();
   res=await req.json();
   
        });
    test('Req1',async({request})=>{
          expect(status).toBe(200);
        
        console.log(res);
        console.log(res.page);
        console.log(res.data.length)
    })
 
    test('User1',async({request})=>{
    
})
}

)