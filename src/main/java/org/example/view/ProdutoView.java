package org.example.view;
import org.example.dao.ProdutoDao;
import org.example.exception.EntidadeNaoEcontradaException;
import org.example.model.Produto;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;
public class ProdutoView {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ProdutoDao dao;
        System.out.println("Bem vindo ao FIAP Store!");
        try {
            dao = new ProdutoDao();
            int escolha;
            do {
                System.out.println("Escolha uma opção: \n1-Cadastrar \n2-Pesquisar por Código \n3-Listar \n4-Atualizar \n5-Remover \n0-Sair");
                        escolha = scanner.nextInt();
                switch (escolha) {
                    case 1:
                        cadastrar(scanner, dao);
                        break;
                    case 2:
                        pesquisarProduto(scanner, dao);
                        break;
                    case 3:
                        listar(dao);
                        break;
                    case 4:
                        atualizar(scanner, dao);
                        break;
                    case 5:
                        removerProduto(scanner, dao);
                        break;
                    case 0:
                        System.out.println("Saindo...");
                        break;
                    default:
                        System.out.println("Opção inválida! Tente novamente.");
                }
            } while (escolha != 0);
            dao.fecharConezao();
        } catch (SQLException e) {
            System.err.println("Erro ao conectar ao banco de dados: " + e.getMessage());
        }
    }
    private static void cadastrar(Scanner scanner, ProdutoDao dao) {
        System.out.println("Digite o nome do produto:");
        String nome = scanner.next() + scanner.nextLine();
        System.out.println("Digite a descrição do produto:");
        String descricao = scanner.next() + scanner.nextLine();
        System.out.println("Digite o valor do produto:");
        double valor = scanner.nextDouble();
        System.out.println("Digite o estoque do produto:");
        int estoque = scanner.nextInt();
        Produto novoProduto = new Produto(nome, descricao, valor, estoque);
        try {
            dao.cadastrar(novoProduto);
            System.out.println("Produto cadastrado com sucesso!");
        } catch (SQLException e) {
            System.err.println("Erro ao cadastrar produto: " + e.getMessage());
        }
    }
    private static void pesquisarProduto(Scanner scanner, ProdutoDao dao) {
        System.out.println("Digite o código do produto:");
        long codigo = scanner.nextLong();
        try {
            Produto produto = dao.pesquisar(codigo);
            System.out.println("Produto encontrado:");
            System.out.println(produto.getCodigo() + " - " + produto.getNome() + ", " + produto.getDescricao() + ", R$" + produto.getValor() + " - Estoque: " + produto.getEstoque() );
        } catch (SQLException | EntidadeNaoEcontradaException e) {
            System.err.println("Erro ao pesquisar produto: " + e.getMessage());
        }
    }
    private static void listar(ProdutoDao dao) {
        try {
            List<Produto> produtos = dao.listar();
            System.out.println("Lista de produtos:");
            for (Produto produto : produtos) {
                System.out.println(produto.getCodigo() + " - " + produto.getNome() + ", " + produto.getDescricao() + ", R$" + produto.getValor() + " - Estoque: " + produto.getEstoque() );
            }
        } catch (SQLException e) {
            System.err.println("Erro ao listar produtos: " + e.getMessage());
        }
    }
    private static void atualizar(Scanner scanner, ProdutoDao dao) {
        System.out.println("Digite o código do produto que deseja atualizar:");
        long codigo = scanner.nextLong();
        try {
            Produto produto = dao.pesquisar(codigo);
            System.out.println("Digite o novo nome do produto:");
            String nome = scanner.next() + scanner.nextLine();
            System.out.println("Digite a nova descrição do produto:");
            String descricao = scanner.next() + scanner.nextLine();
            System.out.println("Digite o novo valor do produto:");
            double valor = scanner.nextDouble();
            System.out.println("Digite o novo estoque do produto:");
            int estoque = scanner.nextInt();
            produto.setNome(nome);
            produto.setDescricao(descricao);
            produto.setValor(valor);
            produto.setEstoque(estoque);
            dao.atualizar(produto);
            System.out.println("Produto atualizado com sucesso!");
        } catch (SQLException | EntidadeNaoEcontradaException e) {
            System.err.println("Erro ao atualizar produto: " + e.getMessage());
        }
    }
    private static void removerProduto(Scanner scanner, ProdutoDao dao) {
        System.out.println("Digite o código do produto que deseja remover:");
        long codigo = scanner.nextLong();
        try {
            dao.remover(codigo);
            System.out.println("Produto removido com sucesso!");
        } catch (SQLException | EntidadeNaoEcontradaException e) {
            System.err.println("Erro ao remover produto: " + e.getMessage());
        }
    }
}