package br.com.vanar.controller;

import br.com.vanar.dao.ProdutoDao;
import br.com.vanar.exception.EntidadeNaoEncontradaException;
import br.com.vanar.model.Produto;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import java.sql.SQLException;
import java.util.List;


@Path("produtos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ProdutoController {

    private ProdutoDao produtoDao;

    public ProdutoController() throws SQLException {
        produtoDao = new ProdutoDao();
    }

    @GET
    public Response listar() throws SQLException {
        List<Produto> listProduto = produtoDao.listar();

        return Response.ok(listProduto).header("Access-Control-Allow-Origin", "*").build();
    }

    @GET
    @Path("{id}")
    public Response buscarPorId(@PathParam("id") int id) throws SQLException {
        try {
            Produto produto = produtoDao.pesquisar(id);
            return Response.ok(produto).header("Access-Control-Allow-Origin", "*").build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @POST
    public Response cadastrar(Produto produto, @Context UriInfo uriInfo) throws SQLException {
        produtoDao.cadastrar(produto);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(produto.getId()));
        return Response.created(uri.build()).entity(produto).header("Access-Control-Allow-Origin", "*").build();
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Produto produto) throws SQLException {
        produto.setId(id);
        try {
            produtoDao.atualizar(produto);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(produto).header("Access-Control-Allow-Origin", "*").build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            produtoDao.remover(id);
            return Response.noContent().header("Access-Control-Allow-Origin", "*").build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

}