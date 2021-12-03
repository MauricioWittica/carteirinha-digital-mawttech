import React, { useContext } from 'react';

import { View,  Modal, StyleSheet } from 'react-native';
import FirstSteps from '../../FistSteps';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';
import RegisterSelfIcon from '../../icons/Lottie/RegisterSelf';
import FirstRegisterSelf from '../../FirstRegisterSelf/index';


const FirstStepsRegisterSelfModal: React.FC = () => {
    const {activeFirstStepsStage5} = useContext(FirstStepsContext);


    return (<View>
        <Modal
            animationType="slide"
            
            transparent={false}
            statusBarTranslucent={false}
            visible={activeFirstStepsStage5}
            onRequestClose={() => {
                   
            }}>

            <FirstRegisterSelf/>
        </Modal>
    </View>);

}

export default FirstStepsRegisterSelfModal;

const styles = StyleSheet.create(
    {
        container:{},
textHeaderContainer:{
    padding: 20,
},


    }
);