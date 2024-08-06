import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [name, setName] = useState('');

    const handleCreateUser = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/createUser', {
                name: name
            });
            console.log(response.data); // Xử lý dữ liệu trả về từ backend nếu cần thiết
            alert('Tạo người dùng thành công!');
            setName(''); // Đặt lại giá trị của ô input sau khi gửi thành công
        } catch (error) {
            console.error('Lỗi khi tạo người dùng:', error);
            alert('Có lỗi xảy ra khi tạo người dùng.');
        }
    };

    return (
        <div>
            <h1>React App</h1>
            <input
                type="text"
                placeholder="Nhập tên người dùng"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleCreateUser}>
                Tạo người dùng
            </button>
        </div>
    );
};

export default App;
