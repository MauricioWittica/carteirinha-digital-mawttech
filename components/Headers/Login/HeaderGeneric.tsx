import React from 'react';
import styled from 'styled-components';
import TopToolBar from '../../top-bar/Topbar';
import CardPictureTopbar from '../../Cards/top-bar-cards/CardTopBar';
import { StatusBar } from 'react-native';

const BackgroundHeader = styled.View`
flex:1;


`;

const HeaderGlobal = () => {
    return(
    <BackgroundHeader>
        <CardPictureTopbar />
        
        <StatusBar barStyle='light-content' backgroundColor='#3e8769'/>
    </BackgroundHeader>
    );
}

export default HeaderGlobal;