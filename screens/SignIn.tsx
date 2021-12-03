import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonForgotPass, ButtonDeleteMyData, ButtonConfirm, ButtonRegister } from '../components/Buttons/ScreenSignIn/ButtonsSignIn';
import HeaderGlobal from '../components/Headers/HeaderGeneric';
import { Text, ScrollView } from 'react-native';
import { BtnSignIn } from '../components/Buttons/ScreenSignIn/ButtonsOAuth';
import TopToolBar from './../components/top-bar/Topbar';
import PassActionsProvider from '../contexts/password_actions';
import { useIsFocused } from '@react-navigation/native';
import { ScreensContext } from './../contexts/screens';
import { NavMenuContext } from './../contexts/navMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import { PassForm } from '../components/Forms/Login/index';
import ImageAvatar from './../components/ImageAvatar/index';
import { FirstStepsContext } from '../contexts/firstStepsActions';







const Background = styled.View`
flex:1;
    `;



const ContainerTela = styled.View`

padding-bottom: 20px;


`;



ContainerTela.Picture = styled.View`
align-self: center;



border-radius: 25px;
height: 220px;
width: 160px;
`;

ContainerTela.PassInput = styled.View`
padding-bottom: 0px;
`;


ContainerTela.Buttons = styled.View`

`;
const ScreenSignIn = ({ navigation }) => {
    const isFocused = useIsFocused();
    const { activeFirstStepsStage1: activeFirstSteps, } = useContext(FirstStepsContext);


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
                <ScrollView>

                    <HeaderGlobal />

                    <ContainerTela>
                        <ContainerTela.Picture>
                            <ImageAvatar />
                        </ContainerTela.Picture>

                        <PassForm />

                    </ContainerTela>
                </ScrollView>
            </Background>
        </NavMenuContext.Provider>

    );
}

export default ScreenSignIn;