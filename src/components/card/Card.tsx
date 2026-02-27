import Image from 'next/image';
import './Card.css'
import React from 'react';

type ICard = {
    title: string
    description: string
    src: string
}

export default function Card ({src, title, description} : ICard) {
    return(
        <article className="CardGeneral">
            <Image src={src} alt='hahaha'/>
            <h5>{title}</h5>
            <p>{description}</p>
        </article>
    )
}