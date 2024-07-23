package com.example.demo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
/*
* Gọi trâu đứng là x, trâu nằm là y, trâu già là z
* có 2 phương trình như sau
* x + y + z = 100
* 5x + 3y + z/3 = 100
* khử mẫu phương trình trên có 15x + 9y + z = 300
* quy dổi theo z có x + y = 100 - z và 15x + 9y = 300 - z
* suy ra x = 4z/3 - 100 và y = 200 - 7z/3
* x > 0 -> z > 75
* y > 0 -> z < 85
* {75,...,85}
* */
@SpringBootApplication
@RestController
public class test {

    public static void main(String[] args) {
        SpringApplication.run(test.class, args);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/timtrau")
    @ResponseBody
    public ResponseEntity<List<BuffaloData>> getBuffaloCounts() {
        int[] buffaloOldCases = divhetcho3();
        List<BuffaloData> buffaloDataList = new ArrayList<>();

        for (int z : buffaloOldCases) {
            int x = (4 * z / 3) - 100;  // Số lượng trâu đứng
            int y = 200 - (7 * z / 3);  // Số lượng trâu nằm

            BuffaloData data = new BuffaloData(z, x, y);
            buffaloDataList.add(data);
        }

        return ResponseEntity.ok().body(buffaloDataList); // Trả về danh sách đối tượng BuffaloData dưới dạng JSON
    }

    // Hàm tìm các số chia hết cho 3 trong khoảng [start, end)
    private int[] divhetcho3() {
        List<Integer> multiples = new ArrayList<>();
        for (int i = 76; i < 85; i++) {
            if (i % 3 == 0) {
                multiples.add(i);
            }
        }
        // Chuyển List<Integer> sang int[]
        int[] result = new int[multiples.size()];
        for (int i = 0; i < multiples.size(); i++) {
            result[i] = multiples.get(i);
        }
        return result;
    }

    // Class model để đại diện cho dữ liệu trả về
    @Setter
    @Getter
    static class BuffaloData {
        private int trauGia;
        private int trauNam;
        private int trauDung;

        public BuffaloData(int trauGia, int trauDung, int trauNam) {
            this.trauGia = trauGia;
            this.trauNam = trauNam;
            this.trauDung = trauDung;
        }

    }
}
