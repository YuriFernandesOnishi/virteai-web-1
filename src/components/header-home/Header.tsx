import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.svg';
import aboutUs from '../../assets/images/about-us.svg';
import Offers from '../../assets/images/offers.svg';
import Shopping from '../../assets/images/shopping.svg';
import Notification from '../../assets/images/notification.svg';
import Image from 'next/image';
import ButtonEnter from '../enter-button/Button';

export default function HeaderHome () {

    return (
        <header>
            <Image 
            className='image' 
            src={logo} 
            alt="Logo image" 
            width={160}
            height={150}
            />
            
            <div className="container-pages">

                <Image 
                className='image' 
                src={aboutUs} 
                alt="Sobre nós icon" 
                width={109}
                height={86}
                />

                <Image 
                className='image' 
                src={Offers} 
                alt="Ofertas icon" 
                width={162}
                height={86}
                />

                <Image 
                className='image' 
                src={Shopping} 
                alt="Suas compras icon" 
                width={151}
                height={86}
                />

                <Image 
                className='image' 
                src={Notification} 
                alt="Notificações icon" 
                width={131}
                height={86}
                />
            </div>

            <div className="container-button">
                <button className='white-button'>
                    Entrar
                </button>
                <button className='blue-button'>
                    Cadastre-se
                </button>

            </div>
            
        </header>

        );
}