import React from 'react';
import './HeaderEnter.css'
import logo from '../../assets/images/logo.svg';
import returnIcon from '../../assets/images/return-icon.svg';
import Image from 'next/image';

export default function HeaderEnter () {

    return (
        <header>
            <Image 
            className='image' 
            src={logo} 
            alt="Logo image" 
            width={160}
            height={150}
            

            />
            
            <Image 
            className='image' 
            src={returnIcon} 
            alt="Retorno" 
            width={50}
            height={50}
            margin-left={60}
            />
            
        </header>

        );
}