import React, { useState } from 'react';
import styles from "./Mainpage.module.css";
import Garelly2 from './Garelly/Garelly2';
import CardOpcr from "./Card/card-opcr";
import GifUnlogin from "./GifUnlogin/Gif";
import BG from "../Background/background";
import Status from "./Status/status";
import Garelly from "./Garelly/Garelly";


const MainPage = () => {
    const [paragraphs] = useState([
        'Về chúng tôi',
        'Trường Đại học Kỹ thuật Công nghiệp Thái Nguyên chính thức triển khai Cổng thông tin trực tuyến một cửa (TNUT)\n' +
        'từ ngày 25/3/2020. Khi áp dụng TNUT, sinh viên/cựu sinh viên có thể thực hiện các thủ tục\n' +
        'tại nhà, sau đó được hẹn thời gian để trả kết quả theo hình thức: lấy trực tiếp tại HUB theo lịch\n' +
        'hẹn hoặc gửi qua đường bưu điện theo địa chỉ được kê khai trong quá trình thực hiện thủ tục.\n' +
        'Cổng thông tin một cửa TNUT đáp ứng các thủ tục trực tuyến dành cho sinh viên, tiện lợi, hữu ích,\n' +
        'đơn giản, dễ sử dụng, dễ tìm kiếm, có thể hỗ trợ sinh viên ở bất cứ đâu và vào bất cứ lúc nào.'
    ]);

    return (
        <div>
            <GifUnlogin />
            <div className={styles['About-Myself']}>
                <div className={styles.row}>
                <div className={styles.col}>
                        {paragraphs.map((text, index) => (
                            <p key={index}
                               className={index === 0 ? styles['first-p'] : index === 1 ? styles['second-p'] : ''}>{text}</p>
                        ))}
                    </div>
                    <div >
                        <Garelly2 />
                    </div>
                </div>
            </div>
            <CardOpcr />
            <BG />
            <Status />
            <div className={styles["students-feedback"]}>
                <p className={styles["title"]}>Sinh viên nói gì về chúng tôi</p>
                <Garelly/>
            </div>
        </div>
    );
}

export default MainPage;
