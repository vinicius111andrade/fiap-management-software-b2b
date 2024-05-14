package org.example.view;
import org.example.model.Produto;
import org.example.dao.ProdutoDao;
import java.util.List;
import java.sql.SQLException;

public class ListagemProdutoView {

    public static void main(String[] args) {
        try{
            ProdutoDao dao = new ProdutoDao();
            List<Produto> produtos = dao.listar();
            for (Produto produto : produtos) {
                System.out.println(produto.getCodigo() + " " + produto.getNome() + ", " + produto.getDescricao() + ", R$ " + produto.getValor() + ", " + produto.getEstoque());
            }
            dao.fecharConezao();
        } catch (SQLException e) {
                        System.err.println(e.getMessage());
        }
    }
}

