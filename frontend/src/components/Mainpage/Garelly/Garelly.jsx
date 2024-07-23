import React from 'react';
import styles from './Garelly.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from './images/z5638421675513_c607d737709d48c3202279f41f2f23f9.jpg';
import image2 from './images/z5638421680588_a7b3f535b1da3fd553389139bf6aa348.jpg';

const images = [
    {
        src: image1,
        alt: 'Image 1'
    },
    {
        src: image2,
        alt: 'Image 2'
    }
];

const Garelly = () => {
    return (
        <div className={styles.SlideShow}>
            <Slide slidesToShow={1} slidesToScroll={1}>
                {images.map((image, index) => (
                    <div className="each-slide-effect" key={index}>
                        <div
                            className={styles.eachSlide}
                            style={{
                                backgroundImage: `url(${image.src})`,
                            }}
                            alt={image.alt}
                        ></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Garelly;
