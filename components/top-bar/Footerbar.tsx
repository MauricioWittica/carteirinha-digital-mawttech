import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import {IconButton} from 'react-native-paper';
import { MoreVertIcon } from '../icons/More-Vert';
import { mdiSizeL } from '@mdi/js';
import { ChevronLeftIcon } from '../icons/Chevron';
import { useState } from 'react';
import { BtnOut } from '../Buttons/ScreenSignIn/ButtonsOAuth';
import { UserIcon } from './../icons/User/index';




const BackgroundFooerbar = styled.View`
background-color: #3e8769;

position: relative;
border-top-width: 5px;
border-color: #919057;
bottom:0px;
`;

const Topbar = styled.View`
flex-direction: row;`;

Topbar.Left = styled.View`
flex:1;
border-width: 2px;

border-color: grey;
`;

Topbar.Right = styled.View`
flex:1;
flex-direction:row-reverse;
justify-content: center;
border-width: 2px;
border-color: grey;
`;

Topbar.Middle = styled.View`
flex:4;
border-color: grey;
flex-direction: row;
`;


Topbar.Title = styled.Text``;

Topbar.SubTitle = styled.Text``;



const FooterbarComponent = () => {
    return (
        <BackgroundFooerbar>
            <Topbar>

                <Topbar.Left>
                <IconButton icon={({size,color})=>(
                    <ChevronLeftIcon size={24} color="black"/>
                )} onPress={()=>{}}/>
                    
                </Topbar.Left>

                <Topbar.Middle>
                <IconButton icon={({size,color})=>(
                    <UserIcon size={30} color="black"/>
                )} onPress={()=>{}}/>
                <IconButton icon={({size,color})=>(
                    <UserIcon size={30} color="black"/>
                )} onPress={()=>{}}/>
                <IconButton icon={({size,color})=>(
                    <UserIcon size={30} color="black"/>
                )} onPress={()=>{}}/>
                <IconButton icon={({size,color})=>(
                    <UserIcon size={30} color="black"/>
                )} onPress={()=>{}}/>
                </Topbar.Middle>

                <Topbar.Right>
               
             <BtnOut/>
                   
                </Topbar.Right>

            </Topbar>
           
        </BackgroundFooerbar>

    );
}

export default FooterbarComponent;