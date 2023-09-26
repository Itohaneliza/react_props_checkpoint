import React from 'react';
import './App.css'
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return(
    <Card style={{ width: '18rem' }} className='player-container'>
      <Card.Img variant="top" src={imageUrl} className='player-img' />
      <Card.Body className='player-info'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: "Unknown",
  age: "Unknown",
  imageUrl: "https://example.com/placeholder.jpg"
};

export default Player;