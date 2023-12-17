import React, {useState} from "react";

export default function Questao1() {

  const [botaoclicado, definirbotao] = useState(false)

  const handleClick = () => {

    definirbotao(true);

    alert('O botão "Clique-me!" foi clicado');

  };

  return (
    <>
    <h1>Questão</h1>

      <button style={{backgroundColor: 'Red',
    borderRadius: '10px',
    color: 'white',
    padding: '10px',
    cursor: 'pointer'}}
    onClick={handleClick}>Clique-me!</button>

    {botaoclicado && <p>'O botão "Clique-me!" foi clicado</p>}



     {/* <p>
        Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
  </p>*/}
    </>
  );
}
