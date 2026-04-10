import "../css/exibirGame.css"

function ExibirGame(props) {
    const data = new Date(props.game.launchy_date).toLocaleDateString("pt-BR");
    return (
        <>
            <div className="game">
                <div className="game-card">
                    <h2 className="game-title">{props.game.name}</h2>

                    <div className="game-dados">
                        <span><strong>Gênero:</strong> {props.game.genre}</span>
                        <span className="rating">
                            ⭐ {props.game.rating}/5
                        </span>
                        <span><strong>Lançamento:</strong> {data}</span>
                        <span><strong>Publicadora:</strong> {props.game.publisher}</span>
                        <span><strong>Plataformas:</strong> {props.game.platforms}</span>
                    </div>

                    <p className="game-description">
                        {props.game.description}
                    </p>
                </div>
            </div>

        </>
    )
}

export default ExibirGame;