import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import ButtonNavMenuProvider from './contexts/buttonNavMenu';
import ButtonContateProvider from './contexts/buttonContate';
import { CameraProvider } from './contexts/camera';
import {FirstStepsProvider} from './contexts/firstStepsActions';



const App = () => {

  return (

    <NavigationContainer>
      <FirstStepsProvider>
      <CameraProvider>
      <AuthProvider>
        <ButtonNavMenuProvider>
          <ButtonContateProvider>

          
           <Routes />
          </ButtonContateProvider>
        </ButtonNavMenuProvider>
      </AuthProvider>
          </CameraProvider>
          </FirstStepsProvider>
    </NavigationContainer>

  );
}
export default App;