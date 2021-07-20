import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';





const App = () => {


  return (
    <NavigationContainer>
      <AuthProvider>
      <Routes/>
    </AuthProvider>
    </NavigationContainer>
  );
}
export default App;

/**

  const Stack = createStackNavigator();
  <Stack.Navigator headerMode={false}>
    <Stack.Screen
    name='SignIn'
    component={ScreenSignIn}

    />

    <Stack.Screen
    name='Register'
    component={ScreenRegister}

    />

    </Stack.Navigator>
     */