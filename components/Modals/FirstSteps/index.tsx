import React, { useContext } from 'react';

import { View,  Modal, StyleSheet } from 'react-native';
import FirstSteps from '../../FistSteps';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';


const FirstStepsModal: React.FC = () => {
    const {activeFirstStepsStage1, hiddenMessageIntroRegister} = useContext(FirstStepsContext);


    return (<View style={{ backgroundColor: '#f10da5' }}>
        <Modal
            animationType="slide"
            
            transparent={false}
            statusBarTranslucent={false}
            visible={activeFirstStepsStage1}
            onRequestClose={() => {
                   
            }}>

            <FirstSteps/>
        </Modal>
    </View>);

}

export default FirstStepsModal;

const styles = StyleSheet.create(
    {
        container:{},
textHeaderContainer:{
    padding: 20,
},


    }
);