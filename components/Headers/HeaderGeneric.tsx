import React from 'react';
import styled from 'styled-components';
import TopToolBar from '../top-bar/Topbar';
import CardPictureTopbar from '../Cards/top-bar-cards/CardTopBar';
import { StatusBar } from 'react-native';

const BackgroundHeader = styled.View`
flex:1;
margin-top: 20px;
`;

const HeaderGlobal = () => {
    return(
    <BackgroundHeader>
        <CardPictureTopbar />
        
        <StatusBar  backgroundColor='#800000'/> 
    </BackgroundHeader>
    );
}

export default HeaderGlobal;