import Carousel from 'react-bootstrap/Carousel';
import { Stack } from 'react-bootstrap';
import React from 'react'
import './carousel.css'


const CarouselComponent = () => {

    return (
        <Stack style={{ display: 'block', width: 700, padding: 30, }}>
            <Carousel controls={false}>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="https://res.cloudinary.com/dwlcqmdpm/image/upload/v1687112681/vecteezy_businessman-hand-working-with-new-modern-computer-and__663_rw4brh.jpg"
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="https://res.cloudinary.com/dwlcqmdpm/image/upload/v1687112858/vecteezy_businessman-holding-arrow-pointing-to-graph-goal-setting_10136991_575_dgbuem.jpg"
                        alt="Image Two"
                    />
                </Carousel.Item>
            </Carousel>
        </Stack>
    )
}


export default CarouselComponent