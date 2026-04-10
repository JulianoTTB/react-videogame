import { useState, useEffect } from "react";
import Game from "./game";
import "../css/lista.css";
function ListaVideogames(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  function deletarGame(id) {
    const url = `http://localhost:3000/delete_videogame/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then(data => alert(data))
      .catch((err) => 
        alert(err.name + ": " + err.message)
      );
    setData((prev) => prev.filter((game) => game.id !== id));
  }

  function getGames() {
    fetch("http://localhost:3000/get_videogames")
      .then((data) => data.json())
      .then((response) => setData(response))
      .catch((err) => {
        alert(err.name + ": " + err.message)
      });
  }

  return (
    <>
      <div className="lista">
        {data.length > 0 ? (
          data.map((game) => (
            <Game game={game} deletarGame={deletarGame} updateGame={props.updateGame} exibirGame={props.exibirGame}></Game>
          ))
        ) : 
          <p style={{ fontSize: 48, color: "#ffffff" }}>Lista vazia</p>
       }
      </div>
    </>
  );
}

export default ListaVideogames;
