import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';


const BackgrounPic = styled.View`


height: 50px;



padding-bottom: 100px;
align-items: center;


`;


const Picture = styled.Image`

`;


//const imageUri = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Prtb-logo.png';

const imageDir = '../../../assets/logotipo-mawttech-branco.png';
const CardPictureTopbar = () => (
  <BackgrounPic>
    <Image source={require(imageDir)}/>
    </BackgrounPic>
);


export default CardPictureTopbar;