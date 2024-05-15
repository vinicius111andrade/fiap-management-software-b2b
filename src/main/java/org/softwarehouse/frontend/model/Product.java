package org.softwarehouse.frontend.model;

public class Product {

    private Long code;
    private String name;
    private String description;
    private Double value;
    private Integer quantity;

    public Product(Long code, String name, String description, Double value, Integer quantity) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.value = value;
        this.quantity = quantity;
    }

    public Product(String name, String description, Double value, Integer quantity) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.quantity = quantity;
    }

    public Long getCode() {
        return code;
    }
    public void setCode(Long code) {
        this.code = code;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getValue() {
        return value;
    }
    public void setValue(Double value) {
        this.value = value;
    }
    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
