import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption">
        </div>
        <div className="carousel-item active"></div>
            <img src="https://source.unsplash.com/random/600x400?momos" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/600x400?pizza" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/600x400?dosha" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
