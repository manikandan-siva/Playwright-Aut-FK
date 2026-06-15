import{test,expect} from '../../fixtures/api.fixture'
import {API_CONFIG} from '../../config/apiConfig'

const { endpoints } = API_CONFIG.reqres
test.describe('Fixture API',()=>{
    test('Fixtured Get  Users',async({reqresContext})=>{
        const response=await reqresContext.get(endpoints.users)
        expect (response.ok()).toBeTruthy()

    })
    test('Fixtured single user',async({reqresContext})=>{
        const response=await reqresContext.get(`${endpoints.users}/2`)
        console.log(await response.json())
    })
    test('Fixtured login',async({reqresContext})=>{
        const response=await reqresContext.post(endpoints.login,
            {
                data: {
                    email : "eve.holt@reqres.in",
                    password : "cityslicka"
                }
            }
        )
        console.log(await response.json())
    })
})
