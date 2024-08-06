import logo from "../../image/logo.png";
import {useNavigate} from "react-router-dom";


const Logo = () =>{
    const navigate = useNavigate();
    const ToHome = () =>{
        navigate("/");
    }
    return (
        <img src={logo} alt="logo" onClick={ToHome}/>
    );
}

export default Logo;