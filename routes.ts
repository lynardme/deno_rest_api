import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts, getProduct, addProduct, deleteProduct, updateProduct } from './controllers/products.ts'

const router = new Router()
router.get('/api/v1/products', getProducts)
      .get('/api/v1/product/:id', getProduct)
      .post('/api/v1/product', addProduct)
      .put('/api/v1/product/:id', updateProduct)
      .delete('/api/v1/product/:id', deleteProduct)

// router.get('/api/v1/products', ( { response }: { response: any}) => {
//     response.body = "Get Products"
// })

export default router

