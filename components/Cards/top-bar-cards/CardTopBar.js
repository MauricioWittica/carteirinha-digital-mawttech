import React from 'react';
import { Card } from 'react-native-paper';


const image = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Prtb-logo.png';
const CardPictureTopbar = () => (
    <Card>
        <Card.Cover source={{uri: image}}/>
  </Card>
);


export default CardPictureTopbar;