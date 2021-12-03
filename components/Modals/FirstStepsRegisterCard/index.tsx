import React, { useContext } from 'react';

import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native';
import FirstSteps from '../../FistSteps';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';
import { CardRegisterForm } from './../../Forms/CardRegister/index';


const FirstStepsRegisterCardModal: React.FC = () => {
    const { activeFirstStepsStage4, hiddenMessageIntroRegister } = useContext(FirstStepsContext);


    return (<View >
        <Modal
            animationType="slide"

            transparent={false}
            statusBarTranslucent={false}
            visible={activeFirstStepsStage4}
            onRequestClose={() => {

            }}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>Cadastro de dados</Text>

                        <Text style={styles.subTitle}>Preencha seus dados da carteirinha </Text>
                    </View>
                    <View>

                        <CardRegisterForm />

                    </View>
                </View>
            </ScrollView>
        </Modal>
    </View>);

}

export default FirstStepsRegisterCardModal;

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
        },
        textHeaderContainer: {
            padding: 20,
        },
        title: {
            fontSize: 20,
            textAlign: 'center'
        },
        subTitle: {
            fontSize: 18,
            textAlign: 'center'
        }


    }
);