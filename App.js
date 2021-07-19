import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLogin from './screens/Login';
import ScreenSing from './screens/Sing';


const Stack = createStackNavigator();

const App = () =>{
  return (
  <NavigationContainer>
    <Stack.Navigator headerMode={false}>
    <Stack.Screen
    name='Login'
    component={ScreenLogin}

    />
    <Stack.Screen
    name='Sing'
    component={ScreenSing}

    />


    </Stack.Navigator>
    
  </NavigationContainer>
  );
}
export default App;