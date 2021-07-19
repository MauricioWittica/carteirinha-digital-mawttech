import React from 'react';
import styled from 'styled-components';
import TopbarComponent from './../../top-bar/Topbar';
import CardPictureTopbar from './../../Cards/top-bar-cards/CardTopBar';

const BackgroundHeader = styled.View`


`;

const HeaderGlobal = () => {
    return (<BackgroundHeader>
        <TopbarComponent />
        <CardPictureTopbar />
    </BackgroundHeader>
    );
}

export default HeaderGlobal;