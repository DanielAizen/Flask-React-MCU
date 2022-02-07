import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Search= ({setMovie}) => {
    const [eMsg, setEMsg] = useState('')
    const [query, setQuery] = useState('')
    const [sortVal, setSortVal] = useState(0)
    const searchQ = (e) => {
        e.preventDefault()
        console.log()
        fetch(`/app/search?`+ new URLSearchParams({q:query, sort:sortVal}).toString())
        .then(res=> {
            if(res.status === 200)
                return res.json()
        })
        .then(data => {
            if(data.status === 200){
                setMovie(data.result)
                setEMsg('')
            }
            else{
                setMovie([])
                setEMsg(data.msg)
 
            }
        })
        .catch(e => {setEMsg(e)})
    
    }

    return (
        <div>
            <form method="get">
                <label> Enter search query:
                    <input onInput={e => setQuery(e.target.value)} type='text' name="q" placeholder="what are we looking for today?"/>
                </label>
                <label>Choose between searchs:<br/> (1) World Release Date, (2) Name
                    <input onInput={e => setSortVal(e.target.value)} type='text' name="sort" placeholder= 'choose search method' />
                </label>
                <button onClick={searchQ}>Search now</button>
            </form>
            {eMsg && <h1 >{eMsg}</h1>}

        </div>
    )
}
