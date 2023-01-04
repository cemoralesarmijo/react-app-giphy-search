import { useState } from "react"
import { Link, useLocation } from "wouter"
import GiphyList from "../../components/GiphyList"
import useGiphysHooks from "../../hooks/useGiphys"
const POPULAR_GIPHYS = ['One piece', 'Slum Dunk', 'Hunter X']

export default function Home() {
    const [ keyworValue, setKeywordValue ] = useState()
    const [ locationPath, locationFunction ] = useLocation()
    const { loadingValue, giphyValues } = useGiphysHooks({keyword : 'spiral'})

    const handleSubmit = ( event ) => {
        event.preventDefault()
        locationFunction(`/search/${keyworValue}`)
        // console.log('keyworValue =>', keyworValue)        
    }

    const handleChange = ( event ) => {
        const { target: { value }} = event
        setKeywordValue(value)
    }

    return (
        <>  
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button>Buscar</button>
            </form>
            <h3 className="App-title">Última búsqueda</h3>
            <GiphyList data={giphyValues} />
            <h3 className="App-title">los giphys mas buscados</h3>
            <ul>
            {
                POPULAR_GIPHYS.map( ( giphy ) => {
                    return(
                        <li key={giphy}>
                            <Link to={`/search/${giphy}`}>
                                Gif de {giphy}
                            </Link>
                        </li> 
                    )
                    
                })
            }
            </ul>
        </>
    )
}