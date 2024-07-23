import axios from 'axios';
const API_URL = 'http://localhost:8080';
const ApiShowUser =async (token)=>{
    try{
      
        const response = await axios.get(`${API_URL}/user`,{
            headers: {
                'Authorization': `Bearer ${token}` // Gửi token qua header Authorization
            }
        });
        const  content = response.data.content;
         // Chuyển đổi dữ liệu thành chuỗi JSON
         const contentString = JSON.stringify(content, null, 2);
        alert( contentString);

    }catch(err){
        console.log("Lỗi : ",err);
    }

}
export default ApiShowUser;