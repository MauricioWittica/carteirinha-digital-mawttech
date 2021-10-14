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

export const BtnOut = () => {

    const {signOut} = useContext(AuthContext);
  
    function handleSignOut() {
        console.log('Fazendo Logout...');
        signOut();
    }


    return (
        <View style={{flex:1}}>
            <IconButton icon={({size, color})=>(
                <LogoutIcon size={24} color='black'/>
            )} onPress={() =>{handleSignOut()}}/>

        </View>
    );
}



