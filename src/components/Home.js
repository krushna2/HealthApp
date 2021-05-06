import React from 'react';
import {Carousel} from "react-bootstrap";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import Button from "@material-ui/core/Button";

const Home = () => {
     return(
          <div className="home">
               <Carousel>
                    <Carousel.Item className="car-item">
                    <img
                         className="car-img d-block w-100"
                         src={slider1}
                         alt="First slide"
                    />
                    <Carousel.Caption className="img-caption">
                         <h1 className="caption-heading">Healthy Livings</h1>
                         <Button variant="contained" color="primary">Meet Doctors</Button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="car-item">
                    <img
                         className="car-img d-block w-100"
                         src={slider2}
                         alt="Second slide"
                    />

                    <Carousel.Caption className="img-caption">
                         <h1 className="caption-heading">New Lifestyle</h1>
                         <Button variant="contained" color="primary">More About Us</Button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                    <img
                         className="car-img d-block w-100"
                         src={slider3}
                         alt="Third slide"
                    />

                    <Carousel.Caption className="img-caption">
                         <h1 className="caption-heading">Your Health Benefits</h1>
                         <Button variant="contained" color="primary">Read Stories</Button>
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </div>
     )
}

export default Home;