import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from 'react-bootstrap';

const SlidingBanner = () => {
  return (
    <>
  <div className="slide-image">
  <Carousel>
  <Carousel.Item>
  <a className="live-tv" href="#Upcomm"> <i class="fas fa-stream">Live</i></a>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU"
      alt="First slide"
    />
    
    <Carousel.Caption>
    
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a className="live-tv" href="#Upcomm"> <i class="fas fa-stream">Live</i></a>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a className="live-tv" href="#Upcomm"> <i class="fas fa-stream">Live</i></a>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>    
    </>
  );
};

export default SlidingBanner;
