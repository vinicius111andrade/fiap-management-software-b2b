package com.vanar.restaurantstore.controller;

import com.vanar.restaurantstore.entity.ProductEntity;
import com.vanar.restaurantstore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductEntity> getAllItems() {
        return productService.findAll();
    }

    @PostMapping
    public ProductEntity createItem(@RequestBody ProductEntity product) {
        return productService.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        productService.delete(id);
    }
}

