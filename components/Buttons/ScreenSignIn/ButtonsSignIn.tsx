import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';




export const ButtonRegister = () => {
    const navigation = useNavigation();


    return (<Button mode="text" color="#ff0000" onPress={() => navigation.navigate('Register')}>
        Cadastrar
    </Button>
    );
}
export const ButtonForgotPass = () => {
    const navigation = useNavigation();


    return (
        <Button mode="text" color="#ff0000" onPress={() => navigation.navigate('ForgotPass')}>
            ESQUECI MINHA SENHA
        </Button>
    );
}


export const ButtonDeleteMyData = () => {
    const navigation = useNavigation();

let deleteWarning = () => Alert.alert('Concuído','Dados apagados com sucesso!');

    let alertWarnig  = () => Alert.alert('Aviso',
        'Se continuar seus dados de login serão apagados.\nPrecione "canselar" para recusar esta operação.',
        [
            { text: 'Cancelar', onPress: () =>  console.log('Cacelar on clicked!'), style: 'cancel'},
            { text: 'Continue', onPress: () => {deleteWarning(), console.log('Continuer on clicked!') }}
        ] 
    );

    return (<Button mode="text" color="#ff0000" onPress={() => alertWarnig()}>
        APAGAR MEUS DADOS
    </Button>);
}


export const ButtonConfirm = () => {

    return (
        <Button style={{ height: 80, borderRadius: 25 }} color="#f2d89f" mode="contained" onPress={() => Alert.alert('Fazendo Login...')} >
            CONFIRMAR
        </Button>
    );

}