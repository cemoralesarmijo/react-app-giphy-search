import React, { useState, useEffect } from 'react'
import Giphy from "./Giphy";
import getGiphys from '../services/get_giphys';

export default function ListOfGiphy(props) {
    const keyword = props?.params?.keyword || 'onepiece'
    const [giphyValues, setGiphy] = useState([])

    useEffect(function () {
        getGiphys({ keyword }).then(res => setGiphy(res))
    }, [keyword])

    if (!giphyValues.length) return (<div className='loading'>loading 🌀</div>)

    return <>
        {
            giphyValues.map(({ url, title, id }) =>
                <Giphy
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </>
}