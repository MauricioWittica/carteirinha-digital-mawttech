import React from 'react';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import ScreenRegister from '../screens/Register';
import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import ScreenRegisterCard from './../screens/RegisterCard';



const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
const FirstStepsStack = createStackNavigator();
const FirstStepsRoutes = () =>(
    
    
    
        <FirstStepsStack.Navigator headerMode='none'>

            <FirstStepsStack.Screen 
            name='Register'
            component={ScreenRegister}
           
              />
              
            <FirstStepsStack.Screen 
            name='RegisterCard'
            component={ScreenRegisterCard}
           
              />



        </FirstStepsStack.Navigator>
        
);

export default FirstStepsRoutes;