package com.sged.dao;

import com.sged.modelo.Deporte;
import com.sged.modelo.sqlDeporte;
import java.util.ArrayList;
import java.util.List;

public class DeporteDAO {

    public static List<Deporte> getDeportesEntrenador(int idP) {

        /*ArrayList<Deporte> listaDeportes = sqlDeporte.obtenerListaDeportes(conn);*/
        List<Deporte> lista = new ArrayList<>();
        lista = sqlDeporte.obtenerListaDeportesEntrenador(idP);

        return lista;

    }

    public static List<Deporte> getDeportes() {
        List<Deporte> lista = new ArrayList<>();
        lista = sqlDeporte.obtenerListaDeportes();

        return lista;
    }

}
