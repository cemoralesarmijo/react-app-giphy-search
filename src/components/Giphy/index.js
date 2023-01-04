import React from 'react'
import './style.css'

export default function Giphy( {title, url , id}) {
    return (
        <div className="Gipfhy-card">
            <a href={`${id}`} className="Giphy-link">
                <h4>{title}</h4>
                <img src={url} alt={title }/>
            </a>
        </div>    
    )
}