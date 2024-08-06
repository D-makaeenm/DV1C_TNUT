import React from 'react';
import styles from '../CSS/all.module.css'

const So26 = () => {
    //logic in here
    return (
        <div className={styles["main-function"]}>
            <div className={styles["main-function-content"]}>
                <h2>CẤP LẠI THẺ SINH VIÊN</h2>
                <div>
                    <p>Để biết rõ hơn về quy định này xin tải mẫu <a href="http://localhost:3000/home/bieu-mau" target="_blank" rel="noopener noreferrer">tại đây</a> hoặc xem mẫu <a href="https://drive.google.com/file/d/1wyzcACInVxbxLMH66glD60Vq2gLFFvDP/view" target="_blank" rel="noopener noreferrer">tại đây</a>
                    </p>
                </div>
                <div className={styles["form-content"]}>
                    <form onSubmit={e => e.preventDefault()}>
                        <p>Biểu mẫu thông tin</p>
                        <div className={styles["input-container"]}>
                            <input placeholder="Mã sinh viên" type="text" required/>
                        </div>
                        <div className={styles["input-container"]}>
                            <input placeholder="Tên sinh viên" type="text" required/>
                        </div>
                        <div className={styles["input-container"]}>
                            <input placeholder="Lớp sinh viên" type="text" required/>
                        </div>
                        <div className={styles["input-container"]}>
                            <input placeholder="Số điện thoại" type="text" required/>
                        </div>
                        <div className={styles["input-container"]}>
                            <input placeholder="Email" type="email" required/>
                        </div>
                        <div className={styles["input-container"]}>
                            <input type="file" required/>
                        </div>
                        <div className={styles["form-button"]}>
                            <button className={styles.submit} type="submit">
                                Gửi
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default So26;
