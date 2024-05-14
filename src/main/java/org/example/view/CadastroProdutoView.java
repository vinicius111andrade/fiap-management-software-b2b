package org.example.view;
import org.example.dao.ProdutoDao;
import org.example.factory.ConnectionFactory;
import org.example.model.Produto;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class CadastroProdutoView {

    public static void main (String[] args){
        try{
            ProdutoDao dao = new ProdutoDao();
            Produto produto = new Produto("Calça Jeans", "Azul", 50.0, 10 );
            dao.cadastrar(produto);
            dao.fecharConezao();
            System.out.println("Produto cadastrado!");
        } catch (SQLException e){
            System.err.println(e.getMessage());
        }
    }
}
