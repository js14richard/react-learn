import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Cart() { 
  const { product_id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${product_id}`)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, [product_id]);


  if (!product_id){
    return (
       <div className='container mt-2 text-center'>
         <img src='./images/empty_cart.png' className='empty_cart_image'></img>
       </div> 
    )
  }

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container products_display text-center'>
      <div className='row mt-5'>
        <div className='col-lg-12 col-md-6 mb-4'>
          <div className="card">
            <img className="card-img-top mt-2 products_detail_image" src={productData.image} alt="Product" />
            <div className="card-body">
              <h6 className="card-text text-secondary">PRODUCT</h6>
              <h5 className='card-title'>{productData.title}</h5>
              <p className="card-text text-secondary">{productData.description}</p>
              <p className="card-text text-secondary">Price: ${productData.price}</p>
              <p className="card-text text-secondary">Rating: {productData.rating.rate}</p>
              <button className='btn btn-success'>Proceed for Payment</button> &nbsp;&nbsp;&nbsp;
              <Link to='/products' className='btn btn-danger'>Back to Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
