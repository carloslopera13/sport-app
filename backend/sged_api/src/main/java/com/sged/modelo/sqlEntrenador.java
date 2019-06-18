/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.modelo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author juanpablo
 */
public class sqlEntrenador {
     public static List<Entrenador> getEntrenadores() {
        mysqlConnect mc = new mysqlConnect();
        Connection conn;
        conn = mc.getConn();

        String sql = "SELECT * FROM entrenador";
        ResultSet rs;
        PreparedStatement ps;

        ArrayList<Entrenador> lista = new ArrayList<>();
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {
                lista.add(new Entrenador(rs.getInt("entrenador.ID"), rs.getString("entrenador.nombre")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(sqlEntrenador.class.getName()).log(Level.SEVERE, null, ex);
        }
        mc.closeConnection();
        return lista;
        }

}
