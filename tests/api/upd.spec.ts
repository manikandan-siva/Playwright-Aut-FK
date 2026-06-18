import{test,expect} from '../../fixtures/api.fixture'
import { API_CONFIG } from '../../config/apiConfig'

const {endpoints}=API_CONFIG.reqres
test.describe('Put-Patch-Delete',()=>{
    test('put',async({reqresContext})=>{
        const body=await reqresContext.get(endpoints.users,
            {
                headers:{
                    // 'x-api-key':
                }
            }
        )
        console.log(body.status())
        console.log(await body.json())

       const body2=await reqresContext.put(endpoints.users+'/1',
            {
                headers:{
                    //'x-api-key':
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
    test('patching',async({reqresContext})=>{
        const body=await reqresContext.patch(endpoints.login+'1',
            {
                headers:{
                    //'x-api-key':
                },
                data:{
                    job : 'sheperd'
                }
            }
        )
        console.log(body.status())
        console.log(await body.text())
    })
})