import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get('/api/products')
       setProducts(response.data)
   
    }
    fetchData()
  },[])

    return (
        <>
         <h1>Latest Products</h1>
         <Row>
         {products.map((product)=>(
          <Col sm={12} md={6} lg={4} xl= {3} key ={product._id}>
            <Product product = {product} />
          </Col>
          ))}  
         </Row>
           
        </>
    )
}

export default HomeScreen
