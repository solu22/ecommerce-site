import express  from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleWare.js'
import connectDB from './config/connect.js'
dotenv.config()
const app =express()
connectDB()
app.use(express.json())

import productRoutes from './routes/product.js'

app.get('/',(req,res)=>{
   res.send('backend page')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT,(req,res)=>{
    console.log(`Server started at port ${PORT}`)
})