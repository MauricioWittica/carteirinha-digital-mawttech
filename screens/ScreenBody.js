import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import ScreenTopbar from '../components/top-bar/Topbar';


const Background = styled.View`
    flex: 1;
    background-color: grey;
`;


const ScreenBody = () => {
    return (
        <Background>
            
           <ScreenTopbar/>

        </Background>
    );
}


export default ScreenBody;