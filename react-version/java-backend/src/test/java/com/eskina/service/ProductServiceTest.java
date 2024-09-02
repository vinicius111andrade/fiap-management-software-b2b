package com.eskina.service;

import com.eskina.model.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductServiceTest {

    @Mock
    private Connection mockConnection;

    private ProductService productService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        productService = new ProductService(mockConnection);
    }

    @Test
    void testCreateProduct() throws SQLException {
        Product product = new Product(1L, "Test Product", "Test Type", 10, 9.99f);
        Product createdProduct = productService.createProduct(product);
        assertNotNull(createdProduct);
        assertEquals(product.getName(), createdProduct.getName());
    }

    @Test
    void testGetProduct() throws SQLException {
        long productId = 1L;
        Product product = productService.getProduct(productId);
        assertNotNull(product);
        assertEquals(productId, product.getId());
    }

    @Test
    void testUpdateProduct() throws SQLException {
        Product product = new Product(1L, "Updated Product", "Updated Type", 20, 19.99f);
        Product updatedProduct = productService.updateProduct(product);
        assertNotNull(updatedProduct);
        assertEquals(product.getName(), updatedProduct.getName());
    }

    @Test
    void testDeleteProduct() throws SQLException {
        long productId = 1L;
        assertDoesNotThrow(() -> productService.deleteProduct(productId));
    }

    @Test
    void testListProducts() throws SQLException {
        List<Product> products = productService.listProducts();
        assertNotNull(products);
        assertFalse(products.isEmpty());
    }
}