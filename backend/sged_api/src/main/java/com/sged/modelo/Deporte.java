/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.modelo;

/**
 *
 * @author juanpablo
 */
public class Deporte {

    private int ID;
    private String Nombre;
    private int Tipo;
    private int Capacidad;

    public Deporte(int Id, String Nombre, int Tipo, int Capacidad) {
        this.ID = Id;
        this.Nombre = Nombre;
        this.Tipo = Tipo;
        this.Capacidad = Capacidad;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public int getId() {
        return ID;
    }

    public void setId(int Id) {
        this.ID = Id;
    }

    public int getTipo() {
        return Tipo;
    }

    public void setTipo(int Tipo) {
        this.Tipo = Tipo;
    }

    public int getCapacidad() {
        return Capacidad;
    }

    public void setCapacidad(int Capacidad) {
        this.Capacidad = Capacidad;
    }

}
