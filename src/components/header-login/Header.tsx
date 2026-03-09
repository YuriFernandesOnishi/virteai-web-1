import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.svg';
import aboutUs from '../../assets/images/about-us.svg';
import Offers from '../../assets/images/offers.svg';
import home from '../../assets/images/homeicon.svg';
import profile from '../../assets/images/ProfileIcon.svg';
import Notification from '../../assets/images/notification.svg';
import Image from 'next/image';
import Link from "next/link";


export default function HeaderHome () {

    return (
        <header>
            <Image 
            className='logo' 
            src={logo} 
            alt="Logo image" 
            
            />
            
            <div className="container-pages">

                <div className="iconecontainer">
                    <Image 
                    className='image' 
                    src={aboutUs} 
                    alt="Sobre nós icon" 
                    width={50}
                   
                    />
                    <p>Sobre nós</p>
                </div>

                <div className="iconecontainer">
                    <Image 
                    className='image' 
                    src={Offers} 
                    alt="Ofertas icon" 
                    width={50}
                    />

                    <p>Nossos serviços</p>
                </div>
                
                <div className="iconecontainer">
                    <Image 
                    className='image' 
                    src={home} 
                    alt="Pagina inicial" 
                    width={50}
                    
                    />

                    <p>Página inicial</p>
                </div>

                <div className="iconecontainer">
                    <Image 
                    className='image' 
                    src={Notification} 
                    alt="Notificações icon" 
                    width={50}
                    />

                    <Link href="/Home">Notificações</Link>
                </div>
            </div>

            <div className="container-profile">
                <Image 
                className='Profile' 
                src={profile} 
                alt="Icon profile" 
            
            />

            </div>
            
        </header>

        );
}