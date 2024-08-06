import React, { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import styles from './LoginedPage.module.css';
import { items } from './data';
import Topic from "./FunctionPage/Topic/topic";

const LoginedPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigate_item = (link) => {
        navigate("/home" + link);
    }

    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };
    return (
        <div className={styles['logined-page']}>
            <ScrollToTop />
            <div className={styles['content_container']}>
                <Outlet />
                {location.pathname === '/home' && <Topic />}
            </div>
            <div className={styles['task-bar-container']}>
                <div className={styles['title']}>
                    <i className="fa-solid fa-gear"></i>Tính năng
                </div>
                {items.map((item, index) => (
                    <div key={index} className={styles['task-bar-item']} onClick={() => navigate_item(item.link)}>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoginedPage;
