package br.com.vanar.dao;

import br.com.vanar.exception.EntidadeNaoEncontradaException;
import br.com.vanar.configuration.ConnectionFactory;
import br.com.vanar.model.Produto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProdutoDao {

    private Connection conexao;

    public ProdutoDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public void cadastrar(Produto produto) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO T_SIP_PRODUTO(nm_nome, ds_tipo, nr_quantidade, vl_preco) VALUES ( ?, ?, ?, ?)");
        stm.setString(1, produto.getNm_nome());
        stm.setString(2, produto.getDs_tipo());
        stm.setInt(3, produto.getNr_quantidade());
        stm.setFloat(4, produto.getVl_preco());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next())
            produto.setId(generatedKeys.getInt(1));

    }

    public Produto pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM T_SIP_PRODUTO WHERE id = ?");
        stm.setLong(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Produto não encontrado");
        int Id = result.getInt("id");
        String nm_nome = result.getString("nm_nome");
        String ds_tipo = result.getString("ds_tipo");
        int nr_quantidade = result.getInt("nr_quantidade");
        float vl_preco = result.getFloat("vl_preco");
        return new Produto(Id,nm_nome, ds_tipo, nr_quantidade, vl_preco);
    }

    public List<Produto> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM T_SIP_PRODUTO");
        ResultSet result = stm.executeQuery();
        List<Produto> lista = new ArrayList<>();
        while (result.next()){
            int Id = result.getInt("id");
            String nm_nome = result.getString("nm_nome");
            String ds_tipo = result.getString("ds_tipo");
            int nr_quantidade = result.getInt("nr_quantidade");
            float vl_preco = result.getFloat("vl_preco");
            lista.add(new Produto(Id,nm_nome, ds_tipo, nr_quantidade, vl_preco));
        }
        return lista;
    }


    public void atualizar(Produto produto) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE T_SIP_PRODUTO SET nm_nome = ?, ds_tipo = ?, nr_quantidade = ?, vl_preco = ? where id = ?");
        stm.setString(1, produto.getNm_nome());
        stm.setString(2, produto.getDs_tipo());
        stm.setInt(3, produto.getNr_quantidade());
        stm.setFloat(4, produto.getVl_preco());
        stm.setLong(5, produto.getId());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Produto não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from T_SIP_PRODUTO where id = ?");
        stm.setLong(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Produto não encontrado para ser removido");
    }


}