# fiap-management-software-b2b
Java, JS, React, SQL

# Como rodar o frontend

### 1 - Instalar executável
- NodeJS (https://nodejs.org/pt/learn/getting-started/how-to-install-nodejs).

### 2 - Instalar dependências
- Via terminal entrar na pasta "fiap-management-software-b2b/frontend".
- Rodar o comando: "npm install", sem as aspas.

### 3 - Rodar website localmente
- Via terminal entrar na pasta "fiap-management-software-b2b/frontend".
- Rodar o comando: "npm run dev", sem as aspas.

# Como rodar o backend
## Preparar ambiente
### 1 - Verificar no CMD se possui o JDK instalado:
- javac -version.
- Você precisa utilizar o Java 22.
- Caso não tenha instalar (https://www.oracle.com/br/java/technologies/downloads/#jdk22-windows).

### 2 - Oracle XE:
 - Oracle XE (https://www.oracle.com/br/database/technologies/xe-downloads.html).
 - Descompactar pasta.
 - Rodar instalador (Oracle Database 21c Express Edition.msi).


### 3 - SQL Developer:
 - Oracle Developer (https://www.oracle.com/database/sqldeveloper/technologies/download/).
 - Descompactar pasta.
 - Rodar instalador (sqldeveloper.exe).

### 4 - Intellij:
 - Vai facilitar muito para rodar o projeto, é o que estamos utilizando.
 - Instalar aqui: https://www.jetbrains.com/idea/download/?section=windows
 - Se certifique que o Intellij está configurado para usar o Java 22 no projeto selecionado.

## Executar
### 1 - Abrir o projeto
 - Abra o projeto na pasta: fiap-management-software-b2b/backend/enterpriseChallenge_estoque_eskinaPacaembu
 - Dessa forma a IDE vai reconhecer o projeto corretamente.
 - Garanta que o Java 22 está setado como JDK para o projeto nas configurações da IDE.

### 2 - Rodar a api via IDE:
 - Acessar e rodar arquivo: "main.class" (botao play ou shift + f10).

### 3 - Sucesso:
 - Os endpoints estarao disponiveis por padrao no endereco: "http://localhost:8080" (pode ser alterado no arquivo main).

## Testando backend
### 1 - Realizar chamadas api:
 - Instalar e acessar a ferramenta postman (https://www.postman.com/downloads/).
 - Importar o arquivo: "api_eskina_pacaembu.postman_collection" disponivel em: "fiap-management-software-b2b\backend\postman_collection".
