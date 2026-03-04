import './Input.css'
import React from 'react';

type ICard = {
    description: string
}

export default function Input({description} : ICard) {
  return (
    <input
      type="text"
      placeholder={description}
    />
  );
}
