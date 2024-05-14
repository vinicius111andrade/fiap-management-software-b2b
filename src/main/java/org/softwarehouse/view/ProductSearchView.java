package org.softwarehouse.view;

import org.softwarehouse.dao.ProductDao;
import org.softwarehouse.exception.EntityNotFoundException;
import org.softwarehouse.model.Product;

import java.sql.SQLException;

public class ProductSearchView {
    public static void main(String[] args) {
        try {
            ProductDao dao = new ProductDao();
            Product product = dao.search(1);
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
