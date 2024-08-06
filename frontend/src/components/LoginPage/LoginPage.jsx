import React, { useEffect, useState } from 'react';
import styles from './LoginPage.module.css';
import anime from 'animejs/lib/anime.es.js';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    useEffect(() => {
        let current = null;

        const handleFocus = (e) => {
            if (current) current.pause();
            current = anime({
                targets: 'path',
                strokeDashoffset: {
                    value: e.target.id === 'username' ? 0 : (e.target.id === 'password' ? -336 : -730),
                    duration: 700,
                    easing: 'easeOutQuart'
                },
                strokeDasharray: {
                    value: e.target.id === 'submit' ? '530 1386' : '240 1386',
                    duration: 700,
                    easing: 'easeOutQuart'
                }
            });
        };

        const usernameElement = document.querySelector('#username');
        const passwordElement = document.querySelector('#password');
        const submitElement = document.querySelector('#submit');

        if (usernameElement) usernameElement.addEventListener('focus', handleFocus);
        if (passwordElement) passwordElement.addEventListener('focus', handleFocus);
        if (submitElement) submitElement.addEventListener('mouseover', handleFocus);

        return () => {
            if (usernameElement) usernameElement.removeEventListener('focus', handleFocus);
            if (passwordElement) passwordElement.removeEventListener('focus', handleFocus);
            if (submitElement) submitElement.removeEventListener('mouseover', handleFocus);
        };
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/users/login', {
                username,
                password
            });
            if (response.data === 'Login successful') {
                alert('Đăng nhập thành công');
                navigate("/home");
            } else {
                alert('Đăng nhập không thành công');
            }
        } catch (error) {
            alert('Đăng nhập không thành công');
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.login}>Đăng nhập</div>
                    <div className={styles.eula}>Dịch vụ một cửa TNUT</div>
                </div>
                <div className={styles.right}>
                <svg viewBox="0 0 320 300" className={styles["svg"]}>
                        <defs>
                            <linearGradient id="linearGradient" x1="13" y1="193.5" x2="307" y2="193.5" gradientUnits="userSpaceOnUse">
                                <stop style={{ stopColor: '#ff00ff' }} offset="0" />
                                <stop style={{ stopColor: '#ff0000' }} offset="1" />
                            </linearGradient>
                        </defs>
                        <path className={styles['path']} d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                    </svg>
                    <div className={styles.form}>
                        <label className={styles['label']} htmlFor="username">Tài khoản</label>
                        <input
                            className={styles['input']}
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className={styles['label']} htmlFor="password">Mật khẩu</label>
                        <input
                            className={styles['input']}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            id="submit"
                            className={styles.button}
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
