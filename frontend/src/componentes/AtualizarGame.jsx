import { useState } from "react";
import "../css/cadastrarGame.css";

function AtualizarGame(props) {
    const [form, setForm] = useState({
        "id":props.game.id,
        "nome": props.game.name,
        "genre": props.game.genre,
        "rating": props.game.rating,
        "launchy_date": props.game.launchy_date.split("T")[0],
        "publisher": props.game.publisher,
        "platforms": props.game.platforms,
        "description": props.game.description
    })
    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    }

    function atualizar() {
        const nome = document.getElementById("nome").value;
        const genre = document.getElementById("genre").value;
        const rating = document.getElementById("rating").value;
        const date = document.getElementById("date").value;
        const publisher = document.getElementById("publisher").value;
        const platforms = document.getElementById("platforms").value;
        const description = document.getElementById("description").value;

        const url = `http://localhost:3000/update_videogame/${props.game.id}`;
        fetch(url, {
        method: "PUT",
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
        <form onSubmit={atualizar}>
          <label htmlFor="nome">Nome: </label>
          <input type="text" id="nome" placeholder="Nome" name="nome" value={form.nome} onChange={handleChange} required></input>
          <label htmlFor="genre">Gênero: </label>
          <input type="text" id="genre" placeholder="Gênero" name="genre" value={form.genre} onChange={handleChange} required></input>
          <label htmlFor="rating">Avaliação: </label>
          <input
            type="number"
            id="rating"
            placeholder="Avaliação máxima de 5.0"
            step={"any"}
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="date">Data de lançamento: </label>
          <input type="date" id="date" name="launchy_date" value={form.launchy_date} onChange={handleChange} required></input>
          <label htmlFor="publisher">Publicadora: </label>
          <input
            type="text"
            id="publisher"
            placeholder="Publicadora"
            name="publisher"
            value={form.publisher}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="platforms">Plataformas: </label>
          <input
            type="text"
            id="platforms"
            placeholder="Plataformas"
            name="platforms"
            value={form.platforms}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="description">Descrição: </label>
          <textarea id="description" placeholder="Descrição" rows={5}>{form.description}</textarea>
          <button className="btn-submit" type="submit">Atualizar</button>
        </form>
      </div>
    </>
  );
}

export default AtualizarGame;
