import React, { useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [image_url,setImageURL] = useState('http://source.unsplash.com/1200x700/?cricket')

    const image_url1 = 'http://source.unsplash.com/1200x700/?sport'
    const image_url2 = 'http://source.unsplash.com/1200x700/?carrom'
    const image_url3 = 'http://source.unsplash.com/1200x700/?chess'

    const change_image = async ()=>{
        try{
            const response = await axios.get('http://source.unsplash.com/1200x700/?cricket')
            const newImageUrl = response.request.responseURL;
            setImageURL(newImageUrl)
            
        }
        catch(error){
            console.error('Error fetching new image:', error);
        }
    }

  return (
    <div className='container text-center'>
        <div className='carousel_section row'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="http://source.unsplash.com/1200x700/?cricket" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="http://source.unsplash.com/1200x700/?cricketer" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="http://source.unsplash.com/1200x700/?wicket" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className='home_content'>
                <h1>Explore the world of Sports</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio alias nemo eos recusandae odit corrupti sunt officiis quisquam at? Placeat a repellat quia quis possimus suscipit vel illum voluptatibus facilis.</p>

                <button className='btn btn-primary btn-lg' onClick={change_image}>Explore now</button>
            </div>
            
        </div>

        <div className='card_section mt-5 '>
            <div className='row d-flex justify-content-around'>
                <div className="col-md-3">
                  <div className="card">
                    <img src={image_url1} className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                      <h5 className="card-title">Sports Kits</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae!</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <img src={image_url2} className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                      <h5 className="card-title">Outdoor Games</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae!</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <img src={image_url3} className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                      <h5 className="card-title">Indoor Games</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae!</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
