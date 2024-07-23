import styles from "./Navigation.module.css"
import Logo from "./Logo";

const Navigation = () =>{
    const loginClick = () => {
        alert("Clicked!");
    }
    return(
        <div className={styles['nav-bar']}>
            <Logo/>
            <div className={styles['title-p']}>
                <p className={styles.p1}>TRƯỜNG ĐẠI HỌC</p>
                <p className={styles.p2}>KỸ THUẬT CÔNG NGHIỆP THÁI NGUYÊN</p>
            </div>
            <div className={styles.container}>
                <button id="login-btn" onClick={loginClick}>Login</button>
            </div>
        </div>
    );
}


export default Navigation;