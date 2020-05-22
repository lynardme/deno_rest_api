import { Product } from '../types.ts'

let products: Product[] = 
[{
  "id": 1,
  "first_name": "Karry",
  "last_name": "Bick",
  "description": "Corvus albicollis",
  "price": 64
}, {
  "id": 2,
  "first_name": "Foss",
  "last_name": "Wyse",
  "description": "Chloephaga melanoptera",
  "price": 54
}, {
  "id": 3,
  "first_name": "Ancell",
  "last_name": "Challener",
  "description": "Phalacrocorax niger",
  "price": 13
}, {
  "id": 4,
  "first_name": "Judi",
  "last_name": "Matteau",
  "description": "Equus burchelli",
  "price": 74
}, {
  "id": 5,
  "first_name": "Carlo",
  "last_name": "Panton",
  "description": "Corvus albus",
  "price": 91
}, {
  "id": 6,
  "first_name": "Elysia",
  "last_name": "Fenge",
  "description": "Chionis alba",
  "price": 68
}, {
  "id": 7,
  "first_name": "Amalia",
  "last_name": "Fransoni",
  "description": "Stenella coeruleoalba",
  "price": 44
}, {
  "id": 8,
  "first_name": "Prisca",
  "last_name": "Potteridge",
  "description": "Milvus migrans",
  "price": 89
}, {
  "id": 9,
  "first_name": "Jo",
  "last_name": "Wisher",
  "description": "Eudromia elegans",
  "price": 80
}, {
  "id": 10,
  "first_name": "Bren",
  "last_name": "Haynes",
  "description": "Boselaphus tragocamelus",
  "price": 17
}];

// @desc  Get all products
// @route GET /api/v1/products
const getProducts = ( { response }: { response: any }) => {
  response.body = {
    success: true,
    data: products
  }
}

export { getProducts }