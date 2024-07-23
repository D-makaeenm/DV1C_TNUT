import {text} from "./data-opcr";
import styles from './card-opcr.module.css'
import React from "react";

const CardOpcr = () => {
    return (
        <div className={styles['Card-opcr']}>
            <p className={styles['Card-opcr-title']}>Tiêu chí hoạt động</p>
            <div className={styles['opcr-content']}>
                {text.map(item => (
                    <div key={item.id} className={styles['content-item']}>
                        <p className={styles['icon-item']}>{item.icon}</p>
                        <p className={styles['title-item']}>{item.title}</p>
                        <p className={styles['text-item']}>{item.text}</p>
                        <button className={styles['card-button']}>Uy tín</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardOpcr;