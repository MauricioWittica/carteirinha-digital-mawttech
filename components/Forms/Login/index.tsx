import React from 'react';

import { View, Alert, TextInput, Text } from 'react-native';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';
import styled from 'styled-components';
import { Button, IconButton } from 'react-native-paper';
import PassActionsProvider, { PassActionsContext } from '../../../contexts/password_actions';
import { useState, useRef, useContext } from 'react';
import { createContext } from 'react';
import { ButtonForgotPass } from '../../Buttons/ScreenSignIn/ButtonsSignIn';
import { ButtonRegister, ButtonDeleteMyData } from '../../Buttons/ScreenSignIn/ButtonsSignIn';
import { BtnSignIn } from '../../Buttons/ScreenSignIn/ButtonsOAuth';
import { AuthContext } from '../../../contexts/auth';
import InputMask from '../Inputs/Mask';
import { Input } from './../Inputs/Simples/index';




const Version = styled.Text`

height: 50px;
padding-right: 10px;
text-align: right;
`;

const ContainerPass = styled.View`

flex-direction: row;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;

`;

ContainerPass.Input = styled.TextInput`
  
  flex:1;
text-align: center ;
border-radius: 15px;
border-color: grey;
border-width: 3px;
height: 60px;
margin: 3px;
font-size: 16px;

`;



const ContainerTela = styled.View`

padding-bottom: 20px;

`;

ContainerTela.PassInput = styled.View`

`;


ContainerTela.Buttons = styled.View`

`;


interface InputReference extends TextInput {

  value: string

}



export const PassForm = () => {

  const [input1, setInput1] = useState(true);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [input4, setInput4] = useState(false);
  const [input5, setInput5] = useState(false);
  const [input6, setInput6] = useState(false);

  const n1Ref = useRef<InputReference>(null)
  const n2Ref = useRef<InputReference>(null)
  const n3Ref = useRef<InputReference>(null)
  const n4Ref = useRef<InputReference>(null)
  const n5Ref = useRef<InputReference>(null)
  const n6Ref = useRef<InputReference>(null)
  const emailRef = useRef<InputReference>(null)
  const sendRef = useRef(null)

  const { signed, user, signIn } = useContext(AuthContext);
  console.log(signed);
  console.log(user);
  function handleSignIn() {
    console.log('Fazendo Login...');
    if (!verificarInput(n1Ref)) {
      n1Ref.current.focus()
      n1Ref.current.clear()

    } else if (!verificarInput(n2Ref)) {
      n2Ref.current.focus()
      n2Ref.current.clear()

    } else if (!verificarInput(n3Ref)) {
      n3Ref.current.focus()
      n3Ref.current.clear()

    } else if (!verificarInput(n4Ref)) {
      n4Ref.current.focus()
      n4Ref.current.clear()
    } else if (!verificarInput(n5Ref)) {
      n5Ref.current.focus()
      n5Ref.current.clear()
    } else if (!verificarInput(n6Ref)) {
      n6Ref.current.focus()
      n6Ref.current.clear()
    } else {

      let password = n1Ref.current.value + n2Ref.current.value + n3Ref.current.value + n4Ref.current.value + n5Ref.current.value + n6Ref.current.value
      const data = {
        email: emailRef.current.value,
        password: password

      }

      signIn(data)

    }

  }
  const focuBackground = {

    focused: "grey",
    unfocused: "white"
  }

  function verificarInput(inputRef) {
    if (inputRef.current.value?.trim()) {
      return true
    } else {
      Alert.alert('Campos obrigatórios ',
        'Campos de email e senha são obrigatórios.',
        [
          { text: 'entendi', onPress: () => console.log('Ok Pressed') }
        ]
      );

      return false
    }
  }

  

  return (

    <View>
      <ContainerTela.PassInput>
        <ContainerPass>
          <ContainerPass.Input style={{ backgroundColor: input1 ? focuBackground.focused : focuBackground.unfocused }}
            ref={n1Ref}
            returnKeyType={"next"}
            onChangeText={(text) => { setInput1(false), text != '' ? n2Ref.current.focus() : "", n1Ref.current.value = text, console.log(text) }}
            onFocus={() => setInput1(true)}
            onEndEditing={() => setInput1(false)}
            maxLength={1}
            onSubmitEditing={() => { n2Ref.current.focus(); }}
            blurOnSubmit={false}
            autoFocus={true}
            secureTextEntry

          />

          <ContainerPass.Input style={{ backgroundColor: input2 ? focuBackground.focused : focuBackground.unfocused }}
            ref={n2Ref}
            returnKeyType={"next"}
            onChangeText={(text) => { setInput2(false), text != '' ? n3Ref.current.focus() : "", n2Ref.current.value = text, console.log(text) }}
            onFocus={() => setInput2(true)}
            onEndEditing={() => setInput2(false)}
            onSubmitEditing={() => { n3Ref.current.focus(); }}
            maxLength={1}
            blurOnSubmit={false}
            secureTextEntry

          />

          <ContainerPass.Input style={{ backgroundColor: input3 ? focuBackground.focused : focuBackground.unfocused }}
            ref={n3Ref}
            returnKeyType={"next"}
            onChangeText={(text) => { setInput3(false), text != '' ? n4Ref.current.focus() : "", n3Ref.current.value = text, console.log(text) }}
            onFocus={() => setInput3(true)}
            onEndEditing={() => setInput3(false)}
            onSubmitEditing={() => { n4Ref.current.focus(); }}
            maxLength={1}
            blurOnSubmit={false}
            secureTextEntry

          />

          <ContainerPass.Input style={{ backgroundColor: input4 ? focuBackground.focused : focuBackground.unfocused }}
            ref={n4Ref}
            returnKeyType={"next"}
            onChangeText={(text) => { setInput4(false), text != '' ? n5Ref.current.focus() : "", n4Ref.current.value = text, console.log(text) }}
            onFocus={() => setInput4(true)}
            onEndEditing={() => setInput4(false)}
            onSubmitEditing={() => { n5Ref.current.focus(); }}
            maxLength={1}
            blurOnSubmit={false}
            secureTextEntry

          />

          <ContainerPass.Input style={{ backgroundColor: input5 ? focuBackground.focused : focuBackground.unfocused }}
            ref={n5Ref}
            returnKeyType={"next"}
            onChangeText={(text) => { setInput5(false), text != '' ? n6Ref.current.focus() : "", n5Ref.current.value = text, console.log(text) }}
            onFocus={() => setInput5(true)}
            onEndEditing={() => setInput5(false)}
            onSubmitEditing={() => { n6Ref.current.focus(); }}
            maxLength={1}
            blurOnSubmit={false}
            secureTextEntry



          />

          <ContainerPass.Input style={{ backgroundColor: input6 ? focuBackground.focused : focuBackground.unfocused }}
            ref={n6Ref}
            returnKeyType={"next"}
            onChangeText={(text) => { setInput6(false), n6Ref.current.value = text, console.log(text) }}
            onFocus={() => setInput6(true)}
            maxLength={1}
            onEndEditing={() => setInput6(false)}
            onSubmitEditing={() => { emailRef.current.focus(); }}
            secureTextEntry

          />


        </ContainerPass>

<View style={{paddingLeft: 20, paddingRight: 20}}>
  
<Input
        field='email'
          placeholder='ex: exemplo@email.com'
          inputRef={emailRef}
          autoCompleteType='email'
          onChangeText={(text) => { emailRef.current.value = text }}


          onSubmitEditing={() => { handleSignIn() }}
         
          returnKeyType='send'
          keyboardType="email-address"
          

        />
</View>

     

      </ContainerTela.PassInput>





      <ContainerTela.Buttons>





        <ButtonForgotPass />
        <ButtonRegister />
        <ButtonDeleteMyData />
        <Version>
          Versão 1.0.0
        </Version>




        <Button  color="#f2d89f" mode="contained" onPress={() => handleSignIn()} >
          CONFIRMAR
        </Button>




      </ContainerTela.Buttons>
    </View>
  );



}





