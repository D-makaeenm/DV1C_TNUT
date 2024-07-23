package com.GiaotiepDB;

class Girl {
    private String name;

    public Girl(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
public class App {
    public static void main(String[] args) {
        // Khởi tạo đối tượng Girl với tên là "Alice"
        Girl girl = new Girl("Alice");

        // Sử dụng getter để lấy tên và hiển thị ra màn hình
        System.out.println("Tên của cô gái: " + girl.getName()); // Output: Tên của cô gái: Alice

        // Sử dụng setter để thay đổi tên thành "Emily"
        girl.setName("Emily");

        // Sử dụng lại getter để lấy tên mới và hiển thị ra màn hình
        System.out.println("Tên mới của cô gái: " + girl.getName()); // Output: Tên mới của cô gái: Emily
    }
}
