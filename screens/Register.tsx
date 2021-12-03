import React from 'react';
import styled from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useState } from 'react';
import TopToolBar from './../components/top-bar/Topbar';
import { NavMenuContext } from './../contexts/navMenu';
import { useEffect } from 'react';
import { RegisterForm } from './../components/Forms/Register/index';
import { ScrollView, Button } from 'react-native';
import { Text } from 'react-native-paper';
import { FirstStepsContext } from '../contexts/firstStepsActions';
import { Alert } from 'react-native';
import { HaveAccountButton } from '../components/Buttons/HaveAccount';
import FirstStepsModal from './../components/Modals/FirstSteps/index';
import FirstStepsRegisterAccountModal from './../components/Modals/FirstStepsRegisterAccount/index';
import FirstStepsRegisterCardModal from './../components/Modals/FirstStepsRegisterCard/index';
import { FirstRegisterAccountModal } from './../components/Modals/FirstRegisterAccount/index';
import FirstStepsRegisterSelfModal from './../components/Modals/FirstStepsRegisterSelf/index';
import CameraSelfModal from './../components/Modals/CameraSelf/index';
import { FirstStepsCongratulationModal } from './../components/Modals/FirstStepsCongratulation/index';



const Background = styled.View`
 flex:1;

    
    `;

const Cadastro = styled.View`
margin-top: 40px;
margin-bottom: 32px;

padding: 20px;
`;



const LabelCheckBox = styled.View`
flex-direction: row;

align-items: center;

`;

LabelCheckBox.Title = styled.Text``;
const ScreenRegister = ({ navigation, route }) => {

    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);

  
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('Register')),
        []
    );


    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
    );

  


    return (

        <NavMenuContext.Provider value={{ statePage }}>
            <Background>
                <ScrollView>
               
                    <Cadastro>
                    <FirstStepsModal/>
                <FirstStepsRegisterAccountModal/>
                <FirstRegisterAccountModal/>
                <FirstStepsRegisterCardModal/>
                <FirstStepsRegisterSelfModal/>
                <CameraSelfModal />
                <FirstStepsCongratulationModal/>
                    </Cadastro>
                   
                </ScrollView>
            </Background>
        </NavMenuContext.Provider>
    );
  

}

export default ScreenRegister;