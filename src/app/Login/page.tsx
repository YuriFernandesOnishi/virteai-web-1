"use client"

import React from 'react';
import './login.css'
import Image from 'next/image';
import HeaderEnter from '@/components/header-enter/HeaderEnter';
import Return from '../../assets/images/return-icon.svg';
import Input from '@/components/input/Input';
import ButtonEnter from '@/components/enter-button/Button';


export default function Login () {
    return(
        <div className="Section-Login">
            <HeaderEnter
            src={Return}
            />

            <div className="card-container">
                <h2>Login</h2>
                <div className="card">
                    <p>Email:</p>
                    <Input description='Insira seu email'/>

                    <p>Senha:</p>
                    <Input description='Insira sua senha'/>

                    <div className="password">
                        <p>esqueci minha senha</p>
                    </div>

                    <div className="container-buttons">
                        <ButtonEnter
                        label='Entrar'
                        onclick={() => console.log("oi")}
                        />

                        <p>Não tenho cadastro</p>
                    </div>
                </div>

            </div>
        </div>
    )
}