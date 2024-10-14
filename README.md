# Sofisticato - E-commerce Frontend

Este repositório contém o código-fonte do frontend do projeto Sofisticato, uma loja de móveis desenvolvida com React, integrada a um backend Django. O projeto tem como objetivo oferecer uma interface intuitiva e moderna para que os clientes possam navegar pelos produtos, conhecer a história da loja e fazer contato.

## Índice
  • Visão Geral 
  
  •  Funcionalidades 
  
  •  Pré-requisitos
  
  •  Instalação
  
  • Executando o projeto
  
  • Estrutura do Projeto
  
  • Tecnologias Utilizadas
  
  • Contribuição
  
  • Licença

## Visão Geral
O projeto Sofisticato é uma aplicação de e-catalog. O frontend é desenvolvido em React e se comunica com uma API RESTful em Django para exibir e manipular informações como produtos, categorias, e dados de contato.

## Funcionalidades
  • Home Page com Carrossel: Mostra os principais produtos em destaque.
  
  • Página de Produtos: Exibe uma lista de móveis com filtros por categoria.
  
  • Detalhes de Produto: Mostra imagens e descrições detalhadas de cada item.
  
  • Sobre Nós: Informações sobre a história e valores da loja.
  
  • Contato: Formulário para entrar em contato com a loja e mapa com a localização.
  
  • Responsividade: Totalmente adaptado para diferentes dispositivos (desktop, tablet, mobile).

## Pré-requisitos
  • Node.js versão 14 ou superior
  
  • npm ou yarn para gerenciar pacotes
  
  • Backend Django configurado e rodando (instruções para o backend estão em seu repositório específico)

## Instalação
  ## 1. Clonar o repositório
     git clone https://github.com/usuario/sofisticato-frontend.git
     cd sofisticato-frontend
     
  ## 2. Instalar dependências
   # Utilizando npm:
     npm install
   # Ou utilizando yarn:
     yarn install

## Executando o projeto
  ## 1. Configurar a URL do Backend
   # Certifique-se de que a URL da API backend Django está configurada corretamente no arquivo .env do projeto:
     REACT_APP_BACKEND_URL=http://localhost:8000/api
     
  ## 2. Rodar o projeto 
   # Após configurar a URL do backend, você pode iniciar o servidor de desenvolvimento do React:
   # Utilizando npm:
     npm start
   # Ou utilizando yarn:
     yarn start
     
   A aplicação estará disponível em `http://localhost:3000`.


Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
