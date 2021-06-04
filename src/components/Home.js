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
                         <h1 className="caption-heading">Search Nearby Lab</h1>
                         <Button href="/patholabs" style={{backgroundColor:"#a5c422",color:"white"}} variant="contained">Pathological Labs</Button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="car-item">
                    <img
                         className="car-img d-block w-100"
                         src={slider2}
                         alt="Second slide"
                    />

                    <Carousel.Caption className="img-caption">
                         <h1 className="caption-heading">Search Nearby Hospitals</h1>
                         <Button href="/hospitals" style={{backgroundColor:"#a5c422",color:"white"}} variant="contained">Hospitals</Button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                    <img
                         className="car-img d-block w-100"
                         src={slider3}
                         alt="Third slide"
                    />

                    <Carousel.Caption className="img-caption">
                         <h1 className="caption-heading">Your Health Insurance</h1>
                         <Button href="/healthisurance" style={{backgroundColor:"#a5c422",color:"white"}} variant="contained">Read More</Button>
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </div>
     )
}

export default Home;