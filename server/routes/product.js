
import express from 'express'
import {getProduct, findOneProduct, createProduct} from '../controllers/product.js'


const router = express.Router()

router.get('/', getProduct)
router.get('/:id', findOneProduct)
router.post('/', createProduct)



export default router