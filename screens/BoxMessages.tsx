import React , { useContext, useEffect, useState }  from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import { ScreensContext } from '../contexts/screens';
import { NavMenuContext } from '../contexts/navMenu';
import TopToolBar from '../components/top-bar/Topbar';
import Footerbar from './../components/top-bar/Footerbar';
import BoxMessageEmpty from '../components/icons/Lottie/BoxMessageEmpty';




const Background = styled.View`
   flex:1;
`;

const ContainerTela = styled.View`
flex:1;
`;

const ScreenBoxMessages = ({navigation,route}) => {
    const isFocused = useIsFocused();

 
    const [statePage, setStatePage] = useState<string | null>(null);
    
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('BoxMessages')),
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
            <ContainerTela>
            <View style={{ justifyContent: 'center',alignItems: 'center', padding: 40, }}>
                <Text style={{ fontWeight:'400', textAlign: 'center',  padding: 12, color:'#7e7e7e', fontSize: 28 }}>
                    Você não tem novas mensagens.                    
                </Text>               
            </View>
            <BoxMessageEmpty/>
            </ContainerTela>
            <Footerbar screen={statePage}/>
        </Background>
        </NavMenuContext.Provider>
    );
}


export default ScreenBoxMessages;