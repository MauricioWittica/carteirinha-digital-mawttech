import React, { useContext } from 'react';

import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native';
import FirstSteps from '../../FistSteps';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';
import { RegisterForm } from './../../Forms/Register/index';
import { HaveAccountButton } from './../../Buttons/HaveAccount/index';


const FirstStepsRegisterAccountModal: React.FC = () => {
    const { activeFirstStepsStage2, hiddenMessageIntroRegister } = useContext(FirstStepsContext);


    return (<View >

        <Modal

            animationType="slide"

            transparent={false}
            statusBarTranslucent={false}
            visible={activeFirstStepsStage2}
            onRequestClose={() => { }}>

            <ScrollView >
                <View style={styles.container}>

                    <View >
                        <Text style={styles.title} >
                            Cadastro de Carteirinha Digital
                        </Text>

                        <Text style={styles.subTitle }>
                            Preencha o formulário para criar a sua conta de login !
                        </Text>
                    </View>

                    <View >
                        <RegisterForm />
                    </View>

                </View>

            </ScrollView>
        </Modal>

    </View>);

}

export default FirstStepsRegisterAccountModal;

const styles = StyleSheet.create(
    {
        container:{
            padding: 20,
        },
textHeaderContainer:{
    padding: 20,
},
title:{
    fontSize: 20,
    textAlign: 'center'
},
subTitle:{
    fontSize: 18,
    textAlign: 'center'
}
    }
);