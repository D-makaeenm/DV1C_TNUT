import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Garelly.module.css'
import { Pagination } from 'swiper/modules';

import {data} from './data'

export default function Garelly() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles['img-student']}>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className={styles['info-text']}>
                            <h2>{item.name}</h2>
                            <p>{item.khoa}</p>
                        </div>
                        <div className={styles['title-text']}>
                            <p>{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
