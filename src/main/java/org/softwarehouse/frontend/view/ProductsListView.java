package org.softwarehouse.frontend.view;

import org.softwarehouse.backend.data.dao.ProductDao;
import org.softwarehouse.backend.model.ProductEntity;

import java.sql.SQLException;
import java.util.List;

public class ProductsListView {

    public static void main(String[] args) {
        try{
            ProductDao dao = new ProductDao();
            List<ProductEntity> products = dao.listAllProducts();
            for (ProductEntity product : products) {
                System.out.println(product.getCode() + " " + product.getName() + ", " + product.getDescription() + ", R$ " + product.getValue() + ", " + product.getQuantity());
            }
            dao.closeConnection();
        } catch (SQLException e) {
                        System.err.println(e.getMessage());
        }
    }
}
