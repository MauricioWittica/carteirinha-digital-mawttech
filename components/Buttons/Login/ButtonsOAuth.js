import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import AuthContext from '../../../contexts/auth';




export const BtnSignIn = ({ prop }) => {
    const { signed, user, signIn } = useContext(AuthContext);
    console.log(signed);
    console.log(user);
    function handleSignIn() {
        console.warn('Fazendo Login...');

        signIn();
    }

    return (
        <View>
                <Button  color="#f2d89f" mode="contained" onPress={ () => handleSignIn()} >
        CONFIRMAR
    </Button>
        </View>
    );
}

export const BtnOut = () => {

    const {signOut} = useContext(AuthContext);
  
    function handleSignOut() {
        console.warn('Fazendo Logout...');
        signOut();
    }


    return (
        <View>
            <Button mode='text' onPress={() =>{handleSignOut()}}>
                Fazer Logout
            </Button>
        </View>
    );
}



