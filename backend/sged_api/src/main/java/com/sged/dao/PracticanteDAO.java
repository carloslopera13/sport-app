/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.dao;

import com.sged.modelo.Practicante;
import com.sged.modelo.sqlPracticante;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author GOAL
 */
public class PracticanteDAO {

    public static List<Practicante> getPracticantes(int idD) {
        List<Practicante> lista = new ArrayList<>();
        lista = sqlPracticante.getPracticantes(idD);
        //lista.add(new Practicante(7,"666"));
        return lista;
    }
}
