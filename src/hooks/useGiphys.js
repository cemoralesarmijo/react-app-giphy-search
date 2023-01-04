import { useState, useEffect } from "react"
import getGiphys from "../services/get_giphys"

export default function UseGhiphys ({ keyword }) {
    console.log('keyword', keyword)

    const [ loadingValue, setLoading ] = useState( false )
    const [ giphyValues, setGiphy ] = useState([])
    useEffect( function() {
        setLoading(true)
        getGiphys({keyword})
            .then( res  => {
                setGiphy( res )
                setLoading(false)
            })
    }, [ keyword ])

    return { loadingValue, giphyValues }
}