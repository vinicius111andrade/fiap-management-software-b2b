package br.com.vanar.model;

public class Produto {
    private Integer id;
    private String nm_nome;
    private String ds_tipo;
    private Integer nr_quantidade;
    private Float vl_preco;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNm_nome() {
        return nm_nome;
    }

    public void setNm_nome(String nm_nome) {
        this.nm_nome = nm_nome;
    }

    public String getDs_tipo() {
        return ds_tipo;
    }

    public void setDs_tipo(String ds_tipo) {
        this.ds_tipo = ds_tipo;
    }

    public Integer getNr_quantidade() {
        return nr_quantidade;
    }

    public void setNr_quantidade(Integer nr_quantidade) {
        this.nr_quantidade = nr_quantidade;
    }

    public Float getVl_preco() {
        return vl_preco;
    }

    public void setVl_preco(Float vl_preco) {
        this.vl_preco = vl_preco;
    }

    public Produto() {
    }

    public Produto(Integer id) {
        this.id = id;
    }

    public Produto(Integer id, String nm_nome, String ds_tipo, Integer nr_quantidade, Float vl_preco) {
        this.id = id;
        this.nm_nome = nm_nome;
        this.ds_tipo = ds_tipo;
        this.nr_quantidade = nr_quantidade;
        this.vl_preco = vl_preco;
    }

    public Produto(String nm_nome, String ds_tipo, Integer nr_quantidade, Float vl_preco) {
        this.nm_nome = nm_nome;
        this.ds_tipo = ds_tipo;
        this.nr_quantidade = nr_quantidade;
        this.vl_preco = vl_preco;
    }
}
