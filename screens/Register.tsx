import React from 'react';
import styled from 'styled-components';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useState } from 'react';
import TopToolBar from './../components/top-bar/Topbar';
import { NavMenuContext } from './../contexts/navMenu';
import { useEffect } from 'react';
import { RegisterForm } from './../components/Forms/Register/index';


const Background = styled.View`
 flex:1;
    background-color: #fff;
    
    `;

const Cadastro = styled.View`

padding: 20px;
`;


Cadastro.Title = styled.Text`
font-size: 20px;
text-align: center;
`;

Cadastro.SubTitle = styled.Text`
font-size: 18px;
text-align: center;
`;


const LabelCheckBox = styled.View`
flex-direction: row;

align-items: center;

`;

LabelCheckBox.Title = styled.Text``;
const ScreenRegister = ({ navigation, route }) => {
    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);

    useEffect(
        () => navigation.addListener('focus', () => setStatePage('Register')),
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
                <Cadastro>
                    <Cadastro.Title>
                        Cadastro de Carteirinha Digital
                    </Cadastro.Title>
                    <Cadastro.SubTitle>
                        Faça o seu cadastro para entrar e criar sua carteirinha digital!
                    </Cadastro.SubTitle>
                    <RegisterForm/>
                </Cadastro>
            </Background>
        </NavMenuContext.Provider>
    );
}

export default ScreenRegister;