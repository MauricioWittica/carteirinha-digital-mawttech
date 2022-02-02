import React, { useContext } from 'react';
import styled from 'styled-components';
import HeaderGlobal from '../components/Headers/HeaderGeneric';
import { View, Image, ScrollView, Text } from 'react-native';
import AuthContext from '../contexts/auth';
import { IconButton } from 'react-native-paper';
import { InfoCirlceIcon } from '../components/icons/Info';
import Footerbar from './../components/top-bar/Footerbar';
import TopToolBar from './../components/top-bar/Topbar';
import { NavMenuContext } from './../contexts/navMenu';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import ImageAvatar from './../components/ImageAvatar/index';



const Background = styled.View`
flex:1;
`;


const ContainerTela = styled.View`
flex:1;
`;

//==============Header==========//
ContainerTela.Header = styled.View`
flex:1;

`;

ContainerTela.Header.Picture = styled.View`
flex:1;
align-Items: center;

`;

ContainerTela.Header.SectionText = styled.View`
align-items: center;
justify-content: center;
`;


ContainerTela.Header.Nome = styled.Text`
font-size: 35px;

`;


ContainerTela.Header.ElectorTitle = styled.Text`
font-size: 20px;

color:#3e8769;
`;


ContainerTela.Header.ElectorTitle.Value = styled.Text`
font-size: 25px;
`;



//==============Section===============//

ContainerTela.Section = styled.View`
flex:1;
padding-left: 20px;
padding-right: 20px;

`;



//===================1° Seção de Texto==================//
ContainerTela.SectionText1_1 = styled.View`
margin-bottom: 15px;
`;

ContainerTela.SectionText1_1.BirthDateTitle = styled.Text`
font-size: 20px;
color:#3e8769;

`;

ContainerTela.SectionText1_1.BirthDateValue = styled.Text`

font-size: 25px;`;

//===================1° Seção de Texto RG==================//
ContainerTela.SectionText1_2 = styled.View`
margin-bottom: 15px;
`;

ContainerTela.SectionText1_2.RgTitle = styled.Text`
font-size: 20px;
color:#3e8769;

`;

ContainerTela.SectionText1_2.RgValue = styled.Text`

font-size: 25px;`;

//===================1° Seção de Texto CPF==================//
ContainerTela.SectionText1_3 = styled.View`
margin-bottom: 15px;
`;

ContainerTela.SectionText1_3.CPFTitle = styled.Text`
font-size: 20px;
color:#3e8769;

`;

ContainerTela.SectionText1_3.CPFValue = styled.Text`

font-size: 25px;`;



//===================2° Seção de Texto==================
ContainerTela.SectionText2 = styled.View`
`;

ContainerTela.SectionText2.Municipio = styled.View`
margin-bottom: 15px;
`;

ContainerTela.SectionText2.Municipio.Title = styled.Text`
color:#3e8769;
font-size: 20px;`;

ContainerTela.SectionText2.Municipio.Value = styled.Text`
font-size: 25px;`;


ContainerTela.SectionText2.Filiacao = styled.View`
margin-bottom: 15px;
`;

ContainerTela.SectionText2.Filiacao.Title = styled.Text`
color:#3e8769;
font-size: 20px;`;


ContainerTela.SectionText2.Filiacao.Value = styled.Text`
font-size: 25px;
`;

//===================2° Seção de Texto 2==================

ContainerTela.SectionText2_2 = styled.View`
flex-direction: row;

`;

ContainerTela.SectionText2_2.SectionZona = styled.View`

flex:1;
`;


ContainerTela.SectionText2_2.SectionSecao = styled.View`
flex:1;
`;
ContainerTela.SectionText2_2.SectionZona.TitleZona = styled.Text`
font-size: 20px;
color:#3e8769;
`;
ContainerTela.SectionText2_2.SectionZona.ValueZona = styled.Text`
font-size: 25px;`;

ContainerTela.SectionText2_2.SectionSecao.TitleSecao = styled.Text`
color:#3e8769;
font-size: 20px;
align-self:center;
`;
ContainerTela.SectionText2_2.SectionSecao.ValueSecao = styled.Text`
align-self:center;

font-size: 25px;`;


const ScreenDashBoard = ({ navigation, route }) => {
    const { user, card, getCard } = useContext(AuthContext);
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

   /** useEffect(

        () => {
            async function showCard() {
                getCard()
            }
            showCard()
        }, []); */

    return (

        <NavMenuContext.Provider value={{ statePage }}>



            <Background>
               


                <ScrollView>
                    <HeaderGlobal />

                    <ContainerTela>
                        <ContainerTela.Header>
                            <ContainerTela.Header.Picture>
                                <ImageAvatar />
                            </ContainerTela.Header.Picture>

                            <ContainerTela.Header.SectionText>
                                <ContainerTela.Header.Nome>
                                    {user?.first_name + " " + user?.last_name}
                                </ContainerTela.Header.Nome>

                            </ContainerTela.Header.SectionText>
                        </ContainerTela.Header>


                        <ContainerTela.Section>

                            <ContainerTela.SectionText1_1>
                                <ContainerTela.SectionText1_1.BirthDateTitle>
                                    Data de nascimento
                                </ContainerTela.SectionText1_1.BirthDateTitle>

                                <ContainerTela.SectionText1_1.BirthDateValue>
                                    {card?.birth_date}
                                </ContainerTela.SectionText1_1.BirthDateValue>
                            </ContainerTela.SectionText1_1>

                            <ContainerTela.SectionText1_2>
                                <ContainerTela.SectionText1_2.RgTitle>
                                    RG
                                </ContainerTela.SectionText1_2.RgTitle>

                                <ContainerTela.SectionText1_2.RgValue>
                                    {card?.documents.rg}
                                </ContainerTela.SectionText1_2.RgValue>
                            </ContainerTela.SectionText1_2>

                            <ContainerTela.SectionText1_3>
                                <ContainerTela.SectionText1_3.CPFTitle>
                                    CPF
                                </ContainerTela.SectionText1_3.CPFTitle>

                                <ContainerTela.SectionText1_3.CPFValue>
                                    {card?.documents.cpf}
                                </ContainerTela.SectionText1_3.CPFValue>
                            </ContainerTela.SectionText1_3>

                            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 10 }}>
                            </View>

                            <ContainerTela.SectionText2>

                               

                                <View style={{ marginBottom: 15}}>
                                    <ContainerTela.Header.ElectorTitle >
                                        N° Título
                                    </ContainerTela.Header.ElectorTitle>

                                    

                                    
                                        <ContainerTela.Header.ElectorTitle.Value>
                                            {card?.documents?.titulo}
                                        </ContainerTela.Header.ElectorTitle.Value>
                                    </View>
                               
                                <ContainerTela.SectionText2_2>


                                    <ContainerTela.SectionText2_2.SectionZona>
                                        <ContainerTela.SectionText2_2.SectionZona.TitleZona>
                                            Zona
                                        </ContainerTela.SectionText2_2.SectionZona.TitleZona>
                                        <ContainerTela.SectionText2_2.SectionZona.ValueZona>
                                            {card?.zone}
                                        </ContainerTela.SectionText2_2.SectionZona.ValueZona>
                                    </ContainerTela.SectionText2_2.SectionZona>

                                    <ContainerTela.SectionText2_2.SectionSecao>
                                        <ContainerTela.SectionText2_2.SectionSecao.TitleSecao>
                                            Seção
                                        </ContainerTela.SectionText2_2.SectionSecao.TitleSecao>


                                       
                                            <ContainerTela.SectionText2_2.SectionSecao.ValueSecao>
                                                {card?.section}
                                            </ContainerTela.SectionText2_2.SectionSecao.ValueSecao>
                                            
                                    </ContainerTela.SectionText2_2.SectionSecao>
                                </ContainerTela.SectionText2_2>


                                <ContainerTela.SectionText2.Municipio>
                                    <ContainerTela.SectionText2.Municipio.Title>
                                        Município/UF
                                    </ContainerTela.SectionText2.Municipio.Title>
                                    <ContainerTela.SectionText2.Municipio.Value>
                                        {card?.city}/{card?.state}
                                    </ContainerTela.SectionText2.Municipio.Value>
                                </ContainerTela.SectionText2.Municipio>

                            </ContainerTela.SectionText2>





                        </ContainerTela.Section>


                    </ContainerTela>
                </ScrollView>
                <Footerbar screen={statePage}/>

            </Background>
        </NavMenuContext.Provider>
    );

}

export default ScreenDashBoard;



