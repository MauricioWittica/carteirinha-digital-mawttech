import React from 'react';
import styled from 'styled-components';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import {TextInput} from 'react-native-paper';

import CheckBoxSing from '../components/Checkbox/Sing/CheckBoxSign';

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
const ScreenRegister = ({navigation, route}) => {


    return (
        <Background>
            <HeaderGlobal />
            <Cadastro>
                <Cadastro.Title>
                    Cadastro de Carteirinha Digital
                </Cadastro.Title>
                <Cadastro.SubTitle>
                    Faça o seu cadastro para entrar e criar sua carteirinha digital!
                </Cadastro.SubTitle>
                <TextInput label='Nome' placeholder='ex: Andréia da Silva' />
                <TextInput label='CPF' placeholder='000.000.000-00' />
                <TextInput label='Data de nascimento' placeholder='ex: 09/04/1990' />
                <TextInput label='Nome da Mãe' placeholder='ex: Andréia da Silva' />
                <LabelCheckBox>
                    <CheckBoxSing />
                    <LabelCheckBox.Title>
                        Mãe desconhecida
                    </LabelCheckBox.Title>
                </LabelCheckBox>
            </Cadastro>
        </Background>
    );
}

export default ScreenRegister;