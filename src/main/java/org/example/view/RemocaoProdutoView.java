package org.example.view;
import org.example.dao.ProdutoDao;
import org.example.exception.EntidadeNaoEcontradaException;
import org.example.model.Produto;
import java.sql.SQLException;

public class RemocaoProdutoView {
    public static void main(String[] args) {
        try {
            ProdutoDao dao = new ProdutoDao();
            dao.remover(61);
            dao.fecharConezao();
            System.out.println("Produto Removido!");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (EntidadeNaoEcontradaException e) {
            System.err.println("Produto não encontrado");
        }
    }
}
