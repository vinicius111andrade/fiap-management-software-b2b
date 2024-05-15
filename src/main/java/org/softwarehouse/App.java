package org.softwarehouse;
import org.softwarehouse.backend.data.db.DatabaseConnector;

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
            Connection dbConnection = DatabaseConnector.getDbConnection();
            System.out.println("Conexão realizada!");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }
}
