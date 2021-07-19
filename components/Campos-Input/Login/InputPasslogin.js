import React from 'react';
//import { TextInput } from 'react-native';
import styled from 'styled-components';
import { TextInput } from 'react-native-paper';

const ContainerPass = styled.View`

flex-direction: row;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;

`;

ContainerPass.Caracter = styled.TextInput`
flex:1;
text-align: center;
border-radius: 15px;
border-color: grey;
border-width: 4px;
height: 60px;
margin: 4px;
font-size: 16px;

`;

export const PassInput = () => {

   

  return (
 
    <ContainerPass>
      <ContainerPass.Caracter secureTextEntry placeholder='X1' maxLength={1}/>
      <ContainerPass.Caracter secureTextEntry placeholder='X2' maxLength={1}/>
      <ContainerPass.Caracter secureTextEntry placeholder='X3' maxLength={1}/>
      <ContainerPass.Caracter secureTextEntry placeholder='X4' maxLength={1}/>
      <ContainerPass.Caracter secureTextEntry placeholder='X5' maxLength={1}/>
      <ContainerPass.Caracter secureTextEntry placeholder='X6' maxLength={1}/>

        
    </ContainerPass>
  
  );
}