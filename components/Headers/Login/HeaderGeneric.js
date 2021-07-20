import React from 'react';
import styled from 'styled-components';
import TopbarComponent from './../../top-bar/Topbar';
import CardPictureTopbar from './../../Cards/top-bar-cards/CardTopBar';
import { StatusBar } from 'react-native';

const BackgroundHeader = styled.View`


`;

const HeaderGlobal = () => {
    return (<BackgroundHeader>
        <TopbarComponent />
        <CardPictureTopbar />
        <StatusBar barStyle='light-content' backgroundColor='#3e8769'/>
    </BackgroundHeader>
    );
}

export default HeaderGlobal;