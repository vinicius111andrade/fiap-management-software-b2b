package com.eskina.service;

import com.eskina.dao.ProductDAO;
import com.eskina.model.Product;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class ProductService {
    private ProductDAO productDAO;

    public ProductService(Connection connection) {
        this.productDAO = new ProductDAO(connection);
    }

    public Product createProduct(Product product) throws SQLException {
        return productDAO.create(product);
    }

    public Product getProduct(long id) throws SQLException {
        return productDAO.read(id);
    }

    public Product updateProduct(Product product) throws SQLException {
        return productDAO.update(product);
    }

    public void deleteProduct(long id) throws SQLException {
        productDAO.delete(id);
    }

    public List<Product> listProducts() throws SQLException {
        return productDAO.list();
    }
}