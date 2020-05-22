import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts } from './controllers/products.ts'

const router = new Router()
router.get('/api/v1/products', getProducts)
// router.get('/api/v1/products', ( { response }: { response: any}) => {
//     response.body = "Get Products"
// })

export default router

