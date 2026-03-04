import React from 'react';
import './HeaderEnter.css'
import logo from '../../assets/images/logo.svg';
import returnIcon from '../../assets/images/return-icon.svg';
import Image from 'next/image';

type ICard = {
    src: string
}


export default function HeaderEnter ({src} : ICard) {

    return (
        <header>
            <Image 
            className='Login' 
            src={logo} 
            alt="Logo image" 
            width={160}
            height={150}
            

            />
            
            <Image 
            className='return' 
            src={src} alt='Home'
            width={50}
            height={50}
            margin-left={60}/>
            
            
            
        </header>

        );
}