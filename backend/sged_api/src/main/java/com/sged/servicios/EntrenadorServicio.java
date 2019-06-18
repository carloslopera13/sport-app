package com.sged.servicios;
import com.sged.dao.EntrenadorDAO;
import com.sged.modelo.Entrenador;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
/**
 *
 * @author juanpablo
 */
@Path("entrenadores")
public class EntrenadorServicio {

    //private static List<Practicante> lista = new ArrayList<>();
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getEntrenadores() {
        List<Entrenador> lista = EntrenadorDAO.getEntrenadores();
        return Response.ok(lista).build();
    }



}