import styles from "./Navigation.module.css"
import Logo from "./Logo";
import { useState } from "react";
import LoginForm from '../Form/Login'
import ApiShowUser from "../../Api/ApiShowUser";
const Navigation = () =>{
    
    const [showLoginForm, setShowLoginForm] = useState(false);
    const[data,setData]= useState([]);
    const loginClick = () => {
        setShowLoginForm(true);
    };

    const closeLoginForm = () => {
        setShowLoginForm(false);
    };

    const showUser=()=>{
        const token = localStorage.getItem("token");
        console.log(token);
        const data = ApiShowUser(token);
        setData(data);
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
            <button onClick={showUser}>Show</button>
            {data && <div>{JSON.stringify(data)}</div>}
            <LoginForm open={showLoginForm} onClose={closeLoginForm} />
        </div>
    );
}


export default Navigation;