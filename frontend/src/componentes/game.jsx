import "../css/game.css";

function Game(props) {
  const data = new Date(props.game.launchy_date).toLocaleDateString("pt-BR");

  return (
    <>
      <div
        className="game-info"
        onClick={() => {
          props.exibirGame(props.game);
        }}
      >
        <p>Nome: {props.game.name}</p>
        <p>Gênero: {props.game.genre}</p>
        <p>Avaliação: {props.game.rating}/5</p>
        <p>Data de lançamento: {data}</p>
        <div className="game-btn">
          <button
            className="btn-update"
            onClick={(e) => {
              e.stopPropagation();
              props.updateGame(props.game)
            }}
          >
            Atualizar
          </button>
          <button
            className="btn-delete"
            onClick={(e) => {
              e.stopPropagation();
              props.deletarGame(props.game.id);
            }}
          >
            Deletar
          </button>
        </div>
      </div>
    </>
  );
}

export default Game;
