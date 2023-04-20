import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >

    <Carousel.Item interval={3000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Мягкая мебель</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item interval={3000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>Корпусная мебель</h3>
      </Carousel.Caption>


    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/3.jpg"
        alt="Third slide"
      />
       <Carousel.Caption>
      <h3>Кухонные гарнитуры</h3>
      </Carousel.Caption>


    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/4.jpg"
        alt="Third slide"
      />
       <Carousel.Caption>
      <h3>Мебель для спальни</h3>
      </Carousel.Caption>


    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/5.jpg"
        alt="Third slide"
      />
       <Carousel.Caption>
      <h3>Мебель для детской</h3>
      </Carousel.Caption>

      
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/6.jpg"
        alt="Third slide"
      />
       <Carousel.Caption>
      <h3>Прихожая</h3>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  </div>
  )
}

export default Slider