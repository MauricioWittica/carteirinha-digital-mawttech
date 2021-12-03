import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ScreenAvatarEdit from '../screens/AvatarEdit';


const CameraStack = createStackNavigator();


const CameraRoutes = () =>{
return(
    <CameraStack.Navigator headerMode='none'>
 
 <CameraStack.Screen name='AvatarEdit'component={ScreenAvatarEdit}/>

        
    </CameraStack.Navigator>);
}

export default CameraRoutes;