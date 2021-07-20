import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonForgotPass, ButtonDeleteMyData, ButtonConfirm, ButtonRegister } from '../components/Buttons/Login/ButtonsLogin';
import { PassInput } from '../components/Campos-Input/Login/InputPasslogin';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import { Text } from 'react-native';
import { BtnSignIn } from './../components/Buttons/Login/ButtonsOAuth';





const Version = styled.Text`

height: 50px;
padding-right: 10px;
text-align: right;
`;

const Background = styled.View`

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

    return (

        <Background>

            <HeaderGlobal />

            <ContainerTela>
                <ContainerTela.Picture>

                </ContainerTela.Picture>

                <ContainerTela.PassInput>
                    <PassInput />
                </ContainerTela.PassInput>
                <ContainerTela.Buttons>
                    <ButtonForgotPass />
                    <ButtonRegister />
                    <ButtonDeleteMyData />
                    <Version>
                        Versão 1.0.0
                    </Version>

                    <BtnSignIn />
                </ContainerTela.Buttons>
            </ContainerTela>
        </Background>
    );
}

export default ScreenSignIn;