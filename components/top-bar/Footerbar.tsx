import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { MoreVertIcon } from '../icons/More-Vert';
import { mdiSizeL } from '@mdi/js';
import { ChevronLeftIcon } from '../icons/Chevron';
import { useState} from 'react';
import { BtnOut } from '../Buttons/ScreenSignIn/ButtonsOAuth';
import { UserIcon } from './../icons/User/index';
import { useNavigation } from '@react-navigation/native';
import { VCardIcon } from '../icons/VCard';
import { MessageIcon } from '../icons/Message';




const BackgroundFooerbar = styled.View`
background-color: #3e8769;

position: relative;
border-top-width: 3px;
border-color: #919057;
bottom:0px;

`;

const FooterBar = styled.View`
flex-direction: row;`;

FooterBar.Left = styled.View`
flex:1;

align-items: center;

`;

FooterBar.Right = styled.View`
flex:1;

align-items: center;

`;

FooterBar.Middle = styled.View`
flex:2;
border-color: grey;
flex-direction: row;
align-items: center;
justify-content: center;

`;
FooterBar.Middle.Item = styled.View`
flex:1;

align-items: center;
`;

FooterBar.Title = styled.Text``;

FooterBar.SubTitle = styled.Text``;

//

const Footerbar = (props) => {
console.log(props.screen)

const styleActionPageOff = {
    background: '#3e8769',
    color: '#ececec'
}

const styleActionPageOn = {
    background: '#919057',
    color: 'black'
}



    const navigation = useNavigation();
    return (
        <BackgroundFooerbar>
            <FooterBar>

                <FooterBar.Left style={{backgroundColor: (props.screen === 'Dashboard' ? styleActionPageOn.background : styleActionPageOff.background)}}>
                    <IconButton  icon={({ size, color }) => (
                        <VCardIcon size={30} color={(props.screen === 'Dashboard' ? styleActionPageOn.color : styleActionPageOff.color)} />
                    )} onPress={() =>  navigation.navigate('DashBoard')} />

                </FooterBar.Left>

                <FooterBar.Middle>

                    <FooterBar.Middle.Item style={{backgroundColor: (props.screen === 'BoxMessages' ? styleActionPageOn.background : styleActionPageOff.background)}}>
                        <IconButton icon={({ size, color }) => (
                            <MessageIcon size={30} color={(props.screen === 'BoxMessages' ? styleActionPageOn.color : styleActionPageOff.color)} />
                        )} onPress={() => navigation.navigate('BoxMessages')}/>
                    </FooterBar.Middle.Item>


                    <FooterBar.Middle.Item style={{backgroundColor: (props.screen === 'CardEdit' ? styleActionPageOn.background : styleActionPageOff.background)}}>
                        <IconButton icon={({ size, color }) => (
                            <UserIcon size={24} color={(props.screen === 'CardEdit' ? styleActionPageOn.color : styleActionPageOff.color)} />
                        )} onPress={() => navigation.navigate('CardEdit')} />
                    </FooterBar.Middle.Item>
                </FooterBar.Middle>

                <FooterBar.Right>

                    <BtnOut size={30} color={ styleActionPageOff.color}/>
                </FooterBar.Right>

            </FooterBar>

        </BackgroundFooerbar>

    );
}

export default Footerbar;