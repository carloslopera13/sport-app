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
import java.util.logging.Level;
import java.util.logging.Logger;
import com.sged.modelo.Deporte;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author juanpablo
 */
public class sqlDeporte {

    public static List<Deporte> obtenerListaDeportesEntrenador(int idP) {
        mysqlConnect mc = new mysqlConnect();
        Connection conn;
        conn = mc.getConn();
        String sql = "SELECT * FROM deporte WHERE deporte.id = "
                + "(SELECT entrenador.idDeporte FROM entrenador WHERE idPersona = ?)";
        ResultSet rs;
        PreparedStatement ps;

        ArrayList<Deporte> listaDeportes = new ArrayList<>();
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, idP);
            rs = ps.executeQuery();
            //RS tiene el resultado de la consulta, si encontró algo, rs.next()=true
            while (rs.next()) {
                listaDeportes.add(new Deporte(rs.getInt("deporte.ID"),
                        rs.getString("deporte.nombre"), rs.getInt("deporte.tipo"),
                        rs.getInt("deporte.capacidad")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(sqlDeporte.class.getName()).log(Level.SEVERE, null, ex);
        }
        mc.closeConnection();
        return listaDeportes;
    }

    public static List<Deporte> obtenerListaDeportes() {
        mysqlConnect mc = new mysqlConnect();
        Connection conn;
        conn = mc.getConn();
        String sql = "SELECT * FROM deporte";
        ResultSet rs;
        PreparedStatement ps;

        ArrayList<Deporte> listaDeportes = new ArrayList<>();
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            //RS tiene el resultado de la consulta, si encontró algo, rs.next()=true
            while (rs.next()) {
                listaDeportes.add(new Deporte(rs.getInt("deporte.ID"),
                        rs.getString("deporte.nombre"), rs.getInt("deporte.tipo"),
                        rs.getInt("deporte.capacidad")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(sqlDeporte.class.getName()).log(Level.SEVERE, null, ex);
        }
        mc.closeConnection();
        return listaDeportes;
    }
}
