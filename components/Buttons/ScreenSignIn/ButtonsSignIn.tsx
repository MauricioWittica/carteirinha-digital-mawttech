import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const ButtonRegister = () => {
    const {setShowFirstSteps} = useContext(FirstStepsContext)

    const goRegister = async () => {  

       await AsyncStorage.setItem('@MAW_PRTB_FirtSteps:showFirstStpes', 'show');


        setShowFirstSteps('show')
    
    }


    return (<Button mode="text" color="#ff0000" onPress={() => goRegister()}>
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

    let deleteWarning = () => Alert.alert('Concluído', 'Dados apagados com sucesso!');

    let alertWarnig = () => Alert.alert('Aviso',
        'Se continuar seus dados de login serão apagados.\nPrecione "canselar" para recusar esta operação.',
        [
            { text: 'Cancelar', onPress: () => console.log('Cacelar on clicked!'), style: 'cancel' },
            { text: 'Continue', onPress: () => { deleteWarning(), console.log('Continue on clicked!') } }
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