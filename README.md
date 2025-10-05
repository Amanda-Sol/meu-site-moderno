ModernSite - Atividade de Login e Cadastro
Este projeto foi desenvolvido como parte da avaliação da disciplina de Programação para a Internet. O objetivo principal foi implementar uma seção de login funcional em uma página já existente que continha um formulário de cadastro, seguindo requisitos específicos de layout, validação e funcionalidade.

Visão Geral
A aplicação consiste em uma única página web que apresenta dois formulários principais na seção de "Cadastro/Login":

Formulário de Cadastro: A estrutura original da página, com campos para nome, e-mail, telefone e senha, incluindo validações detalhadas.

Formulário de Login: A funcionalidade implementada nesta atividade. Este formulário fica posicionado ao lado do formulário de cadastro, criando um layout harmônico e responsivo.

Requisitos Cumpridos
O projeto atende a todos os requisitos solicitados na atividade:

1. Estrutura de Login
O formulário de login contém um campo para E-mail.

O formulário de login contém um campo para Senha.

Um botão "Logar" para submeter o formulário.

Validação de campos via JavaScript:

O e-mail é validado para garantir que está em um formato correto (ex: exemplo@dominio.com).

A senha é validada para garantir que possui no mínimo 6 caracteres.

Mensagens de erro são exibidas dinamicamente caso a validação falhe.

2. Ações
Ao clicar no botão "Logar" com dados válidos, as informações de e-mail e senha são exibidas no console do navegador.

Nenhuma autenticação real com backend foi implementada, conforme a especificação.

3. Layout
Os formulários de login e cadastro estão dispostos lado a lado em telas maiores (desktops e tablets).

O layout é responsivo: em telas menores (dispositivos móveis), os formulários são empilhados verticalmente para garantir a usabilidade.

O CSS foi utilizado para criar um container flexível (display: flex) que gerencia o alinhamento dos dois cards.

4. Organização do Código
O código HTML, CSS e JavaScript está organizado e comentado para facilitar o entendimento.

As funções JavaScript são bem definidas e separadas por responsabilidade.

Como Executar
Por se tratar de um projeto front-end estático, não há necessidade de um servidor ou de um processo de build. Para visualizar o projeto, siga os passos abaixo:

Clone o repositório para a sua máquina local:

git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

Navegue até a pasta do projeto:

cd nome-do-repositorio

Abra o arquivo index.html diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

Para verificar a funcionalidade de login, preencha os campos com dados válidos e clique em "Logar". Em seguida, abra as ferramentas de desenvolvedor do navegador (pressionando a tecla F12) e vá para a aba "Console" para ver os dados exibidos.

Tecnologias Utilizadas
HTML5: Para a estrutura semântica da página.

CSS3: Para estilização, layout (Flexbox) e responsividade.

JavaScript (ES6+): Para manipulação do DOM, validação de formulários e interatividade.