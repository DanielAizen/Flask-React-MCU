import React, {useState, useEffect} from "react";
import { Movies } from "../Components/Movies/movies";
import { Search } from "../Components/Search/search";

export const MainPage = () => {
    const [movie, setMovie] = useState([])
    
    useEffect(()=> {
        fetch('/app')
        .then(res=> {
                if(res.status === 200){
                    return res.json()
                }
            })
            .then(data=> {
                    setMovie(data)
                }
            )
    },[])

    return(
        <>
            <div key='movies'>
                <Search setMovie={setMovie}/>
                <Movies listOfMovies={movie}/>
            </div>
        </>
    )
}