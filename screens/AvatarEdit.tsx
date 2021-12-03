import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import { ScreensContext } from '../contexts/screens';
import { NavMenuContext } from '../contexts/navMenu';
import TopToolBar from '../components/top-bar/Topbar';







const ScreenAvatarEdit = ({ navigation, route }) => {
    const isFocused = useIsFocused();


    const [statePage, setStatePage] = useState<string | null>(null);

    useEffect(
        () => navigation.addListener('focus', () => setStatePage('AvatarEdit')),
        []
    );


    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
    );



    return (

        <NavMenuContext.Provider value={{ statePage }}>
            <View >
                    
            </View>
        </NavMenuContext.Provider>
    );
}


export default ScreenAvatarEdit;