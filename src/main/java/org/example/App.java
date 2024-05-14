package org.example;
import org.example.factory.ConnectionFactory;

import java.sql.Connection;
import java.sql.SQLException;


public class App 
{
    public static void main( String[] args )
    {
//                try {
//                    Connection conexao = DriverManager.getConnection("jdbc:oracle:thin:@Captain_Jhonny:1521:XE", "system","646423264542");
//                    System.out.println("Conexão realizada!");
//                } catch (SQLException e) {
//                    System.err.println(e.getMessage());
//                }
        try {
            Connection conexao = ConnectionFactory.getConnection();
            System.out.println("Conexão realizada!");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }
}
