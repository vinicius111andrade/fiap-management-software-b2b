package org.softwarehouse.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import static org.softwarehouse.db.DatabaseCredentials.*;

public class DatabaseConnector {
    public static Connection getDbConnection() throws SQLException {
        return DriverManager.getConnection(URL, USUARIO, SENHA);
    }
}
