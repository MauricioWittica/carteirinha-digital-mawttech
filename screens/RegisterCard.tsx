import React from 'react';
import styled from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { NavMenuContext } from '../contexts/navMenu';
import { useEffect } from 'react';
import { ScrollView, Button } from 'react-native';
import { Text } from 'react-native-paper';
import { CardRegisterForm } from './../components/Forms/CardRegister/index';
import { FirstRegisterAccountModal } from './../components/Modals/FirstRegisterAccount/index';



const Background = styled.View`
 flex:1;

    
    `;

const Cadastro = styled.View`
margin-top: 40px;
margin-bottom: 32px;

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
const ScreenRegisterCard = ({ navigation, route }) => {

    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);

  
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('RegisterCard')),
        []
    );


    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
    );

  


    return (

        <NavMenuContext.Provider value={{ statePage }}>
            <Background>
                <ScrollView>
            <FirstRegisterAccountModal/>
                    <Cadastro>

                        <Cadastro.Title>
                            
                        </Cadastro.Title>
                        <Cadastro.SubTitle>
                            Preencha o formulário para criar a sua cartirinha digital de filiado PRTB.
                        </Cadastro.SubTitle>
                        <CardRegisterForm/>
                       
                    </Cadastro>
                   
                </ScrollView>
            </Background>
        </NavMenuContext.Provider>
    );
  

}

export default ScreenRegisterCard;