import React from 'react';
import { useNavigate } from 'react-router';
export const Show = ({ movieToShow }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='show-movie'>
                {movieToShow.length >0 && movieToShow.map(data =>
                    <figure>
                        <img src={data.img} key={data.id}/>
                        <figcaption>{data.title} - {data.worldReleaseDate}</figcaption>
                        <figcaption>USA release date - {data.usReleaseDate}</figcaption>
                        <figcaption>World release date - {data.worldReleaseDate}</figcaption>
                        <figcaption>Director(s) - {data.director}</figcaption>
                        <figcaption>Screenwriter(s) - {data.screenwriter}</figcaption>
                        <figcaption>Producer(s) - {data.producer}</figcaption>
                        <figcaption>Phase(s) - {data.phase}</figcaption>
                        <figcaption>Plot(s) - {data.plot}</figcaption>
                        <figcaption>Movie length (in minutes) - {data.movieLength}</figcaption>
                        <figcaption>Stars - {data.stars}</figcaption>  
                    </figure>
                        
                )}
                <button onClick={() =>{
                navigate('/')
                }}>Return to main menu</button>
            </div>
        </>
        )
}