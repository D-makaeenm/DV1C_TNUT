// Navigation.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Navigation.module.css";
import Logo from "./Logo";

const Navigation = () => {
    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    }
    return (
        <nav className={styles['nav-bar']}>
            <Logo />
            <div className={styles['title-p']}>
                <p className={styles.p1}>TRƯỜNG ĐẠI HỌC</p>
                <p className={styles.p2}>KỸ THUẬT CÔNG NGHIỆP THÁI NGUYÊN</p>
            </div>
            <div className={styles.container}>
                <button id="login-btn" onClick={loginClick}>Login</button>
            </div>
        </nav>
    );
}

export default Navigation;
