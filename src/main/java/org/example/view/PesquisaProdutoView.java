package org.example.view;
import org.example.dao.ProdutoDao;
import org.example.exception.EntidadeNaoEcontradaException;
import org.example.model.Produto;

import java.sql.SQLException;
public class PesquisaProdutoView {
    public static void main(String[] args) {
        try {
            ProdutoDao dao = new ProdutoDao();
            Produto produto = dao.pesquisar(1);
            System.out.println(produto.getCodigo()+ " " + produto.getNome() + ", " + produto.getDescricao());
            System.out.println("R$ " + produto.getValor() + ", " + produto.getEstoque());
            dao.fecharConezao();
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (EntidadeNaoEcontradaException e) {
            System.err.println("Codigo não existe na tabela");
        }
    }
}



