package org.softwarehouse.view;

import org.softwarehouse.dao.ProductDao;
import org.softwarehouse.model.Product;

import java.sql.SQLException;
import java.util.List;

public class ProductsListView {

    public static void main(String[] args) {
        try{
            ProductDao dao = new ProductDao();
            List<Product> products = dao.listAllProducts();
            for (Product product : products) {
                System.out.println(product.getCode() + " " + product.getName() + ", " + product.getDescription() + ", R$ " + product.getValue() + ", " + product.getQuantity());
            }
            dao.closeConnection();
        } catch (SQLException e) {
                        System.err.println(e.getMessage());
        }
    }
}
