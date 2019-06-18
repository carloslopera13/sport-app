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
 * @author DIEGO.GOMEZ
 */
public class sqlPracticante {

    public static List<Practicante> getPracticantes(int idEntrenador) {
        mysqlConnect mc = new mysqlConnect();
        Connection conn;
        conn = mc.getConn();

        String sql = "SELECT * "
                + "FROM practicante INNER JOIN matricula "
                + "ON matricula.idPracticante = practicante.id "
                + "WHERE matricula.idDeporte = "
                + "(SELECT Entrenador.idDeporte FROM Entrenador WHERE idPersona = ?)";
        ResultSet rs;

        PreparedStatement ps;

        ArrayList<Practicante> lista = new ArrayList<>();
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, idEntrenador);
            rs = ps.executeQuery();

            while (rs.next()) {
                lista.add(new Practicante(rs.getInt("practicante.ID"), rs.getString("practicante.nombre")
                , rs.getString("practicante.apellidos"), rs.getString("practicante.tipoDocumento")
                , rs.getString("practicante.documento")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(sqlPracticante.class.getName()).log(Level.SEVERE, null, ex);
        }
        mc.closeConnection();
        return lista;
        }

}
