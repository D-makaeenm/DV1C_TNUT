package com.BeanandCofig;

public class SimpleBean {
    private String username;

    public SimpleBean(String username) {
        setUsername(username);
    }

    @Override
    public String toString() {
        return "This is a simple bean, name: " + username;
    }

    public String getUsername() {
        return "char khac gi: " + username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
