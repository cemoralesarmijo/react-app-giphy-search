import React from 'react'
import './giphy.css'

export default function Giphy( {title, url , id}) {
    return (<a href={`${id}`} className='giphy'>
        <h4>{title}</h4>
        <img src={url} alt={title }/>
    </a>)
}