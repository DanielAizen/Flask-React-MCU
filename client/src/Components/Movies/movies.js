import React from 'react';
import { Link } from 'react-router-dom';

export const Movies = ({ listOfMovies }) => {
    return (
        <>
        <div className='container'>
            {listOfMovies.map(movie =>{
                return(
                    <figure>
                        <Link to={`/movie/${movie.id}`}><img src={movie.img} alt={movie.title} key={movie.id}/></Link>
                        <figcaption>{movie.title} - {movie.worldReleaseDate}</figcaption>
                    </figure>
                )
            })}
            
        </div>
        </>
        )
}
