package com.sged.modelo;

import java.time.LocalDate;

/**
 *
 * @author DIEGO.GOMEZ
 */
public class Persona {

    int id;
    String tipoDocumento;
    String documento;
    String nombre;
    String apellido;
    //  LocalDate fechaNacimiento;// = LocalDate.of(1989, 11, 11);
    String contrasena;
    int tipoPerfil;

    public Persona() {

    }

    public Persona(int id, String tipoDocumento, String documento, String nombre, String apellido, String contrasena, int tipoPerfil) {
        this.id = id;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;
        this.tipoPerfil = tipoPerfil;
    }

    public String getDocumento() {
        return documento;
    }

    public String getContrasena() {
        return contrasena;
    }

    public int getId() {
        return id;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public int getTipoPerfil() {
        return tipoPerfil;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public void setTipoPerfil(int tipoPerfil) {
        this.tipoPerfil = tipoPerfil;
    }

}
