import React from 'react';
import styles from "./Form.module.css"
import {data} from "./data";

const Form = () => {
    return (
        <div className={styles["content"]}>
            <h2>Các loại biểu mẫu</h2>
            <div className={styles["content-item"]}>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Form;
