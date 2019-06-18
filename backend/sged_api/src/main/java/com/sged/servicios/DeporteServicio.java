package com.sged.servicios;

import com.sged.dao.DeporteDAO;
import com.sged.modelo.Deporte;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("deportes")
public class DeporteServicio {

    @GET
    @Path("/{idPersona}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDeporte(@PathParam("idPersona") int idP) {
        List<Deporte> lista = DeporteDAO.getDeportesEntrenador(idP);
        return Response.ok(lista).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDeportes() {
        List<Deporte> lista = DeporteDAO.getDeportes();
        return Response.ok(lista).build();
    }
}
