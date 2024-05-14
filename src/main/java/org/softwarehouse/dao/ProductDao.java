package org.softwarehouse.dao;

import org.softwarehouse.exception.EntityNotFoundException;
import org.softwarehouse.db.DatabaseConnector;
import org.softwarehouse.model.Product;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDao {
    private Connection dbConnection;

    public ProductDao() throws SQLException{
        dbConnection = DatabaseConnector.getDbConnection();
    }
    public void register(Product product) throws SQLException {
        PreparedStatement sqlStatement = dbConnection.prepareStatement(
                "INSERT INTO tb_produto (cd_produto, nm_produto, ds_produto, vl_produto, nr_estoque) " +
                        "VALUES (sequencia_produto.nextval, ?, ?, ?, ?)"
        );
        sqlStatement.setString(1, product.getName());
        sqlStatement.setString(2, product.getDescription());
        sqlStatement.setDouble(3, product.getValue());
        sqlStatement.setInt(4, product.getQuantity());
        sqlStatement.executeUpdate();
    }
    public void closeConnection() throws SQLException{
        dbConnection.close();
    }
    public Product search(long code) throws SQLException, EntityNotFoundException {
        PreparedStatement sqlStatement = dbConnection.prepareStatement(
                "SELECT * FROM tb_produto WHERE cd_produto = ?"
        );
        sqlStatement.setLong(1, code);
        ResultSet result = sqlStatement.executeQuery();
        if (!result.next())
            throw new EntityNotFoundException("Product not found!");
        return parseProduct(result);
    }

    private Product parseProduct(ResultSet result) throws SQLException {
        Long id = result.getLong("cd_produto");
        String name = result.getString("nm_produto");
        String description = result.getString("ds_produto");
        double value = result.getDouble("vl_produto");
        int quantity = result.getInt("nr_estoque");
        return new Product(id, name, description, value, quantity);
    }
    public List<Product> listAllProducts() throws SQLException {
        PreparedStatement sqlStatement = dbConnection.prepareStatement("SELECT * FROM tb_produto");
        ResultSet result = sqlStatement.executeQuery();
        List<Product> list = new ArrayList<>();
        while (result.next()){
            list.add(parseProduct(result));
        }
        return list;
    }
    public void update(Product product) throws SQLException {
        PreparedStatement sqlStatement = dbConnection.prepareStatement(
                "UPDATE tb_produto SET nm_produto = ?, ds_produto = ?," +
                        " vl_produto = ?, nr_estoque = ? where cd_produto = ?"
        );
        sqlStatement.setString(1, product.getName());
        sqlStatement.setString(2, product.getDescription());
        sqlStatement.setDouble(3, product.getValue());
        sqlStatement.setInt(4, product.getQuantity());
        sqlStatement.setLong(5, product.getCode());
        sqlStatement.executeUpdate();
    }
    public void remover(long code) throws SQLException, EntityNotFoundException {
        PreparedStatement sqlStatement = dbConnection.prepareStatement(
                "DELETE from tb_produto where cd_produto = ?"
        );
        sqlStatement.setLong(1, code);
        int rowCount = sqlStatement.executeUpdate();
        if (rowCount == 0)
            throw new EntityNotFoundException("Produto não encontrado para ser removido");
    }
}
