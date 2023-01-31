import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { API_URL, API_KEY, API_IMAGE } from "../../../config/config";
import { useParams, Link } from "react-router-dom";

export default function Details (){
    const [selectedMovie, setselectedMovie] = useState<any>({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/${id}?api_key=${API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => setselectedMovie(data))
    },[id])
    return (

        <Container>
            <div>
                <img src={`${API_IMAGE}${selectedMovie.backdrop_path}`} alt="texto qualquer" className ="backdrop" />
                <div className="movie">

                    <img className="movie-poster"src={`${API_IMAGE}${selectedMovie.poster_path}`}alt="texto qualquer"/>
                    <div className="details">
                        <h1>{selectedMovie.title}</h1>
                        <span>Sinopse:{selectedMovie.overview}</span>
                        <span className = "release-date">Data de Liberação: {selectedMovie.release_date} </span>
                        <Link to="/"><button>GO BACK</button></Link>
                    </div>
                </div>
            </div>
            </Container>
    )


}
