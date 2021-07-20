import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenSignIn from '../screens/SignIn';



const AuthStack = createStackNavigator();
const AuthRoutes = () =>(
    
    
        <AuthStack.Navigator headerMode={false}>
            <AuthStack.Screen name='SignIn' component={ScreenSignIn}/>
        </AuthStack.Navigator>
        
);

export default AuthRoutes;