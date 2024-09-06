# fiap-management-software-b2b
Java, React, SQL

# fiap-management-software-b2b
Java, React, SQL

# Como rodar o frontend

### 1 - Instalar executável
- NodeJS (https://nodejs.org/pt/learn/getting-started/how-to-install-nodejs).

### 2 - Instalar dependências
- Via terminal entrar na pasta "fiap-management-software-b2b/frontend".
- Rodar o comando: "npm install", sem as aspas.

### 3 - Rodar website localmente
- Via terminal entrar na pasta "fiap-management-software-b2b/frontend".
- Rodar o comando: "npm run dev", sem as aspas.

### 2 - Oracle XE:
 - Oracle XE (https://www.oracle.com/br/database/technologies/xe-downloads.html)
 - Descompactar pasta
 - Rodar instalador (Oracle Database 21c Express Edition.msi)


### 2 - SQL Developer:
 - Oracle Developer (https://www.oracle.com/database/sqldeveloper/technologies/download/)
 - Descompactar pasta
 - Rodar instalador (sqldeveloper.exe)

 ### 2 - Criar nova conexão:
 - Clique em criar nova conexão (icon de + verde)
 - Exemplo:
 - Nome do usuário: system
 - senha (usar a mesma que utilizou no instalador do banco)
 - Name: FIAP / Nome do Host: localhost (deixar esse, apenas trocar caso tenha um servidor Oracle), porta 1521/ CID: xe
 -

 # Como rodar o backend
 ### 1 - Verificar no CMD se possui o JDK instalado:
 - javac -version.
 - caso nao tenha instalar (https://www.oracle.com/br/java/technologies/downloads/#jdk22-windows).

 ### 2 - Rodar a api via IDE:
 -instalar e acessar a IDE intellij (https://www.jetbrains.com/idea/download/?section=windows)
 -abrir a pasta "fiap-management-software-b2b\backend\enterpriseChallenge_estoque_eskinaPacaembu"
 -acessar e rodar arquivo: "main.class" (botao play ou shift + f10)
 -os endpoints estarao disponiveis por padrao no endereco: "http://localhost:8080" (pode ser alterado no arquivo main)

 ### 3 - Realizar chamadas api:
 -instalar e acessar a ferramenta postman (https://www.postman.com/downloads/)
 -importar o arquivo: "api_eskina_pacaembu.postman_collection" disponivel em: "fiap-management-software-b2b\backend\postman_collection"


 