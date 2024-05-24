import React, { useState } from 'react';
import './App.css';
import manaImage from './assets/Mana_Potion.gif'
import smanaImage from './assets/Strong_Mana_Potion.gif'
import gmanaImage from './assets/Great_Mana_Potion.gif'
import umanaImage from './assets/Ultimate_Mana_Potion.gif'
import uhealthImage from './assets/Ultimate_Health_Potion.gif'
import uspiritImage from './assets/Ultimate_Spirit_Potion.gif'
import gspiritImage from './assets/Great_Spirit_Potion.gif'

function App() {
  const [coinValue, setCoinValue] = useState(0);

  const potions = [
    { name: 'Mana Potion', baseValue: 5, image: manaImage },
    { name: 'Strong Mana Potion', baseValue: 9, image: smanaImage },
    { name: 'Great Mana Potion', baseValue: 14, image: gmanaImage },
    { name: 'Ultimate Mana Potion', baseValue: 42, image: umanaImage },
    { name: 'Ultimate Health Potion', baseValue: 36, image: uhealthImage },
    { name: 'Ultimate Spirit Potion', baseValue: 42, image: uspiritImage },
    { name: 'Great Spirit Potion', baseValue: 22, image: gspiritImage },
  ];

  const calculatePotionValue = (baseValue) => (baseValue * coinValue) / 1000;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de Potions</h1>
        <div className="input-container">
          <label htmlFor="coinValue">Valor da Tibia Coin:</label>
          <input
            type="number"
            id="coinValue"
            value={coinValue}
            onChange={(e) => setCoinValue(Number(e.target.value))}
          />
        </div>
        <div className="potions-list">
          <h2>Valores das Potionss:</h2>
          <ul>
            {potions.map((potion) => (
              <li key={potion.name} className="potion-item">
                <img src={potion.image} alt={potion.name} className="potion-image" />
                <span className="potion-name">{potion.name}</span>
                <span className="potion-value">{calculatePotionValue(potion.baseValue).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
