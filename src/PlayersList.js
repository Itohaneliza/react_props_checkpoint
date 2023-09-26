import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './App.css';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  const [clickedItems, setClickedItems] = useState([]);
  
  const expand = (index) => {
    gsap.to('.player-item', {
      width: (i) => (i === index && !clickedItems[index] ? 'calc(100% - 20px)' : 'calc(33.33% - 20px)'),
      duration: 0.5,
      ease: 'power3.inOut',
    });

    const updatedClickedItems = [...clickedItems];
    updatedClickedItems[index] = !clickedItems[index];
    setClickedItems(updatedClickedItems);
  };

  useEffect(() => {
    gsap.to('.player-item', {
      width: (i) => (clickedItems[i] ? 'calc(100% - 20px)' : 'calc(33.33% - 20px)'),
      duration: 0.5,
      ease: 'power3.inOut',
    });
  }, [clickedItems]);

  return (
    <div className="player-list">
      {players.map((player, index) => (
        <div
          key={index}
          className={`player-item ${clickedItems[index] ? 'expanded' : ''}`}
          onClick={() => expand(index)}
        >
          <Player {...player} />
        </div>
      ))}
    </div>
  );
};
export default PlayersList