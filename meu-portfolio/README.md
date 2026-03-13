# Portfólio Pessoal (React + Vite)

Este repositório contém o portfólio pessoal em **React + Vite**, com design inspirado em **EVA‑01** (roxo + verde, estilo retrofuturista).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o navegador em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

## Como editar o conteúdo do portfólio

### 🌟 Texto de apresentação
Edite o componente `src/components/Header.tsx` para mudar seu nome, descrição e links de contato.

### 📁 Projetos
Os projetos estão em `src/data/projects.ts`. Cada item aceita os campos:

- `title` (nome do projeto)
- `description` (resumo rápido)
- `technologies` (lista de tecnologias utilizadas)
- `demoUrl` (link para demo, se houver)
- `codeUrl` (link para o repositório)
- `comingSoon` (marque como `true` para mostrar badge “Em breve”)

### 📦 Deploy
Você pode publicar em serviços como **Vercel**, **Netlify** ou **GitHub Pages**.

## Estilo
O site usa uma paleta roxo + verde com efeitos leves de brilho e gradientes para criar um clima retrofuturista.
