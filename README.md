# 🎮 Projeto: Sistema de Cadastro de Videogames

## 📌 Descrição

Este projeto consiste em uma aplicação web para gerenciamento de videogames. É possível cadastrar, visualizar, atualizar e excluir jogos armazenados em um banco de dados.

---

## ⚙️ Pré-requisitos

Antes de iniciar a instalação, certifique-se de ter instalado em sua máquina:

* Node.js
* MySQL

---

## 🚀 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**

```bash
git clone https://github.com/JulianoTTB/react-videogame.git
```

2. **Instale as dependências**

No terminal, acesse as pastas `backend` e `frontend` separadamente e execute:

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Na pasta `backend`, crie um arquivo chamado `.env` e adicione:

```env
USERDB=seu_usuario_mysql
PASSWORD=sua_senha_mysql
```

4. **Configure o banco de dados**

* Acesse a pasta `banco`
* Execute o script SQL disponível para criar o banco e as tabelas necessárias

5. **Inicie o backend**

Na pasta `backend`, execute:

```bash
npm start
```

6. **Inicie o frontend**

Em outro terminal, na pasta `frontend`, execute:

```bash
npm run dev
```

---

## 🖥️ Como utilizar

### 📋 Página inicial

* Exibe a lista de videogames cadastrados no banco de dados
* Caso não haja nenhum registro, será exibida uma mensagem informando que a lista está vazia

---

### ➕ Cadastro de videogame

* Clique no botão **"Cadastrar Game"** no canto superior direito
* Preencha os dados do jogo
* Após o cadastro, você será redirecionado para a lista
* Se o cadastro for bem-sucedido, um cartão com as informações do jogo será exibido

---

### 🔍 Visualização de detalhes

* Clique em um cartão de videogame na lista
* Você será direcionado para uma página com todas as informações do jogo

---

### ✏️ Atualização de dados

* Na página de detalhes do jogo, clique no botão **"Atualizar"**
* Edite as informações desejadas
* Salve as alterações

---

### 🗑️ Exclusão de videogame

* Na página de detalhes, clique no botão **"Deletar"**
* O jogo será removido do banco de dados

---

## ✅ Status do Projeto

Projeto funcional para operações básicas de CRUD (Create, Read, Update, Delete).

---

## 📌 Observações

* Certifique-se de que o MySQL esteja rodando corretamente
* Verifique se as credenciais no `.env` estão corretas
* O backend deve estar rodando antes do frontend

---

## 👨‍💻 Autor

Desenvolvido por Juliano Biasotto🚀
