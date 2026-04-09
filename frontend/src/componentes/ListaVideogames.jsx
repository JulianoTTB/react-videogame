import { useState, useEffect } from "react";
import Game from "./game";
import "../css/lista.css";
function ListaVideogames(){
    const [data, setData] = useState([]);
    const [anyErr, setAnyErr] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getGames();
    }, [])


    function getGames(){
        fetch("http://localhost:3000/get_videogames")
            .then(data => data.json())
            .then(response => setData(response))
            .catch(err => {setAnyErr(true); setError(err)})
    }



    return (
        <>
            <div className="lista">
                    {!anyErr && data.length > 0 ? data.map(game => <Game game={game}></Game>): anyErr ? <p style={{fontSize:24, color:"#ffffff"}}>{error}</p> : <p style={{fontSize:48, color:"#ffffff"}}>Lista vazia</p>}
            </div>
        </>
    )
}

export default ListaVideogames