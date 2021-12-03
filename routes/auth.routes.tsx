import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenSignIn from '../screens/SignIn';
import ScreenRegister from '../screens/Register';
import ScreenForgotPass from '../screens/ForgotPass';

import ScreenCameraFront from '../components/Camera/index';






const AuthStack = createStackNavigator();


  
const AuthRoutes = () => (
   



        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name='SignIn' component={ScreenSignIn} />
            <AuthStack.Screen name='ForgotPass' component={ScreenForgotPass} />
            <AuthStack.Screen name='Camera' component={ScreenCameraFront} />
        </AuthStack.Navigator>
      
   

);

export default AuthRoutes;