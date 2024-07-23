import React from 'react';
import styles from "./status.module.css";


const statusItems = [
    { icon: 'fa-clipboard-list', count: '20002', label: 'Thủ tục' },
    { icon: 'fa-box-archive', count: '12314', label: 'Lượt tiếp nhận' },
    { icon: 'fa-print', count: '12311', label: 'Đã giải quyết' },
    { icon: 'fa-users', count: '435', label: 'Người dùng' },
];

const Status = () =>{
    return (
        <div className={styles['status']}>
            {statusItems.map((item, index) => (
                <div className={styles['status-item']} key={index}>
                    <i className={`fa-solid ${item.icon}`}></i>
                    <p1>{item.count}</p1>
                    <p2>{item.label}</p2>
                </div>
            ))}
        </div>
    );
}

export default Status;