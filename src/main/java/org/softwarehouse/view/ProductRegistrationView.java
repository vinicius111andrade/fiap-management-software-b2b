package org.softwarehouse.view;
import org.softwarehouse.dao.ProductDao;
import org.softwarehouse.model.Product;

import java.sql.SQLException;

public class ProductRegistrationView {

    public static void main (String[] args){
        try{
            ProductDao dao = new ProductDao();
            Product product = new Product("Calça Jeans", "Azul", 50.0, 10 );
            dao.register(product);
            dao.closeConnection();
            System.out.println("Produto cadastrado!");
        } catch (SQLException e){
            System.err.println(e.getMessage());
        }
    }
}
