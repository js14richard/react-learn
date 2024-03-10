import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Product() {
    const [productData, setProductData] = useState([]);
 
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          setProductData(response.data);
        })
        .catch(error => {
          console.error(error);
        });

    }, []);

  return (
    <div className='container products_display text-center'>
      <div className='row mt-5'>
        {productData.map(product => (
          <div className='col-lg-3 col-md-6 mb-4' key={product.id}>
            <div className="card">
              <img className="card-img-top mt-2 products_card_image" src={product.image} alt="Product" />
              <div className="card-body">
                <h6 className="card-text text-secondary">PRODUCT</h6>
                <h5 className='card-title'>{product.title}</h5>
                <p className="card-text text-secondary">Price: ${product.price}</p>
                <p className="card-text text-secondary">Rating: {product.rating.rate}</p>
                <Link to={`cart/${product.id}`} className='btn btn-success'>Add to cart</Link> &nbsp;&nbsp;&nbsp;
                <Link to={`cart/${product.id}`} className='btn btn-warning'>More details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>     
    </div>
  )
}
