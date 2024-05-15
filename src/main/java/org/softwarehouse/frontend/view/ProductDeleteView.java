package org.softwarehouse.frontend.view;

import org.softwarehouse.backend.data.dao.ProductDao;
import org.softwarehouse.backend.exception.EntityNotFoundException;

import java.sql.SQLException;

public class ProductDeleteView {
    public static void main(String[] args) {
        try {
            ProductDao dao = new ProductDao();
            dao.remover(61);
            dao.closeConnection();
            System.out.println("Produto Removido!");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (EntityNotFoundException e) {
            System.err.println("Produto não encontrado");
        }
    }
}
