import { useState } from 'react'
import './css/App.css'
import ListaVideogames from './componentes/ListaVideogames';
import CadastrarGame from './componentes/CadastrarGame';
import AtualizarGame from './componentes/AtualizarGame';
import ExibirGame from './componentes/ExibirGame';

function App() {
  const [tela, setTela] = useState(1);
  const [updateData, setUpdateData] = useState({
    "id":0,
    "name":"",
    "genre":"",
    "rating":0.0,
    "launchy_date":"",
    "publisher":"",
    "platforms":"",
    "description":""
  });

  function updateGame(game){
    setUpdateData(game);
    setTela(3);
  }

  function exibirGame(game){
    setUpdateData(game);
    setTela(4);
  }
  return (
    <>
      <div className="menu">
        <h1>Juliano Biasotto</h1>
        <div className="telas">
          <button className='btn-menu-1' onClick={() => {setTela(1)}}>Lista</button>
          <button className='btn-menu-2' onClick={() => {setTela(2)}}>Cadastrar Game</button>
        </div>
      </div>

      {tela == 1 ?<ListaVideogames updateGame={updateGame} exibirGame={exibirGame}></ListaVideogames>: tela == 2 ? <CadastrarGame></CadastrarGame> : tela == 3 ? <AtualizarGame game={updateData}></AtualizarGame> : <ExibirGame game={updateData}></ExibirGame>}
    </>
  )
}

export default App;
