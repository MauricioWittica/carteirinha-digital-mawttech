import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenDashBoard from '../screens/DashBoard';
import ScreenBoxMessages from '../screens/BoxMessages';
import ScreenCardEdit from '../screens/CardEdit';
import ScreenAvatarEdit from '../screens/AvatarEdit';
import ScreenHistory from '../screens/History';


const AppStack = createStackNavigator();


const AppRoutes = () =>{
return(
    <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='DashBoard' component={ScreenDashBoard}/>
        <AppStack.Screen name='CardEdit' component={ScreenCardEdit}/>
        <AppStack.Screen name='BoxMessages'component={ScreenBoxMessages}/>
        
    </AppStack.Navigator>);
}

export default AppRoutes;