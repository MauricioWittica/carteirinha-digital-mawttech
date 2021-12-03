import React, { useContext, useEffect } from 'react';
import AuthContext from '../contexts/auth';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { View, ActivityIndicator } from 'react-native';

import { FirstStepsContext } from '../contexts/firstStepsActions';
import FirstStepsRoutes from './first-steps.routes';
import { FirstRegisterAccountModal } from './../components/Modals/FirstRegisterAccount/index';



const Routes = () => {
    const { signed, loading } = useContext(AuthContext);
    const { showIntro, showFirstSteps } = useContext(FirstStepsContext);
    

    useEffect(
        () => {
               
           
            console.log('resultado do aperta do botão: ' + showFirstSteps)
            
        },
        []
    );


    if (loading) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#0099ff' />
            </View>);


    } else {


    }


    //console.log('firstSteps dentro do index : ' + showFirstSteps)
    
    return ( showFirstSteps === 'show' ? <FirstStepsRoutes/> : ( signed ? <AppRoutes /> : <AuthRoutes /> ));

   


}
export default Routes;