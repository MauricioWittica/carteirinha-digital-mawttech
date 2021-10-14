import React , { useContext, useEffect, useState }  from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import { ScreensContext } from './../contexts/screens';
import { NavMenuContext } from './../contexts/navMenu';
import TopToolBar from '../components/top-bar/Topbar';
import BasicExample from './../components/IconsLottie/index';




const Background = styled.View`
   
`;


const ScreenVerification = ({navigation,route}) => {
    const isFocused = useIsFocused();

 
    const [statePage, setStatePage] = useState<string | null>(null);
    
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('Verification')),
        []
      );
      

    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
      );
    


    return (
        
            <NavMenuContext.Provider value={ {statePage}}>
        <Background>
            <TopToolBar/>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 40, }}>
                <Text style={{  textAlign: 'center', padding: 40, }}>
                    Espasso para o QR-CODE
                    <BasicExample/>
                </Text>
            </View>
        </Background>
        </NavMenuContext.Provider>
    );
}


export default ScreenVerification;