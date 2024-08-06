import React from 'react';
import styles from '../CSS/all.module.css'

const So24 = () => {
    return (
        <div className={styles["main-function"]}>
            <div className={styles["main-function-content"]}>
                <h2>CẤP GIẤY XÁC NHẬN XIN CẤP VISA</h2>
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
                            <input placeholder="Ngày sinh" type="date" required/>
                        </div>
                        <div className={styles["input-container"]}>
                            <input placeholder="Địa chỉ thường trú" type="text" required/>
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

export default So24;
