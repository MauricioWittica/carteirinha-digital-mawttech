import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonForgotPass, ButtonDeleteMyData, ButtonConfirm, ButtonRegister } from '../components/Buttons/ScreenSignIn/ButtonsSignIn';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import { Text } from 'react-native';
import { BtnSignIn } from '../components/Buttons/ScreenSignIn/ButtonsOAuth';
import TopToolBar from './../components/top-bar/Topbar';
import PassActionsProvider from '../contexts/password_actions';
import { useIsFocused } from '@react-navigation/native';
import { ScreensContext } from './../contexts/screens';
import { NavMenuContext } from './../contexts/navMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import { PassForm } from './../components/Campos-Input/Login/PassForm';







const Background = styled.View`
flex:1;
    background-color: #fff;`;



const ContainerTela = styled.View`

padding-bottom: 20px;


`;



ContainerTela.Picture = styled.View`
align-self: center;
background-color: grey;
position: relative;
border-width: 5px;
border-color: #91d6b9;
border-radius: 25px;
bottom: 65px;
height: 220px;
width: 180px;
`;

ContainerTela.PassInput = styled.View`
padding-bottom: 80px;
`;


ContainerTela.Buttons = styled.View`

`;
const ScreenSignIn = ({ navigation }) => {
    const isFocused = useIsFocused();


    const [statePage, setStatePage] = useState<string | null>(null);

    useEffect(
        () => navigation.addListener('focus', () => setStatePage('SignIn')),
        []
    );

    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
    );



    return (

        <NavMenuContext.Provider value={{ statePage }}>
            <Background>

                <TopToolBar />


                <HeaderGlobal />

                <ContainerTela>
                    <ContainerTela.Picture>

                    </ContainerTela.Picture>                   
                        


                           <PassForm/>
                    
                </ContainerTela>
            </Background>
        </NavMenuContext.Provider>

    );
}

export default ScreenSignIn;