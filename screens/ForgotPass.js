import React from 'react';
import styled  from 'styled-components';
import { Button, Text, TextInput} from 'react-native-paper';
import { Alert } from 'react-native';


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
return(

    <Background>
        <Card>

            <Card.Title>
            Insira o e-mail que nos enviaremos o link de recuperação de senhe
            </Card.Title>
        </Card>

        <TextInput label='e-mail'/>

        <Button mode='contained' color="#f2d89f" onPress={ ()=> Alert.alert('Um e-mail de recuperação de senha foi enviado para sua caixa de entrada.')}>
            Enviar
            </Button>
    </Background>
);

}


export default ScreenForgotPass;