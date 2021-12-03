import React from 'react';
import { Modal, View } from 'react-native';
import { useContext } from 'react';
import { FirstStepsContext } from '../../../contexts/firstStepsActions';
import FirstRegisterAccount from './../../FirstRegisterAccount/index';


export const FirstRegisterAccountModal: React.FC= () =>{
const {hiddenRegisterAccount,activeFirstStepsStage3} = useContext(FirstStepsContext);

    return(<>
    
    <Modal
    animationType='slide'
    visible={activeFirstStepsStage3}
    transparent={false}
    onRequestClose={() => {
    }}
    
    >
        <FirstRegisterAccount/>
    </Modal>
 
    
    </>);
}
