import React from 'react';
import { Modal, View } from 'react-native';
import { useContext } from 'react';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';
import FirstStepsCongratulation from './../../FirstStepsCongratulation/index';



export const FirstStepsCongratulationModal: React.FC= () =>{
const {hiddenRegisterAccount,activeFirstStepsStage7} = useContext(FirstStepsContext);

    return(<>
    
    <Modal
    animationType='slide'
    visible={activeFirstStepsStage7}
    transparent={false}
    onRequestClose={() => {
    }}
    
    >
        <FirstStepsCongratulation/>
    </Modal>
 
    
    </>);
}
