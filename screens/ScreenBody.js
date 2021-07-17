import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import ScreenTopbar from '../components/top-bar/Topbar';
import ScreenLogin from './Login';


const Background = styled.View`
    flex: 1;
    background-color: #fff;
`;


const ScreenBody = () => {
    return (
        <Background>
            
           <ScreenTopbar/>
            <ScreenLogin/>
        </Background>
    );
}


export default ScreenBody;