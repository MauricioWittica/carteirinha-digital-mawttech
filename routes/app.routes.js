import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenDashBoard from './../screens/DashBoard';


const AppStack = createStackNavigator();


const AppRoutes = () =>{
return(
    <AppStack.Navigator headerMode={false}>
        <AppStack.Screen name='DashBoard' component={ScreenDashBoard}/>
    </AppStack.Navigator>);
}

export default AppRoutes;