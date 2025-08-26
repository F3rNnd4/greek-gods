# Greek Gods — Projeto Next.js 15

## 📝 Descrição do Projeto

Este é um projeto desenvolvido em **Next.js 15** com o objetivo de consumir uma **API pública** escolhida pelo desenvolvedor. O projeto foi estruturado em páginas específicas para praticar o uso de **fetch/axios**, **componentes**, **props** e **estilização**. Além disso, foi utilizado **Tailwind CSS** ou **module.css** para estilização.

---

## 🎯 Objetivo

Construir um projeto funcional que consuma dados de uma API pública e os exiba em diferentes páginas, organizadas conforme os requisitos abaixo.

---

## 📌 Estrutura de Páginas

### 1. **Home** (`src/app/page.jsx`)
A página inicial contém:
- Nome da turma
- Nome da escola
- Nome completo do aluno
- Uma foto do aluno (ou avatar) utilizando o componente `next/image`
- Uma frase inspiradora (autoral ou de outra pessoa)

**Estilização:**  
A página foi estilizada utilizando **Tailwind CSS** ou **module.css**, conforme preferência.

---

### 2. **Página sobre a API** (`src/app/apiinfo/page.jsx`)
A página dedicada à API contém:
- Nome da API escolhida
- Link externo para a documentação oficial da API
- URL base utilizada para o `axios` ou `fetch`
- Endpoint escolhido para buscar os dados (exemplo: `/characters`, `/countries`, `/books`)
- Lista de atributos recebidos na resposta da API (exemplo: `name`, `status`, `image`, `species`)
- Uma descrição breve sobre o que a API disponibiliza

---

### 3. **Página de Listagem (READ)** (`src/app/<entidade>/page.jsx`)
A página de listagem realiza:
- Um **fetch/axios GET** na API escolhida
- Renderização dos itens em **cards** ou **tabela**

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React para construção de aplicações web modernas.
- **Tailwind CSS**: Framework de estilização baseado em classes utilitárias (opcional).
- **Module.css**: Alternativa para estilização modular.
- **Axios/Fetch**: Para realizar requisições HTTP.
- **next/image**: Para otimização de imagens.

---

## 📚 Estrutura de Arquivos

```plaintext
src/
├── app/
│   ├── page.jsx                # Página inicial
│   ├── apiinfo/
│   │   └── page.jsx            # Página sobre a API
│   ├── <entidade>/
│   │   └── page.jsx            # Página de listagem
│   ├── not-found.jsx           # Página de erro 404
│   └── not-found.module.css    # Estilização da página 404
├── public/
│   └── images/                 # Imagens utilizadas no projeto
└── README.md                   # Documentação do projeto
```

---

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

---

## 🌐 API Utilizada

- **Nome da API:** [Nome da API escolhida]
- **Documentação Oficial:** [Link para a documentação](https://example.com)
- **URL Base:** `https://api.example.com`
- **Endpoint:** `/characters`
- **Atributos Recebidos:** `name`, `status`, `image`, `species`

---

## 📖 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados:
- Consumo de APIs públicas com **fetch** e **axios**
- Criação de componentes reutilizáveis em **React**
- Uso de **props** para passar dados entre componentes
- Estilização com **Tailwind CSS** e **module.css**
- Organização de páginas em um projeto Next.js

---

## 🖼️ Demonstração

### Página Inicial
Exibe informações do aluno, incluindo nome, foto e frase inspiradora.

### Página Sobre a API
Detalha as informações da API utilizada, incluindo documentação e endpoints.

### Página de Listagem
Renderiza os dados da API em formato de cards ou tabela.

---

## 📄 Licença

Este projeto é de uso educacional e não possui uma licença específica.