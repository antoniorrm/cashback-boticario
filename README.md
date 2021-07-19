## O Boticario - Desafio

O projeto Front-end foi desenvolvido em ReactJS com o uso do CRA, utilizei o Material-UI como framework de UI e Redux para State Management.

Utilizei a api fake com JWT para poder implementar a autenticação, neste fluxo utilizei o redux e redux saga.

Utilizei uma rota da api fake para simular a api externa para o caso do cashback acumulado.

Foi utilizado o Jest e Testing-libary para a realização dos testes.
## Features
- Tela de cadastro de um novo revendedor(a) solicitando Nome completo, CPF, e-mail e senha;
- Tela de login para informar e-mail e senha;
- Tela de cadastro de compras onde deverá ser informado o código, valor e data;
- Tela de listagem das compras cadastradas exibindo as informações de código da compra, valor, data, % de cashback aplicado, valor do cashback e status do cadastro;
- O status do cadastro poderá ser “Em validação”, “Reprovado” e “Aprovado;
- Opção para editar e excluir uma compra caso ele esteja“Em Validação;
- Tela para exibir o valor de cashback acumulado até o momento, esta informação virá de uma das APIs do boticário, que é um outro sistema que agrupa e consolida todas as vendas do revendedor(a);

## Task List

- [x] Login
	- [x] Informar e-mail e senha;
- [x] SignUp
	- [x] Nome completo, CPF, e-mail e senha;
- [x] Home
	- [x] Exibir o valor de cashback acumulado até o momento, esta informação virá de uma APIs do boticário;
	- [x] Listar Produtos com código da compra, valor, data, % de cashback aplicado, valor do cashback e status do cadastro;
	- [x] O status do cadastro poderá ser “Em validação”, “Reprovado” e “Aprovado;
	- [x] Opção para editar e excluir uma compra;
- [x] Cadastro
	- [x] Deverá ser informado o código, valor e data _(A % de CashBack foi definida fixamente)_;
- [x] Sair

## Fake API
[Fake Api Jwt with Json Server](https://github.com/antoniorrm/fake-api-jwt-json-server)

#### Links

> Wire installation is required for package management.

[Install Yarn](https://yarnpkg.com/lang/en/)

#### Dependences
`$ yarn install`

#### Run Application
`$ yarn start`