import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import AuthContext from '../../../contexts/auth';
import { LogoutIcon } from '../../icons/Logout/index';




export const BtnSignIn = (data) => {
    const { signed, user, signIn } = useContext(AuthContext);
    console.log(signed);
    console.log(user);
    function handleSignIn() {
        console.log('Fazendo Login...');

        signIn(data);
    }

    return (
        <View>
                <Button  color="#f2d89f" mode="contained" onPress={ () => handleSignIn()} >
        CONFIRMAR
    </Button>
        </View>
    );
}
interface propsBtnOut{
    size: number | string
    color: string
}
export const BtnOut = (propsBtnOut) => {

    const {signOut} = useContext(AuthContext);

    function handleSignOut() {
        console.log('Fazendo Logout...');
        Alert.alert('',
        'Realmente deseja sair de sua conta ?',
        [
            { text: 'NÃO', onPress: () =>  console.log('NÃO on clicked!'), style: 'cancel'},
            { text: 'SIM', onPress: () => {signOut(), console.log('SIM on clicked!') }}
        ] 

        
    );

    }


    return (
        <View style={{flex:1}}>
            <IconButton icon={({size, color})=>(
                <LogoutIcon size={propsBtnOut.size} color={propsBtnOut.color}/>
            )} onPress={() =>{handleSignOut()}}/>

        </View>
    );
}



