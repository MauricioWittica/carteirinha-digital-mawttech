import React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';



export const ButtonForgotPass = () =>{
   
  return(  <Button mode="text" color="#ff0000" onPress={ () => Alert.alert('Enviando E-mail de recuperação de Senha')}>
  ESQUECI MINHA SENHA
</Button>
);
}

export const ButtonDeleteMyData = () => {

   return( <Button mode="text" color="#ff0000" onPress={ () => Alert.alert('Apagando Dados de Usuário!...')}>
   APAGAR MEUS DADOS
</Button>);
}

export const ButtonConfirm = () => {

    return(
        <Button style="border-radios: 20px" color="#f2d89f" mode="contained" onPress={ () => Alert.alert('Fazendo Login...')} >
            CONFIRMAR
        </Button>
    );

}