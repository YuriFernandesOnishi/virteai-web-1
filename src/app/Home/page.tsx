import React from 'react';
import './home.css'
import Image from 'next/image';
import HeaderHome from '@/components/header-home/Header';
import ImageCenter from '../../assets/images/personalize-your-glasses.svg';
import Julio from '../../assets/images/patient-julio.svg';
import Andddes from '../../assets/images/AndddesLogo.svg';

import Card from '@/components/card/Card';
import Footer from '@/components/footer/Footer';


export default function HomePage () {
    return(
        
        <div className="Home-container">
            <HeaderHome/>

                <Image 
                className='Personalize' 
                src={ImageCenter} 
                alt="Imagem com um oculos de realidade virtual e um botão escrito 'Personalize o seu' " 
                />
            

            <div className="Relatos-container">
                <h1>Relatos</h1>

                <p>Alguns de nossos clientes relataram suas experiências com nossos produtos. Dê uma olhada:</p>
            </div>

            <div className="card-container">
            <Card 
            src={Julio}
            title='Julio C. - Programador (26 anos, TEA nível 1 e ansiedade social)'
            description='asdjkdnasbskdjabsadkjdsa'
            />
            
            </div>

            <div className="card-parceiro">
                <h1>Empresas Parceiras</h1>

                <Image 
                className='Andddes' 
                src={Andddes} 
                alt="Logo da empresa Andddes" 
                />
            </div>

            <Footer/>
        </div>
        
    );
}