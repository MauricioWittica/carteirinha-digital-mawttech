import React from 'react';
import styled from 'styled-components';
import { ButtonForgotPass, ButtonDeleteMyData, ButtonConfirm, ButtonRegister } from '../components/Buttons/Login/ButtonsLogin';
import { PassInput } from '../components/Campos-Input/Login/InputPasslogin';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import { Text } from 'react-native';





const Version = styled.Text`

height: 50px;
padding-right: 10px;
text-align: right;
`;

const Background = styled.View`

    background-color: #fff;`;
    
    

const CardLogin = styled.View`

padding-bottom: 20px;


`;



CardLogin.Picture = styled.View`
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

CardLogin.PassInput = styled.View`
padding-bottom: 80px;
`;


CardLogin.Buttons = styled.View`

`;
const ScreenLogin = ({navigation}) => {

   
    return (

        <Background>

<HeaderGlobal />
            
            <CardLogin>
                <CardLogin.Picture>

                </CardLogin.Picture>

                <CardLogin.PassInput>
                    <PassInput />
                </CardLogin.PassInput>

                <CardLogin.Buttons>
                    <ButtonRegister/>
                    <ButtonForgotPass />
                    <ButtonDeleteMyData />
                    <Version>
                        Versão 1.0.0
                    </Version>
                    <ButtonConfirm />
                   
                </CardLogin.Buttons>
            </CardLogin>
        </Background>
    );
}

export default ScreenLogin;
