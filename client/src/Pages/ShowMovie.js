import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Show } from "../Components/Show/show";


export const ShowMovie = ()=> {
    const[movie, setMovie] = useState([]);
    const {id} = useParams()
    useEffect(()=> {
        fetch(`/app/movie/${id}`)
        .then(res=> res.json())
        .then(data => setMovie(data))
    }, [id])

    return(
        <>
            <Show movieToShow={movie}/>
        </>
    )
}