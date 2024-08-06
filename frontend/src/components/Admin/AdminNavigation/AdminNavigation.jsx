import React from 'react';
import styles from "./AdminNavigation.module.css";
import Logo from "../../Navigation/Logo"
import {useNavigate} from "react-router-dom";

const AdminNavigation = () => {
    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    }
    return (
        <nav className={styles['nav-bar']}>
            <Logo/>
            <div className={styles['title-p']}>
                <p className={styles.p1}>TRƯỜNG ĐẠI HỌC</p>
                <p className={styles.p2}>KỸ THUẬT CÔNG NGHIỆP THÁI NGUYÊN</p>
            </div>
            <div className={styles.container}>
                <button id="login-btn" onClick={loginClick}>Login</button>
            </div>
        </nav>
    );
};

export default AdminNavigation;
