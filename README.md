# Teste Técnico em Desenvolvimento Web - React

Este README contém soluções para as quatro questões de programação em React, descrevendo brevemente cada uma delas.

##Referências
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [React](https://react.dev/)
  - [React](https://react.dev/).



### Questões e Implementação

## Questão 1:

Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
como texto. Ao clicar no botão, um alerta deve ser disparado avisando que
o botão foi clicado.

###Implementação:

O componente utiliza um botão com estilização para uma aparência vermelha e bordas arredondadas.
Um evento de clique (`onClick`) está associado ao botão, acionando o alerta quando o botão é clicado.

**Arquivo:** [Questão 1](./src/app/questoes/1/page.jsx)



## Questão 2:

Crie um contador inicializado em 0. A tela deve exibir dois botões: um
para incrementar o contador e outro para decrementar o contador. Ao
carregar a tela, o contador deve ser atualizado para 10. Implemente a
lógica para atualizar o contador quando a tela for carregada e a lógica
para atualizar o contador quando os botões forem clicados.

###Implementação:

O componente utiliza o estado (useState) para controlar o valor do contador.
Dois botões estão associados a funções para incrementar e decrementar o contador.

**Arquivo:** [Questão 2](./src/app/questoes/2/page.jsx)



## Questão 3:

Escreva uma função JavaScript que recebe uma matriz de números inteiros
e retorna a soma de todos os números pares. Exiba a soma na tela.

###Implementação:
O componente utiliza uma função para calcular a soma dos números pares em uma matriz de números inteiros.

**Arquivo:** [Questão 3](./src/app/questoes/3/page.jsx)



## Questão 4:

Crie um componente chamado `ProductList` que recebe uma matriz de
objetos de produto e renderiza uma lista de produtos. Cada produto deve
exibir seu nome e preço.

###Implementação:
O componente ProductList é criado para renderizar a lista de produtos recebida como propriedade.

**Arquivo:** [Questão 4](./src/app/questoes/4/page.jsx)
