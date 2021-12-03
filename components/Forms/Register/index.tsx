import React, { useContext, useRef } from 'react';
import { View, Alert, TextInput, Button, Text } from 'react-native';
import { useEffect } from 'react';


import { Input } from './../Inputs/Simples/index';
import { AuthContext } from './../../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { FirstStepsContext } from './../../../contexts/firstStepsActions';
import { HaveAccountButton } from './../../Buttons/HaveAccount/index';




interface InputReference extends TextInput {

    value: string

}

interface FormData {
    firstName: string
    lastName: string
    email: string
    password: string
    passwordReview: string
}

interface ResponseRegisterUser {
    message: string
    erro: boolean
    id: string
}

export const RegisterForm = () => {
    const navigation = useNavigation()
   const { registerUsers , signed} = useContext(AuthContext)
    const firstNameRef = useRef<InputReference>(null)
    const lastNameRef = useRef<InputReference>(null)
    const emailRef = useRef<InputReference>(null)
    const passwordRef = useRef<InputReference>(null)
    const passwordReviewRef = useRef<InputReference>(null)
    const buttonRef = useRef(null)




  

    function verificarPassword(passRef1, passRef2) {

        if (passRef1.current.value?.trim() != passRef2.current.value?.trim()) {
            Alert.alert('Configuração de senha invalida ', 'A senha deve ser igual nos dois campos (Senha e Confirmar Senha).')
            return false
        }
    }
    function verificarInput(inputRef) {
        if (inputRef.current.value?.trim()) {
            return true
        } else {
            Alert.alert('Campos obrigatórios ', 'Um ou mais campos obrigatorios estão sem preencher.')

            return false
        }
    }


    function handlesForm() {

        if (!verificarInput(firstNameRef)) {
            firstNameRef.current.focus()
            firstNameRef.current.clear()

        } else if (!verificarInput(lastNameRef)) {
            lastNameRef.current.focus()
            lastNameRef.current.clear()

        } else if (!verificarInput(emailRef)) {
            emailRef.current.focus()
            emailRef.current.clear()

        } else if (!verificarInput(passwordRef)) {
            passwordRef.current.focus()
            passwordRef.current.clear()
        } else if (!verificarInput(passwordReviewRef)) {
            passwordReviewRef.current.focus()
            passwordReviewRef.current.clear()
            
        } else if (verificarPassword(passwordRef, passwordReviewRef)) {
            passwordRef.current.clear()
            passwordReviewRef.current.clear()
            passwordRef.current.focus()

        } else {
            let data = {
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }

          registerUsers(data)
             
            
    console.log('valor account ' + signed)
         }
        




    }

    function mensagem() {

        let mensagem = Alert.alert('Cadastro de carteirinha', 'Sua carteirinha foi salva com sucesso' + ((firstNameRef.current?.value) ? ' Nome: ' + firstNameRef.current?.value : "") + " " + ((lastNameRef.current?.value) ? lastNameRef.current?.value : "") + ((emailRef.current?.value) ? " email: " + emailRef.current?.value : "") + ((passwordRef.current?.value) ? " password: " + passwordRef.current?.value : ""))


        return mensagem;
    }

    return (
        <View>


            <Input
                field='Nome'
                placeholder='João'
                inputRef={firstNameRef}

                onChangeText={(text) => { firstNameRef.current.value = text }}

                autoCompleteType='name'

                onSubmitEditing={() => { lastNameRef.current.focus(); }}
                blurOnSubmit={false}

                returnKeyType={"next"}
                keyboardType="default"
            />


            <Input
                field='Sobrenome'
                placeholder='Batista'
                inputRef={lastNameRef}
                autoCompleteType='name'
                onChangeText={(text) => { lastNameRef.current.value = text }}


                onSubmitEditing={() => { emailRef.current.focus(); }}
                blurOnSubmit={false}

                returnKeyType={"next"}
                keyboardType="default"
            />


            <Input
                field='E-mail'
                placeholder='exemplo@email.com'
                inputRef={emailRef}
                autoCompleteType='email'
                onChangeText={(text) => { emailRef.current.value = text }}


                onSubmitEditing={() => { passwordRef.current.focus(); }}
                blurOnSubmit={false}

                returnKeyType={"next"}
                keyboardType="email-address"
            />

            <Input
                field='Senha'
                maxLength={6}
                placeholder='* * * * * * * *'
                inputRef={passwordRef}
                autoCompleteType='password'
                onChangeText={(text) => { passwordRef.current.value = text }}

                onSubmitEditing={() => { passwordReviewRef.current.focus(); }}
                blurOnSubmit={false}

                secureTextEntry


                returnKeyType={"next"}
            />

            <Input
                field='Confirme a senha'
                maxLength={6}
                placeholder='* * * * * * * *'
                inputRef={passwordReviewRef}
                autoCompleteType='password'
                onChangeText={(text) => { passwordReviewRef.current.value = text }}

                onSubmitEditing={() => { passwordReviewRef.current.focus(); }}
                secureTextEntry
                returnKeyType={"default"}
            />

            <Text></Text>

            <Button ref={buttonRef} title="Criar Conta" onPress={() => { handlesForm() }} />

            <Text></Text>
                       <HaveAccountButton/>
            
        </View>
    );
}



export default RegisterForm;
