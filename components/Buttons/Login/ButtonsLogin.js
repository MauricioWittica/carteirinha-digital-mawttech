import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';




export const ButtonRegister = () =>{
    const navigation = useNavigation();
   

  return(  <Button mode="text" color="#ff0000" onPress={ () => navigation.navigate('Register')}>
  Cadastrar
</Button>
);
}
export const ButtonForgotPass = () =>{
    const navigation = useNavigation();

   
  return(  
  <Button mode="text" color="#ff0000" onPress={async () => navigation.navigate('ForgotPass')}>
  ESQUECI MINHA SENHA
</Button>
);
}

export const ButtonDeleteMyData = () => {
    const navigation = useNavigation();

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