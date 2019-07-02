/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.servicios;

import com.sged.dao.PersonaDao;
import com.sged.modelo.Persona;
import com.sun.jersey.core.util.Base64;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author GOAL - i8
 */
@Path("login")
public class LoginServicio {

    @Context
    ContainerRequestContext requestCtxt;

    private static final String AUTHORIZATION_HEADER_KEY = "Authorization";
    private static final String AUTHORIZATION_HEADER_PREFIX = "Basic ";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response login() {
        List<String> authHeader = requestCtxt.getHeaders().get(AUTHORIZATION_HEADER_KEY);
        if (authHeader != null && authHeader.size() > 0) {
            String authToken = authHeader.get(0);
            authToken = authToken.replaceFirst(AUTHORIZATION_HEADER_PREFIX, "");
            StringTokenizer tokenizer = new StringTokenizer(authToken, ":");
            String cedula = tokenizer.nextToken();
            String password = tokenizer.nextToken();
            Persona persona = PersonaDao.verificarCredenciales(cedula, password);
            if (persona != null) {
                List<Persona> list = new ArrayList<>();
                list.add(persona);
                return Response.ok(list).build();
            }
        }

        return Response.status(Response.Status.UNAUTHORIZED)
                .entity("Wrong credentials.")
                .build();

    }
}
