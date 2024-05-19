package com.vanar.restaurantstore.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;

@Entity
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private int quantity;
    private BigDecimal price;

    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }
    public int getQuantity() {
        return quantity;
    }
    public BigDecimal getPrice() {
        return price;
    }
    public void setName(String newName) {
        this.name = newName;
    }
    public void setDescription(String newDescription) {
        this.description = newDescription;
    }
    public void setQuantity(int newQuantity) {
        this.quantity = newQuantity;
    }
    public void setPrice(BigDecimal newPrice) {
        this.price = newPrice;
    }
}
