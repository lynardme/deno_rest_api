// import { v4 } from 'https://deno.land/std/uuid/mod.ts'
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

// @desc  Get single product
// @route GET /api/v1/product/:id
const getProduct = ( { params, response }: { params: { id: number }, response: any }) => {
  const product: Product | undefined = products.find(p => p.id == params.id)
  if (product) {
    response.status = 200
    response.body = {
      success: true,
      data: product
    }
  } else {
    response.status = 404
    response.body = {
      success: false,
      msg: 'no product'
    }
  }
}

// @desc  add product
// @route POST /api/v1/product
const addProduct = async ( { request, response }: { request: any, response: any }) => {
  const body = await request.body()
  if(!request.hasBody) {
    response.status = 400
    response.body = {
      success:false,
      msg: 'No data'
    }
  } else {
    const product: Product = body.value
    console.log(product)
    product.id = Math.floor((Math.random() * 20) + 11)
    console.log(product)
    products.push(product)
    response.status = 201
    response.body = {
      success: true,
      data: product
    }
  }
}

// @desc  update product
// @route PUT /api/v1/product/:id
const updateProduct = async( { params, request, response }: { params: {id: number}, request: any, response: any }) => {
  const product: Product | undefined = products.find(p => p.id == params.id)
  if (product) {
    const body = await request.body()
    const updateData: { first_name?: string; last_name?: string; description?: string; price?: number } = body.value
    products = products.map(p => p.id == params.id ? { ...p, ...updateData } : p )
    response.status = 200
    response.body = {
      success: true,
      data: products
    }

  } else {
    response.status = 404
    response.body = {
      success: false,
      msg: 'no product'
    }
  }
}

// @desc  delete product
// @route DELETE /api/v1/product/:id
const deleteProduct = ( { response }: { response: any }) => {
  response.body = 'deleteProduct'
}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }