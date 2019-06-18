/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.servicios;

import com.sged.dao.PersonaDao;
import com.sged.modelo.Persona;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author GOAL - i8
 */
@Path("VerificarCredenciales")
public class LoginServicio {

    @GET
    @Path("/{documento}/{contrasena}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(@PathParam("documento") String cedula,
            @PathParam("contrasena") String contrasena) {

        if ("".equals(cedula.trim()) || "".equals(contrasena.trim())) {
            return Response.status(Response.Status.NOT_ACCEPTABLE).build();
        } else {
            Persona persona = PersonaDao.verificarCredenciales(cedula, contrasena);
            if (persona != null) {
                //return Response.status(Response.Status.ACCEPTED).build();
                List<Persona> list = new ArrayList<>();
                list.add(persona);
                return Response.ok(list).build();
            }
        }
        return Response.status(Response.Status.NOT_ACCEPTABLE).build();
    }
}
