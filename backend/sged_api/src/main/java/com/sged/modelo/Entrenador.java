package com.sged.modelo;
import java.time.LocalDate;
/**
 *
 * @author juanpablo
 */
public class Entrenador {
    int id;
    String nombre;
    
    public Entrenador(){
        
    }

    public Entrenador(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
}
