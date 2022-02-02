import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'react-native-paper';
import { ChevronLeftIcon } from '../icons/Chevron';
import ButtonNavMenu from './../Buttons/Tool-Bars/ButtonNavMenu';
import NavMenuGerente from './../NavMenu/NavMenu-Gerente/index';
import { NavMenuContext } from './../../contexts/navMenu';
import { useNavigation } from '@react-navigation/native';
import Contate from './../Modals/Contate/ModalContate';





const BackgroundTopbar = styled.View`


position: relative;
top:0px;

`;

const Topbar = styled.View`
flex-direction: row;`;

Topbar.Left = styled.View`
flex:1;
`;

Topbar.Right = styled.View`
flex:1;
flex-direction:row-reverse;
`;

Topbar.Middle = styled.View`
flex:2;

`;


Topbar.Title = styled.Text``;

Topbar.SubTitle = styled.Text``;



const TopToolBar = () => {

    const navigation = useNavigation();
    return (
        <NavMenuContext.Consumer>{
            ({ statePage}) => (
        <BackgroundTopbar>

            <Topbar>

                <Topbar.Left>
                 

                </Topbar.Left>

                <Topbar.Middle>
                    <Topbar.Title></Topbar.Title>
                    <Topbar.SubTitle></Topbar.SubTitle>
                </Topbar.Middle>

                <Topbar.Right>
                   
                  
                    <ButtonNavMenu/>
                            <NavMenuGerente {...{statePage }}/>   
                                     <Contate/>            
                          
                    
                </Topbar.Right>
            </Topbar>

        </BackgroundTopbar>  
        )}
</NavMenuContext.Consumer>
    );
}

export default TopToolBar;