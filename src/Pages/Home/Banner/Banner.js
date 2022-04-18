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
                        <p>Be a strong person and overcome your depression.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Qr9QVX3/claudia-wolff-ow-Bcefxgr-IE-unsplash-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Am I Depressed? 6 Signs You Should Know About</h3>
                        <p>Everyone feels low from time to time, so it’s not always easy to know when it is...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/3BXqSNK/usman-yousaf-atn5-XAZt-RYE-unsplash-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 >How to Talk About Your Mental Health</h3>
                        <p>You’ve lost interest in activities that you used to enjoy. Perhaps you have been seeing less of your friends or family</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;