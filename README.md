# CineTag

![Preview](./public/assets/preview.png)

Veja o projeto em funcionamento: [CineTag na Vercel](https://cine-tag-alura-amber.vercel.app/)

Este projeto foi desenvolvido como parte do curso **React: Desenvolvendo uma SPA com React Router** da [**Alura**](https://www.alura.com.br/), com o objetivo de praticar conceitos de **React**, **Vite**, **React Router** e **Styled Components**.

## Funcionalidades

- **Vite**: Ferramenta de build rápida e otimizada para desenvolvimento front-end.
- **React**: Biblioteca para criação de interfaces de usuário.
- **React Router**: Navegação entre páginas de forma dinâmica e eficiente.
- **Styled Components**: CSS-in-JS para estilização dinâmica.
- **Hooks personalizados**: Como `useFavoritosContext`, para gerenciamento de favoritos.

## Pré-requisitos

- **Node.js** (Verifique se está instalado com `node -v`).
- **npm** ou **yarn** para gerenciar pacotes.

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/Fabricio-santuchi/CineTag.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd cinetag
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse ` http://localhost:5173`.

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
- **`npm run build`**: Compila o projeto para produção.
- **`npm run lint`**: Executa o ESLint para verificar o código.
- **`npm run preview`**: Visualiza a versão de produção localmente.

## Estrutura do Projeto

```bash
.
├── src
│   ├── components          # Componentes reutilizáveis (Card, Container, Rodape, etc.)
│   ├── hooks               # Hooks personalizados (useFavoritosContext)
│   ├── pages               # Páginas do projeto (Inicio, Player, PaginaBase)
│   ├── styles              # Estilos globais e de componentes
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Ponto de entrada do React
├── public                  # Arquivos estáticos
├── package.json            # Dependências e scripts do projeto
├── vite.config.js          # Configurações do Vite
└── README.md               # Este arquivo
```

## Tecnologias Utilizadas

- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **React Router DOM**: ^6.26.2
- **Styled Components**: ^6.1.13
- **Vite**: ^5.4.1

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
