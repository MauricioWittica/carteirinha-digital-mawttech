import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';




const BackgroundTopbar = styled.View`

background-color: #3e8769;

`;

const Topbar = styled.View`
flex-direction: row;`;

Topbar.Left = styled.View`
flex:1;
`;

Topbar.Right = styled.View`
flex:1;

`;

Topbar.Middle = styled.View`
flex:2;

`;


Topbar.Title = styled.Text``;

Topbar.SubTitle = styled.Text``;



const TopbarComponent = () => {
    return (
        <BackgroundTopbar>
            <Topbar>

                <Topbar.Left>
                    
                </Topbar.Left>

                <Topbar.Middle>
                    <Topbar.Title></Topbar.Title>
                    <Topbar.SubTitle></Topbar.SubTitle>
                </Topbar.Middle>

                <Topbar.Right>
                   
                </Topbar.Right>

            </Topbar>
           
        </BackgroundTopbar>

    );
}

export default TopbarComponent;