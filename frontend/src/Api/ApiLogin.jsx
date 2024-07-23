import axios from 'axios';
import React from 'react';
const API_URL = 'http://localhost:8080';
const ApiLogin =async (username,password)=>{
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {
            username: username,
            password: password
        });
 
    const token = response.data.result.token;  
       alert('Token:' +  token);
       localStorage.clear();
  localStorage.setItem("token",token);

    }catch(err){
        console.log("Lỗi đăng nhập: ",err);
    }

}
export default ApiLogin;