import React from "react";

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CalcularSomaPares = (numeros) => {
  return numeros.reduce((soma, numero) => {
    if (numero % 2 === 0) {
      return soma + numero;
    }
    return soma;
  }, 0);
};

export default function Questao3() {
  const somaPares = CalcularSomaPares(numerosInteiros);

  return (
    <>
      <h1>Questão 3</h1>


      <p>Soma dos números pares: {somaPares}</p>

           {/* <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p> */}
    </>
  );
}
