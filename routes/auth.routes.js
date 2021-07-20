import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenSignIn from './../screens/SignIn';
import ScreenRegister from './../screens/Register';
import ScreenForgotPass from './../screens/ForgotPass';





const AuthStack = createStackNavigator();
const AuthRoutes = () =>(
    
    
        <AuthStack.Navigator headerMode={false}>
            <AuthStack.Screen name='SignIn' component={ScreenSignIn}/>
            <AuthStack.Screen name='Register' component={ScreenRegister}/>
            <AuthStack.Screen name='ForgotPass' component={ScreenForgotPass}/>

        </AuthStack.Navigator>
        
);

export default AuthRoutes;