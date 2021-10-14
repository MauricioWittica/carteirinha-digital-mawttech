import React , { useState, useEffect } from 'react';
import styled  from 'styled-components';
import { Button,  TextInput} from 'react-native-paper';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import TopToolBar from './../components/top-bar/Topbar';
import { NavMenuContext } from './../contexts/navMenu';


const Background = styled.View``;

const Card = styled.View`
padding: 20px;
justify-content: center;
align-items: center;

`;
Card.Title = styled.Text`
font-size: 30px;
text-align: center;
`;
const ScreenForgotPass = ({navigation,route}) => {
    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);
    
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('ForgotPass')),
        []
      );
      

    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
      );
    



    return (
        
            <NavMenuContext.Provider value={ {statePage}}>
                <Background>
                    <TopToolBar/>
        <Card>
        
            <Card.Title>
            Insira o e-mail que nos enviaremos o link de recuperação de senhe
            </Card.Title>
        </Card>

        <TextInput style={{}}label='e-mail'/>

        <Button mode='contained' color="#f2d89f" onPress={ ()=> Alert.alert('Um e-mail de recuperação de senha foi enviado para sua caixa de entrada.')}>
            Enviar
            </Button>
    </Background>
    </NavMenuContext.Provider>
);

}


export default ScreenForgotPass;