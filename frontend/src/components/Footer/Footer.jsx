import React, {useState} from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [paragraphs] = useState([
        'TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP THÁI NGUYÊN',
        'Cổng thông tin sinh viên và giảng viên',
        'Địa chỉ: Số 666 Đ. 3/2, P, Thành phố Thái Nguyên, Thái Nguyên, Việt Nam',
        'Số điện thoại: +84 2083847145'
    ]);
    const YTClick = () => {
        window.open('https://www.youtube.com/@truonghkythuatcongnghiep2860');
    }
    const FBClick = () => {
        window.open('https://www.facebook.com/Truongdhktcn/');
    }
    const INClick = () => {
        window.open('https://www.instagram.com/truongdhktcn/');
    }
    const TWClick = () => {
        window.open('https://twitter.com/truongdhktcn');
    }
    return (
        <div className={styles.footer}>
            <div className={styles['infor-container']}>
                {paragraphs.map((text, index) => (
                    <p key={index}
                       className={index === 0 ? styles['first-p'] : index === 1 ? styles['second-p'] : ''}>{text}</p>
                ))}
                <small>Copyright © 2020 Trường Đại Học Kỹ thuật Công nghiệp</small>
            </div>
            <div className={styles.Linkhref}>
                <a className={styles.facebook} onClick={FBClick} href="#"><i
                    className="fa-brands fa-square-facebook"></i></a>
                <a className={styles.instagram} onClick={INClick} href="#"><i
                    className="fa-brands fa-square-instagram"></i></a>
                <a className={styles.youtube} onClick={YTClick} href="#"><i className="fa-brands fa-youtube"></i></a>
                <a className={styles.twitter} onClick={TWClick} href="#"><i className="fa-brands fa-square-twitter"></i></a>
            </div>
            <div className={styles['footer-map']}>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14843.780183668687!2d105.844884!3d21.549004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313521406ca0840d%3A0x40cb6f8d2cad2168!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBL4bu5IFRodeG6rXQgQ8O0bmcgTmdoaeG7h3A!5e0!3m2!1svi!2sus!4v1721287037759!5m2!1svi!2sus"
                ></iframe>
            </div>
        </div>
    );
}

export default Footer;