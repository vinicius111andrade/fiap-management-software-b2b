package org.softwarehouse.frontend.view;

import org.softwarehouse.backend.data.dao.ProductDao;
import org.softwarehouse.backend.exception.EntityNotFoundException;
import org.softwarehouse.backend.model.ProductEntity;

import java.sql.SQLException;

public class ProductSearchView {
    public static void main(String[] args) {
        try {
            ProductDao dao = new ProductDao();
            ProductEntity product = dao.search(1);
            System.out.println(product.getCode()+ " " + product.getName() + ", " + product.getDescription());
            System.out.println("R$ " + product.getValue() + ", " + product.getQuantity());
            dao.closeConnection();
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (EntityNotFoundException e) {
            System.err.println("Codigo não existe na tabela");
        }
    }
}
