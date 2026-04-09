import { useState } from 'react'
import './css/App.css'
import ListaVideogames from './componentes/ListaVideogames';
import CadastrarGame from './componentes/CadastrarGame';

function App() {
  const [tela, setTela] = useState(1);
  return (
    <>
      <div className="menu">
        <h1>Juliano Biasotto</h1>
        <div className="telas">
          <button className='btn-menu-1' onClick={() => {setTela(1)}}>Lista</button>
          <button className='btn-menu-2' onClick={() => {setTela(2)}}>Cadastrar Game</button>
        </div>
      </div>

      {tela == 1 ?<ListaVideogames></ListaVideogames>: <CadastrarGame></CadastrarGame>}
    </>
  )
}

export default App
