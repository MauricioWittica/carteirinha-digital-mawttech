import React, {useRef} from 'react';
import { View, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';


export const RegisterForm = () => {
const inputRef = useRef(null)


    let firstNameInput = null;
    let lastNameInput = null;
    let emailInput = null;
    let passwordInput = null;
    let passwordReviewInput = null;



    return (
        <View>

            <TextInput
                label='Nome'
                placeholder='Ex: João'
                ref={(input1) => { firstNameInput = input1, inputRef }}
                autoCompleteType='name'

                onSubmitEditing={() => { lastNameInput.focus(); }}
                blurOnSubmit={false}

                returnKeyType={"next"}
                keyboardType="default"
            />

            <TextInput
                label='Sobrenome'
                placeholder='Ex: Batista'
                ref={(input2) => { lastNameInput = input2; }}
                autoCompleteType='name'

                onSubmitEditing={() => { emailInput.focus(); }}
                blurOnSubmit={false}

                returnKeyType={"next"}
                keyboardType="default"
            />

            <TextInput
                label='email'
                placeholder='ex: exemplo@email.com'
                ref={(input3) => { emailInput = input3; }}
                autoCompleteType='email'

                onSubmitEditing={() => { passwordInput.focus(); }}
                blurOnSubmit={false}

                returnKeyType={"next"}
                keyboardType="email-address"
            />

            <TextInput
                label='Senha'
                maxLength={20}
                placeholder='* * * * * * * *'
                autoCompleteType='password'

                onSubmitEditing={() => { passwordReviewInput.focus(); }}
                blurOnSubmit={false}

                secureTextEntry
                ref={(input4) => { passwordInput = input4; }}


                returnKeyType={"next"}
                right={<TextInput.Icon name="eye" />}
            />

            <TextInput
                label='Senha'
                maxLength={20}
                placeholder='* * * * * * * *'
                ref={(input5) => { passwordReviewInput = input5; }}
                autoCompleteType='password'
                onSubmitEditing={() => { Alert.alert('Cadastro de carteirinha', 'Sua carteirinha foi salva com sucesso' + firstNameInput.current?.values) }}


                secureTextEntry
                returnKeyType={"default"}
                right={<TextInput.Icon name="eye" />}
            />

        </View>
    );
}



export default RegisterForm;
