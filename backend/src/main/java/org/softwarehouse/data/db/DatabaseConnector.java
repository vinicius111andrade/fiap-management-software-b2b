package org.softwarehouse.data.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnector {
    public static Connection getDbConnection() throws SQLException {
        return DriverManager.getConnection(DatabaseCredentials.URL, DatabaseCredentials.USUARIO, DatabaseCredentials.SENHA);
    }
}
