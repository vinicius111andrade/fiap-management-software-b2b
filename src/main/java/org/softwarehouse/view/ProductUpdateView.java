package org.softwarehouse.view;

import org.softwarehouse.dao.ProductDao;
import org.softwarehouse.exception.EntityNotFoundException;
import org.softwarehouse.model.Product;

import java.sql.SQLException;

public class ProductUpdateView {
    public static void main(String[] args) {
        try {
            ProductDao dao = new ProductDao();
            Product product = dao.search(1);
            product.setName("Camisa Polo");
            product.setDescription("Camisa Polo Azul");
            product.setQuantity(10);
            product.setValue(50.0);
            dao.update(product);
            dao.closeConnection();
            System.out.println("Produto atualizado!");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (EntityNotFoundException e) {
            System.err.println("Produto não encontrado");
        }
    }
}
