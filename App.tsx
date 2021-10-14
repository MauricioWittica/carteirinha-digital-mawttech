import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import ButtonNavMenuProvider from './contexts/buttonNavMenu';
import ButtonContateProvider from './contexts/buttonContate';



const App = () => {

  return (

    <NavigationContainer>
      <AuthProvider>
        <ButtonNavMenuProvider>
          <ButtonContateProvider>
            <Routes />
          </ButtonContateProvider>
        </ButtonNavMenuProvider>
      </AuthProvider>
    </NavigationContainer>

  );
}
export default App;