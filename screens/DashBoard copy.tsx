import React, { useContext } from 'react';
import styled from 'styled-components';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import { View, Image, ScrollView } from 'react-native';
import AuthContext from '../contexts/auth';
import { IconButton } from 'react-native-paper';
import { InfoCirlceIcon } from '../components/icons/Info';
import FooterbarComponent from './../components/top-bar/Footerbar';
import TopToolBar from './../components/top-bar/Topbar';
import { NavMenuContext } from './../contexts/navMenu';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const Background = styled.View`
flex:1;
    background-color: #fff;`;


const ContainerTela = styled.View`
flex:1;
`;

//==============Header==========//
ContainerTela.Header = styled.View`
flex:1;
padding-bottom: 20px;
`;


ContainerTela.Header.Picture = styled.View`
flex:1;
align-self: center;
background-color: grey;
border-width: 5px;
border-color: #91d6b9;
border-radius: 25px;
margin-bottom: 0px;
bottom: 65px;
height: 220px;
width: 180px;

`;

ContainerTela.Header.SectionText = styled.View`

align-items: center;
position: relative;
justify-content: center;
bottom: 40px;
`;

ContainerTela.Header.Nome = styled.Text`
bottom: 20px;
font-size: 35px;
`;

ContainerTela.Header.NumReg = styled.Text`
font-size: 25px;
bottom: 20px;
color:#3e8769;
`;

ContainerTela.Header.Bio = styled.Text`
bottom: 10px;
font-size: 20px;
justify-content:center;
`;

//==============Section===============//

ContainerTela.Section = styled.View`
flex:1;
padding-left: 20px;
padding-right: 20px;
bottom: 65px;

`;


//===================1° Seção de Texto==================
ContainerTela.SectionText1 = styled.View``;

ContainerTela.SectionText1.Title = styled.Text`
font-size: 20px;
color:#3e8769;

`;

ContainerTela.SectionText1.Value = styled.Text`

font-size: 25px;`;


//===================2° Seção de Texto==================

ContainerTela.SectionText2 = styled.View`
flex-direction: row;

`;

ContainerTela.SectionText2.SectionZona = styled.View`

flex:1;
`;


ContainerTela.SectionText2.SectionSecao = styled.View`
flex:1;
`;
ContainerTela.SectionText2.SectionZona.TitleZona = styled.Text`
font-size: 20px;
color:#3e8769;
`;
ContainerTela.SectionText2.SectionZona.ValueZona = styled.Text`
font-size: 25px;`;

ContainerTela.SectionText2.SectionSecao.TitleSecao = styled.Text`
color:#3e8769;
font-size: 20px;
align-self:center;
`;
ContainerTela.SectionText2.SectionSecao.ValueSecao = styled.Text`
font-size: 25px;`;

//===================3° Seção de Texto==================
ContainerTela.SectionText3 = styled.View`
`;

ContainerTela.SectionText3.Municipio = styled.View``;

ContainerTela.SectionText3.Municipio.Title = styled.Text`
color:#3e8769;
font-size: 20px;`;

ContainerTela.SectionText3.Municipio.Value = styled.Text`
font-size: 25px;`;


ContainerTela.SectionText3.Filiacao = styled.View``;

ContainerTela.SectionText3.Filiacao.Title = styled.Text`
color:#3e8769;
font-size: 20px;`;

ContainerTela.SectionText3.Filiacao.Value = styled.Text`
font-size: 25px;`;


const ScreenDashBoard = ({ navigation, route }) => {
    const { user } = useContext(AuthContext);
    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);
    
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('Dashboard')),
        []
      );
      
    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
      );
    



    const record = user?.records;
    console.log(record?.register_number);


    return (
        
            <NavMenuContext.Provider value={ {statePage}}>
                
           
      
        <Background>
<TopToolBar/>
    
            
            <ScrollView>
                <HeaderGlobal />

                <ContainerTela>
                    <ContainerTela.Header>
                        <ContainerTela.Header.Picture>
                            <Image source={{ uri: record?.picture }} />
                        </ContainerTela.Header.Picture>

                        <ContainerTela.Header.SectionText>
                            <ContainerTela.Header.Nome>
                                {user?.name}
                            </ContainerTela.Header.Nome>
                            <ContainerTela.Header.NumReg >
                                N° {record?.register_number}
                            </ContainerTela.Header.NumReg>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                <ContainerTela.Header.Bio>
                                    {((record?.biometry) ? 'biometria coletada' : 'biometria não coletada')}
                                </ContainerTela.Header.Bio>
                                <View style={{ bottom: 20, justifyContent: 'center' }}>
                                    <IconButton icon={({ size, color }) => (
                                        <InfoCirlceIcon size={32} color="#3e8769" />)} onPress={() => { }} />

                                </View>
                            </View>
                        </ContainerTela.Header.SectionText>
                    </ContainerTela.Header>


                    <ContainerTela.Section>

                        <ContainerTela.SectionText1>
                            <ContainerTela.SectionText1.Title>
                                Data de nascimento
                            </ContainerTela.SectionText1.Title>

                            <ContainerTela.SectionText1.Value>
                                {record?.birth_date}
                            </ContainerTela.SectionText1.Value>
                        </ContainerTela.SectionText1>
                        <ContainerTela.SectionText2>
                            <ContainerTela.SectionText2.SectionZona>
                                <ContainerTela.SectionText2.SectionZona.TitleZona>
                                    Zona
                                </ContainerTela.SectionText2.SectionZona.TitleZona>
                                <ContainerTela.SectionText2.SectionZona.ValueZona>
                                    {record?.zone}
                                </ContainerTela.SectionText2.SectionZona.ValueZona>
                            </ContainerTela.SectionText2.SectionZona>

                            <ContainerTela.SectionText2.SectionSecao>
                                <ContainerTela.SectionText2.SectionSecao.TitleSecao>
                                    Seção
                                </ContainerTela.SectionText2.SectionSecao.TitleSecao>


                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <ContainerTela.SectionText2.SectionSecao.ValueSecao>
                                        {record?.section}
                                    </ContainerTela.SectionText2.SectionSecao.ValueSecao>
                                    <IconButton icon={({ size, color }) => (
                                        <InfoCirlceIcon size={32} color="#3e8769" />)} onPress={() => { }} />
                                    <View >
                                    </View>
                                </View>
                            </ContainerTela.SectionText2.SectionSecao>
                        </ContainerTela.SectionText2>

                        <ContainerTela.SectionText3>
                            <ContainerTela.SectionText3.Municipio>

                                <ContainerTela.SectionText3.Municipio.Title>
                                    Município/UF
                                </ContainerTela.SectionText3.Municipio.Title>
                                <ContainerTela.SectionText3.Municipio.Value>
                                    {record?.county}
                                </ContainerTela.SectionText3.Municipio.Value>

                            </ContainerTela.SectionText3.Municipio>

                            <ContainerTela.SectionText3.Filiacao>
                                <ContainerTela.SectionText3.Filiacao.Title>
                                    Filiação
                                </ContainerTela.SectionText3.Filiacao.Title>
                                <ContainerTela.SectionText3.Filiacao.Value>
                                    {record?.affiliation}
                                </ContainerTela.SectionText3.Filiacao.Value>
                            </ContainerTela.SectionText3.Filiacao>
                        </ContainerTela.SectionText3>
                    </ContainerTela.Section>



                </ContainerTela>
            </ScrollView>
            <FooterbarComponent />

        </Background>
        </NavMenuContext.Provider>
    );

}

export default ScreenDashBoard;



