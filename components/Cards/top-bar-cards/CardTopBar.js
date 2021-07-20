import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';


const BackgrounPic = styled.View`

background-color: #3e8769;
height: 150px;

padding-bottom: 200px;

`;

const Picture = styled.Image`
align-self: center;

`;


const imageUri = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Prtb-logo.png';

const imageDir = '../../../assets/Prtb-logo.png';
const CardPictureTopbar = () => (
  <BackgrounPic>
    <Picture source={ require(imageDir)} />
    </BackgrounPic>
);


export default CardPictureTopbar;