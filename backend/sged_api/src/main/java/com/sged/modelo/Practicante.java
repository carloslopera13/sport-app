/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.modelo;

/**
 *
 * @author GOAL
 */
public class Practicante {

    int id;
    String tipoDocumento;
    String documento;
    String nombre;
    String apellido;
    String fechaNacimiento;
    String tipoDocumentoPadre;
    String documentoPadre;
    String correoPadre;
    int relacionPadre;
    String nombrePadre;
    String apellidoPadre;

    public Practicante(int id, String tipoDocumento, String documento, String nombre, String apellido, String fechaNacimiento, String tipoDocumentoPadre, String documentoPadre, String correoPadre, int relacionPadre, String nombrePadre, String apellidoPadre) {
        this.id = id;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.tipoDocumentoPadre = tipoDocumentoPadre;
        this.documentoPadre = documentoPadre;
        this.correoPadre = correoPadre;
        this.relacionPadre = relacionPadre;
        this.nombrePadre = nombrePadre;
        this.apellidoPadre = apellidoPadre;
    }

    public Practicante(int id, String nombre, String apellido, String tipoDocumento, String docuento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoDocumento = tipoDocumento;
        this.documento = docuento;

        this.fechaNacimiento = null;
        this.tipoDocumentoPadre = null;
        this.documentoPadre = null;
        this.correoPadre = null;
        this.nombrePadre = null;
        this.apellidoPadre = null;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getTipoDocumentoPadre() {
        return tipoDocumentoPadre;
    }

    public void setTipoDocumentoPadre(String tipoDocumentoPadre) {
        this.tipoDocumentoPadre = tipoDocumentoPadre;
    }

    public String getDocumentoPadre() {
        return documentoPadre;
    }

    public void setDocumentoPadre(String documentoPadre) {
        this.documentoPadre = documentoPadre;
    }

    public String getCorreoPadre() {
        return correoPadre;
    }

    public void setCorreoPadre(String correoPadre) {
        this.correoPadre = correoPadre;
    }

    public int getRelacionPadre() {
        return relacionPadre;
    }

    public void setRelacionPadre(int relacionPadre) {
        this.relacionPadre = relacionPadre;
    }

    public String getNombrePadre() {
        return nombrePadre;
    }

    public void setNombrePadre(String nombrePadre) {
        this.nombrePadre = nombrePadre;
    }

    public String getApellidoPadre() {
        return apellidoPadre;
    }

    public void setApellidoPadre(String apellidoPadre) {
        this.apellidoPadre = apellidoPadre;
    }

}
