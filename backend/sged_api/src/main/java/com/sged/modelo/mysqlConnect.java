package com.sged.modelo;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class mysqlConnect {

    Connection conn = null;

    public void Connect() {
        //El 8080 es porque le cambié el puerto, si no se lo tuvieron que cambiar, cambien por 80
        String DB_URL = "jdbc:mysql://localhost/sged?useUnicode=true&characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
        String USER = "root";
        String PASS = "";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            try {
                conn = DriverManager.getConnection(DB_URL, USER, PASS);
                
            } catch (SQLException ex) {
                Logger.getLogger(mysqlConnect.class.getName()).log(Level.SEVERE, null, ex);
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(mysqlConnect.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Connection getConn() {
        if (conn == null) {
            Connect();
        }
        return conn;
    }

    public void closeConnection() {
        try {
            conn.close();
        } catch (SQLException ex) {
            Logger.getLogger(mysqlConnect.class.getName()).log(Level.SEVERE, null, ex);
        }
        conn = null;
    }
}
