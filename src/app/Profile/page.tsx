import React from 'react';
import './profile.css'
import Image from 'next/image';
import HeaderEnter from '@/components/header-enter/HeaderEnter';
import Return from '../../assets/images/homeicon.svg';


export default function Profile () {
    return(
        <HeaderEnter
        src={Return}
        />
    )
}