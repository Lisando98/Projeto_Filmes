import React, { useState, useEffect } from 'react';
import { Container, MovieList, Movie } from './style';
import { API_URL, API_KEY, API_IMAGE } from '../../config/config';
import { Link } from 'react-router-dom';

    export default function Home(){

        const [movies, setMovies] = useState<any[]>([])

        useEffect(() => {
            fetch(`${API_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
        },[])

        return (

            <Container>

                <h1>Movies</h1>

                <MovieList>
                    {
                        movies.map(movie => {
                            return(
                                <Movie>
                                    <Link to={`/details/${movie.id}`}>
                                        <img src={`${API_IMAGE}${movie.poster_path}`}alt={movie.title} />
                                    </Link>
                                    <span>{movie.title}</span>
                                </Movie>

                            )
                        })
                    }
                    
                </MovieList>
            </Container>

        )
    }