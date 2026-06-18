import{test as base,request,APIRequestContext} from '@playwright/test'
import{API_CONFIG} from '../config/apiConfig'

type ApiFixtures={reqresContext:APIRequestContext}

export const test=base.extend<ApiFixtures>({
    reqresContext:async({},use)=>{
        const Contextreqres=await request.newContext({
            baseURL:API_CONFIG.reqres.baseUrl,
            extraHTTPHeaders:{'x-api-key':process.env.API_KEY!,
                 'content-type':'application/json'
            }
    })
await use(Contextreqres)
await Contextreqres.dispose()
}   

})
export {expect,APIResponse} from '@playwright/test'
