/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.dao;

import com.sged.modelo.Deporte;
import com.sged.modelo.Persona;
import com.sged.modelo.sqlDeporte;
import com.sged.modelo.sqlPersona;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author GOAL - i8
 */
public class PersonaDao {
        public static Persona verificarCredenciales(String cedula, String contrasena) {
        
        /*ArrayList<Deporte> listaDeportes = sqlDeporte.obtenerListaDeportes(conn);*/
        Persona p = sqlPersona.VerificarCredenciales(cedula, contrasena);
       
        return p;
        
    }
}
