import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenDashBoard from '../screens/DashBoard';
import ScreenVerification from './../screens/Verification';


const AppStack = createStackNavigator();


const AppRoutes = () =>{
return(
    <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='DashBoard' component={ScreenDashBoard}/>
        <AppStack.Screen name='Verification'component={ScreenVerification}/>
        
    </AppStack.Navigator>);
}

export default AppRoutes;