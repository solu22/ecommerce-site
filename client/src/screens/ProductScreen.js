
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useSelector, useDispatch } from 'react-redux';
import { productDetail } from '../redux/actions/product';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const {loading,product, error} = useSelector((state)=> state.productDetails)

  useEffect(()=>{
   dispatch(productDetail(match.params.id))
  },[dispatch,match])

  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Back
      </Link>
      {loading && <Loader />}
         {error && <Error variant= 'danger'>{error}</Error>}
      <Row>
         <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col> 

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews}reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInstock>0?'In Stock': 'Out of Srock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                  <Button className='btn-block' type='button' disabled={product.countInstock === 0}>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
