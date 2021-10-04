import React, { useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader';
import Error from '../components/Error';
import { listProducts } from '../redux/actions/product';
import {useDispatch, useSelector} from 'react-redux'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const {loading, error, products} = useSelector((state)=>state.productList)


  useEffect(()=>{
   dispatch(listProducts())
  },[dispatch])

    return (
        <>
         <h1>Latest Products</h1>
         {loading && <Loader />}
         {error && <Error variant= 'danger'>{error}</Error>}
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
