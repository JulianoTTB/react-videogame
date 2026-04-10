import "../css/cadastrarGame.css";

function CadastrarGame() {
  function cadastrar() {
    const nome = document.getElementById("nome").value;
    const genre = document.getElementById("genre").value;
    const rating = document.getElementById("rating").value;
    const date = document.getElementById("date").value;
    const publisher = document.getElementById("publisher").value;
    const platforms = document.getElementById("platforms").value;
    const description = document.getElementById("description").value;

    fetch("http://localhost:3000/create_videogame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nome,
        genre: genre,
        rating: rating,
        launchy_date: date,
        publisher: publisher,
        platforms: platforms,
        description: description,
      }),
    })
      .then((response) => response.text())
      .then(data => alert(data))
      .catch((err) => {
        alert(err.name + ": " + err.message)
      });
  }
  return (
    <>
      <div className="formulario">
        <form onSubmit={cadastrar}>
          <label htmlFor="nome">Nome: </label>
          <input type="text" id="nome" placeholder="Nome" required></input>
          <label htmlFor="genre">Gênero: </label>
          <input type="text" id="genre" placeholder="Gênero" required></input>
          <label htmlFor="rating">Avaliação: </label>
          <input
            type="number"
            id="rating"
            placeholder="Máxima de 5.0"
            step={"any"}
            required
          ></input>
          <label htmlFor="date">Data de lançamento: </label>
          <input type="date" id="date" required></input>
          <label htmlFor="publisher">Publicadora: </label>
          <input
            type="text"
            id="publisher"
            placeholder="Publicadora"
            required
          ></input>
          <label htmlFor="platforms">Plataformas: </label>
          <input
            type="text"
            id="platforms"
            placeholder="Plataformas"
            required
          ></input>
          <label htmlFor="description">Descrição: </label>
          <textarea id="description" placeholder="Descrição" rows={5}></textarea>
          <button className="btn-submit" type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default CadastrarGame;
