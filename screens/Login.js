import React from 'react';
import styled from 'styled-components';
import { ButtonForgotPass, ButtonDeleteMyData, ButtonConfirm } from '../components/Buttons/Login/ButtonsLogin';
import { PassInput } from '../components/Campos-Input/Login/InputPasslogin';

const Separador = styled.View`


`;

const BackgroundLogin = styled.View``;

const CardLogin = styled.View`

justify-content: center;
padding-bottom: 20px;
`;



CardLogin.Picture = styled.View`
align-self: center;
background-color: grey;
position: relative;
border-width: 5px;
border-color: #91d6b9;
border-radius: 25px;
bottom:70px;
height: 250px;
width: 200px;
`;

CardLogin.PassInput = styled.View`
padding-bottom: 100px;
`;


CardLogin.Buttons = styled.View`

`;

const ScreenLogin = () => {
    return (
        <BackgroundLogin>

            <CardLogin>
                <CardLogin.Picture>

                </CardLogin.Picture>
                <CardLogin.PassInput>
                <PassInput />
                </CardLogin.PassInput>

                <CardLogin.Buttons>
                    <ButtonForgotPass />
                    <ButtonDeleteMyData />
                    <ButtonConfirm />
                </CardLogin.Buttons>
            </CardLogin>

        </BackgroundLogin>
    );
}

export default ScreenLogin;
