import React, { useContext } from 'react';
import { Alert, Button } from 'react-native';
import { FirstStepsContext } from './../../../contexts/firstStepsActions';
import AsyncStorage  from '@react-native-async-storage/async-storage';


export const HaveAccountButton : React.FC=()=>{
    const {setShowFirstSteps} = useContext(FirstStepsContext);

    const onDone = async () => {
        
await AsyncStorage.setItem('@MAW_PRTB_FirstStps:showFirstSteps', 'hidden')
        setShowFirstSteps('hidden'); 

     }
  
    
     function handleSignOut() {
        
        Alert.alert('',
        'Realmente deseja sair para tela de login ?',
        [
            { text: 'NÃO', onPress: () =>  console.log('NÃO on clicked!'), style: 'cancel'},
            { text: 'SIM', onPress: () => { onDone(), console.log('SIM on clicked!') }}
        ] 

        
    );
     }
    return(
        <Button title='Já tenho conta' onPress={()=>{handleSignOut()}}/>

    );
}