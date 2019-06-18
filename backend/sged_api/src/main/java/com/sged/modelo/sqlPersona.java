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

/**
 *
 * @author GOAL - i8
 */
public class sqlPersona {

    public static Persona VerificarCredenciales(String cedula, String contrasena) {
        mysqlConnect mc = new mysqlConnect();
        Connection conn;
        conn = mc.getConn();

        String sql = "SELECT * FROM Persona WHERE documento = ? AND contrasena = ?";
        ResultSet rs;

        PreparedStatement ps;

        Persona p = null;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, cedula);
            ps.setString(2, contrasena);
            rs = ps.executeQuery();

            while (rs.next()) {
                p = new Persona();
                p.setId(rs.getInt("ID"));
                p.setTipoDocumento("tipoDocumento");
                p.setDocumento(cedula);
                p.setContrasena(contrasena);
                p.setNombre(rs.getString("Nombre"));
                p.setApellido(rs.getString("Apellidos"));
                p.setTipoPerfil(rs.getInt("tipoPerfil"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(sqlPersona.class.getName()).log(Level.SEVERE, null, ex);
        }
        mc.closeConnection();
        return p;
    }
}
