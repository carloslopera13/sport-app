/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sged.servicios;

import com.sged.dao.PracticanteDAO;
import com.sged.modelo.Practicante;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author GOAL
 */
@Path("practicantes")
public class PracticanteServicio {

    //private static List<Practicante> lista = new ArrayList<>();
    @GET
    @Path("/{idDeporte}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPracticantes(@PathParam("idDeporte") int idD) {
        List<Practicante> lista = PracticanteDAO.getPracticantes(idD);
        return Response.ok(lista).build();
    }



}
