package com.learntest;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

// Một interface cho việc mặc
interface Outfit {
    void wear();
}

interface Glasses{
    void wear();
}

class Kinhram implements Glasses{
    public void wear(){
        System.out.println("Đã đeo kính râm");
    }
}
// Một object cấp thấp, implement của Outfits
class Bikini implements Outfit {
    public void wear() {
        System.out.println("Đã mặc Bikini");
    }
}

// Đánh dấu Girl là một bean của Spring
class Girl {
    private final Outfit outfit;
    private final Glasses glasses;

    // Constructor injection
    public Girl(Outfit outfit, Glasses glasses) {
        this.outfit = outfit;
        this.glasses = glasses;
    }

    public void showOutfit() {
        outfit.wear();
    }

    public void showGlasses() {
        glasses.wear();
    }
}

@Configuration
@ComponentScan(basePackages = "com.learntest")
class AppConfig {
    @Bean
    public Outfit bikini() {
        return new Bikini();
    }
    @Bean
    public Kinhram kinhram() {
        return new Kinhram();
    }

    @Bean
    public Girl girl() {
        return new Girl(bikini(), kinhram());
    }
}

public class Main {
    public static void main(String[] args) {
        // Tạo context Spring từ cấu hình
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        // Lấy bean Girl từ context
        Girl girl = context.getBean(Girl.class);

        // Sử dụng đối tượng Girl
        //girl.showOutfit();
        girl.showGlasses();

        // Đóng context
        context.close();
    }
}
