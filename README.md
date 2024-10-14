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
  
   Utilizando npm:
     `npm install`
     
   Ou utilizando yarn:
    `yarn install`

## Executando o projeto
  ## 1. Configurar a URL do Backend
  
   Certifique-se de que a URL da API backend Django está configurada corretamente no arquivo .env do projeto:
     `REACT_APP_BACKEND_URL=http://localhost:8000/api`
     
  ## 2. Rodar o projeto 
  
   Após configurar a URL do backend, você pode iniciar o servidor de desenvolvimento do React:
   
   Utilizando npm:
     `npm start`
     
   Ou utilizando yarn:
     `yarn start`
     
   A aplicação estará disponível em `http://localhost:3000`.
