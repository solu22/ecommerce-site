import express  from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connect.js'

dotenv.config()

const app =express()
connectDB()
import products from './data/products.js'


app.get('/',(req,res)=>{
   res.send('backend page')
})

app.get('/api/products',(req,res)=>{
    res.send(products)
})

app.get('/api/products/:id',(req,res)=>{
const product = products.find((p)=>p._id===req.params.id)
res.json(product)
})

const PORT = process.env.PORT

app.listen(PORT,(req,res)=>{
    console.log(`Server started at port ${PORT}`)
})