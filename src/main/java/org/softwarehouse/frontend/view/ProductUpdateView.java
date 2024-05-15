package org.softwarehouse.frontend.view;

import org.softwarehouse.backend.data.dao.ProductDao;
import org.softwarehouse.backend.exception.EntityNotFoundException;
import org.softwarehouse.backend.model.ProductEntity;

import java.sql.SQLException;

public class ProductUpdateView {
    public static void main(String[] args) {
        try {
            ProductDao dao = new ProductDao();
            ProductEntity product = dao.search(1);
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
