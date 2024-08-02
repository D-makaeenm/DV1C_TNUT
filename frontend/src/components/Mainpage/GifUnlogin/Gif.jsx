import styles from './Gif.module.css';
import giff from "../../../image/0718-ezgif.com-video-to-gif-converter800.gif";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const GifUnlogin = () => {
    const navigate = useNavigate();
    const loginClick = () => {
        navigate('/login');
    }
    const [paragraphs] = useState([
        { icon: <i className="fa-solid fa-triangle-exclamation"></i>, text: "Quy Định" },
        { icon: <i className="fa-solid fa-right-to-bracket"></i>, text: "Đăng nhập", onClick: loginClick },
    ]);
    return (
        <div className={styles['Gif-container']}>
            <img src={giff} alt="GIF"/>
            <div className={styles.overlay}></div>
            <div className={styles['Gif-container-item']}>
                <p className={styles.Headtitle}>TNUT</p>
                <div className={styles['Gif-container-item-button']}>
                    {paragraphs.map((item, index) => (
                        <div key={index} className={styles['Gif-container-button-icon-child']} onClick={item.onClick}>
                            <p>{item.icon}</p>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default GifUnlogin;