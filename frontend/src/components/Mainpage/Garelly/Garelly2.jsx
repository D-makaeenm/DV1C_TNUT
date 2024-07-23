import React, { useState , useEffect} from 'react';
import styles from './Garelly2.module.css'
import image1 from '../../../image/hub_background.jpg'
import image2 from '../../../image/background2.png'
import 'animate.css';

const images  = [image1, image2];

const Garrely2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation('animate__fadeOutLeft');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setAnimation('animate__fadeInRight');
            }, 400);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.garellyContainer}>
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={`animate__animated ${animation}`}
            />
        </div>
    );
}

export default Garrely2;
