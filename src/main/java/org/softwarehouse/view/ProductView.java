package org.softwarehouse.view;

import org.softwarehouse.dao.ProductDao;
import org.softwarehouse.exception.EntityNotFoundException;
import org.softwarehouse.model.Product;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

public class ProductView {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ProductDao dao;
        System.out.println("Bem vindo ao FIAP Store!");
        try {
            dao = new ProductDao();
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
            dao.closeConnection();
        } catch (SQLException e) {
            System.err.println("Erro ao conectar ao banco de dados: " + e.getMessage());
        }
    }
    private static void cadastrar(Scanner scanner, ProductDao dao) {
        System.out.println("Digite o nome do produto:");
        String nome = scanner.next() + scanner.nextLine();
        System.out.println("Digite a descrição do produto:");
        String descricao = scanner.next() + scanner.nextLine();
        System.out.println("Digite o valor do produto:");
        double valor = scanner.nextDouble();
        System.out.println("Digite o estoque do produto:");
        int estoque = scanner.nextInt();
        Product novoProduct = new Product(nome, descricao, valor, estoque);
        try {
            dao.register(novoProduct);
            System.out.println("Produto cadastrado com sucesso!");
        } catch (SQLException e) {
            System.err.println("Erro ao cadastrar produto: " + e.getMessage());
        }
    }
    private static void pesquisarProduto(Scanner scanner, ProductDao dao) {
        System.out.println("Digite o código do produto:");
        long codigo = scanner.nextLong();
        try {
            Product product = dao.search(codigo);
            System.out.println("Produto encontrado:");
            System.out.println(product.getCode() + " - " + product.getName() + ", " + product.getDescription() + ", R$" + product.getValue() + " - Estoque: " + product.getQuantity() );
        } catch (SQLException | EntityNotFoundException e) {
            System.err.println("Erro ao pesquisar produto: " + e.getMessage());
        }
    }
    private static void listar(ProductDao dao) {
        try {
            List<Product> products = dao.listAllProducts();
            System.out.println("Lista de produtos:");
            for (Product product : products) {
                System.out.println(product.getCode() + " - " + product.getName() + ", " + product.getDescription() + ", R$" + product.getValue() + " - Estoque: " + product.getQuantity() );
            }
        } catch (SQLException e) {
            System.err.println("Erro ao listar produtos: " + e.getMessage());
        }
    }
    private static void atualizar(Scanner scanner, ProductDao dao) {
        System.out.println("Digite o código do produto que deseja atualizar:");
        long codigo = scanner.nextLong();
        try {
            Product product = dao.search(codigo);
            System.out.println("Digite o novo nome do produto:");
            String nome = scanner.next() + scanner.nextLine();
            System.out.println("Digite a nova descrição do produto:");
            String descricao = scanner.next() + scanner.nextLine();
            System.out.println("Digite o novo valor do produto:");
            double valor = scanner.nextDouble();
            System.out.println("Digite o novo estoque do produto:");
            int estoque = scanner.nextInt();
            product.setName(nome);
            product.setDescription(descricao);
            product.setValue(valor);
            product.setQuantity(estoque);
            dao.update(product);
            System.out.println("Produto atualizado com sucesso!");
        } catch (SQLException | EntityNotFoundException e) {
            System.err.println("Erro ao atualizar produto: " + e.getMessage());
        }
    }
    private static void removerProduto(Scanner scanner, ProductDao dao) {
        System.out.println("Digite o código do produto que deseja remover:");
        long codigo = scanner.nextLong();
        try {
            dao.remover(codigo);
            System.out.println("Produto removido com sucesso!");
        } catch (SQLException | EntityNotFoundException e) {
            System.err.println("Erro ao remover produto: " + e.getMessage());
        }
    }
}
