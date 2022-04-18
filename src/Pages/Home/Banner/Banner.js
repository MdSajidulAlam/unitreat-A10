import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel className=''>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/kg77hCv/towfiqu-barbhuiya-g-GIxh0i-Bx2-I-unsplash-1.jpg
                    
                    "
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A Strong Image of
                            Yourself is My Success</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Qr9QVX3/claudia-wolff-ow-Bcefxgr-IE-unsplash-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/3BXqSNK/usman-yousaf-atn5-XAZt-RYE-unsplash-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;