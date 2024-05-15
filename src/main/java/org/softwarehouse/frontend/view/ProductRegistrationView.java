package org.softwarehouse.frontend.view;
import org.softwarehouse.backend.data.dao.ProductDao;
import org.softwarehouse.backend.model.ProductEntity;

import java.sql.SQLException;

public class ProductRegistrationView {

    public static void main (String[] args){
        try{
            ProductDao dao = new ProductDao();
            ProductEntity product = new ProductEntity("Calça Jeans", "Azul", 50.0, 10 );
            dao.register(product);
            dao.closeConnection();
            System.out.println("Produto cadastrado!");
        } catch (SQLException e){
            System.err.println(e.getMessage());
        }
    }
}
