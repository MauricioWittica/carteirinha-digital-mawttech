import React, { useContext } from 'react';
import styled from 'styled-components';
import HeaderGlobal from '../components/Headers/HeaderGeneric';
import { View, Image, ScrollView } from 'react-native';
import AuthContext from '../contexts/auth';
import Footerbar from '../components/top-bar/Footerbar';
import TopToolBar from '../components/top-bar/Topbar';
import { NavMenuContext } from '../contexts/navMenu';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import ImageAvatar from '../components/ImageAvatar/index';
import ButtonAvatarEdit from '../components/Buttons/AvatarEdit/ButtonAvatarEdit';
import { CardEditForm } from './../components/Forms/CardEdit/index';
import CameraModal from '../components/Modals/CameraSelf';

const Background = styled.View`
flex:1;
    `;


const ContainerTela = styled.View`
flex:1;
margin-bottom: 20px;
`;


const Cadastro = styled.View`

padding: 0px 20px 0px 20px;
`;
//==============Header==========//
ContainerTela.Header = styled.View`
flex:1;

`;


ContainerTela.Header.Picture = styled.View`
flex:1;
align-items: center;
margin-bottom: -10%;
`;


const ScreenCardEdit = ({ navigation, route }) => {
    const { user } = useContext(AuthContext);
    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);

    useEffect(
        () => navigation.addListener('focus', () => setStatePage('CardEdit')),
        []
    );

    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
    );





    return (

        <NavMenuContext.Provider value={{ statePage }}>



            <Background>
                <TopToolBar />


                <ScrollView>
                    <HeaderGlobal />

                    <ContainerTela>
                        <ContainerTela.Header>
                            <ContainerTela.Header.Picture>
                                <ImageAvatar />
                                <ButtonAvatarEdit />
                            </ContainerTela.Header.Picture>
                            <CameraModal />


                        </ContainerTela.Header>
                        <Cadastro>
                            <CardEditForm />

                        </Cadastro >

                    </ContainerTela>
                </ScrollView>
                <Footerbar screen={statePage} />

            </Background>
        </NavMenuContext.Provider>
    );
}

export default ScreenCardEdit;



