import React, {useState, useEffect} from "react";

export default function Questao2() {

const [contador, definircontador] = useState(0);

useEffect(() =>{
  definircontador(10);
}, []);

const Aumentar = () => {
  definircontador(contador + 1);
};

const Diminuir = () =>{
  definircontador(contador - 1);
}

  return (
    <>
      <h1>Questão 2</h1>

      <p>O valor do cantador é: {counter}</p>

      <button onClick={Aumentar}>Incrementar</button>
      <button onClick={Diminuir}>Decrementar</button>


      {/*<p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
  </p>*/}

    </>
  );
}
