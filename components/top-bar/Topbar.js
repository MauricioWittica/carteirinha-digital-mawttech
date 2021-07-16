import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';




const BackgroundTopbar = styled.View`
flex:1;
background-color: #c6c6c0;
padding-top: 50px;
`;

const Topbar = styled.View`
flex-direction: row;`;

Topbar.Left = styled.View`
flex:1;
background-color: green;`;

Topbar.Right = styled.View`
flex:1;

background-color: blue;`;

Topbar.Middle = styled.View`
flex:2;

background-color: yellow;`;


Topbar.Title = styled.Text``;

Topbar.SubTitle = styled.Text``;

const ScreenTopbar = () => {
    return (
        <BackgroundTopbar>
            <Topbar>

                <Topbar.Left>
                    
                </Topbar.Left>

                <Topbar.Middle>
                    <Topbar.Title>PRTB</Topbar.Title>
                    <Topbar.SubTitle>Cartirinha</Topbar.SubTitle>
                </Topbar.Middle>

                <Topbar.Right>
                   
                </Topbar.Right>

            </Topbar>

        </BackgroundTopbar>

    );
}

export default ScreenTopbar;