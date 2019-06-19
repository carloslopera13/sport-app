/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.servicios;

import com.sged.dao.PersonaDao;
import com.sged.modelo.Persona;
import com.sun.jersey.core.util.Base64;
import java.io.IOException;
import java.util.List;
import java.util.StringTokenizer;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author DIEGO.GOMEZ
 */
@Provider
public class LoginFilter implements ContainerRequestFilter {

    private static final String AUTHORIZATION_HEADER_KEY = "Authorization";
    private static final String AUTHORIZATION_HEADER_PREFIX = "Basic ";
    private static final String SECURED_URL_PREFIX = "Secured";

    @Override
    public void filter(ContainerRequestContext requestCtxt) throws IOException {
        if (requestCtxt.getUriInfo().getPath().contains(SECURED_URL_PREFIX)) {
            List<String> authHeader = requestCtxt.getHeaders().get(AUTHORIZATION_HEADER_KEY);
            if (authHeader != null && authHeader.size() > 0) {
                String authToken = authHeader.get(0);
                authToken = authToken.replaceFirst(AUTHORIZATION_HEADER_PREFIX, "");
                String decodedString = new String(Base64.decode(authToken));
                System.out.println("Decoded String here bitch: " + decodedString);
                StringTokenizer tokenizer = new StringTokenizer(decodedString, ":");
                String cedula = tokenizer.nextToken();
                String password = tokenizer.nextToken();

                Persona persona = PersonaDao.verificarCredenciales(cedula, password);
                if (persona != null) {
                    return;
                }
            }
            Response unauthorizedStatus = Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity("User cannot access the resource.")
                    .build();

            requestCtxt.abortWith(unauthorizedStatus);
        }
    }

}
