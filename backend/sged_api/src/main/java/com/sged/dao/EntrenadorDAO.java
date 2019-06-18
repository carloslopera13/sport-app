package com.sged.dao;
import com.sged.modelo.Entrenador;
import com.sged.modelo.sqlEntrenador;
import java.util.ArrayList;
import java.util.List;
/**
 *
 * @author juanpablo
 */
public class EntrenadorDAO {
       public static List<Entrenador> getEntrenadores() {
        List<Entrenador> lista = new ArrayList<>();
        lista = sqlEntrenador.getEntrenadores();
        return lista;
}
}
