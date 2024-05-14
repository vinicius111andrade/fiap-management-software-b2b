package org.example.dao;
import org.example.exception.EntidadeNaoEcontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Produto;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProdutoDao {
    private Connection conexao;

    public ProdutoDao() throws SQLException{
        conexao = ConnectionFactory.getConnection();
    }
    public void cadastrar(Produto produto) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_produto (cd_produto, nm_produto, ds_produto, vl_produto, nr_estoque) VALUES (sequencia_produto.nextval, ?, ?, ?, ?)");
        stm.setString(1, produto.getNome());
        stm.setString(2, produto.getDescricao());
        stm.setDouble(3, produto.getValor());
        stm.setInt(4, produto.getEstoque());
        stm.executeUpdate();
    }
    public void fecharConezao() throws SQLException{
        conexao.close();
    }
    public Produto pesquisar(long codigo) throws SQLException, EntidadeNaoEcontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_produto WHERE cd_produto = ?");
        stm.setLong(1, codigo);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEcontradaException("Produto não encontrado");
        return parseProduto(result);
    }

    private Produto parseProduto(ResultSet result) throws SQLException {
        Long id = result.getLong("cd_produto");
        String nome = result.getString("nm_produto");
        String descricao = result.getString("ds_produto");
        double valor = result.getDouble("vl_produto");
        int estoque = result.getInt("nr_estoque");
        return new Produto(id, nome, descricao, valor, estoque);
    }
    public List<Produto> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_produto");
        ResultSet result = stm.executeQuery();
        List<Produto> lista = new ArrayList<>();
        while (result.next()){

            lista.add(parseProduto(result));
        }
        return lista;
    }
    public void atualizar(Produto produto) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_produto SET nm_produto = ?, ds_produto = ?, vl_produto = ?, nr_estoque = ? where cd_produto = ?");
        stm.setString(1, produto.getNome());
        stm.setString(2, produto.getDescricao());
        stm.setDouble(3, produto.getValor());
        stm.setInt(4, produto.getEstoque());
        stm.setLong(5, produto.getCodigo());
        stm.executeUpdate();
    }
    public void remover(long codigo) throws SQLException, EntidadeNaoEcontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from tb_produto where cd_produto = ?");
        stm.setLong(1, codigo);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEcontradaException("Produto não encontrado para ser removido");
    }
}
