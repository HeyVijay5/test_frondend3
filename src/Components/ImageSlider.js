import React from "react";
import "./ImageSlider.css";
import { Carousel } from "react-bootstrap";

function ImageSlider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="https://biyanitechnologies.com/img/library%20management%20system.jpg"
            alt="WELCOME TO  READIFY!"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.cxotoday.com/wp-content/uploads/2023/03/Digital-Libraries.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.elibrarysoftware.com/img/digital-library-system.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300="
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://edutinker.com/wp-content/uploads/2022/12/Why-Invest-in-a-Library-Management-System.png"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
