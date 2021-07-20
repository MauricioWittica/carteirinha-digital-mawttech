import React from 'react';
import styled from 'styled-components';
import HeaderGlobal from '../components/Headers/Login/HeaderGeneric';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BtnOut } from '../components/Buttons/Login/ButtonsOAuth';

const myIcon = <Icon name="rocket" size={30} color="#900" />;


const Background = styled.View`

    background-color: #fff;`;


const ContainerTela = styled.View``;

//==============Header==========//
ContainerTela.Header = styled.View`
padding-bottom: 20px;
`;


ContainerTela.Header.Picture = styled.View`
align-self: center;
background-color: grey;
position: relative;
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
bottom: 20px;
font-size: 20px;`;

//==============Section===============//

ContainerTela.Section = styled.View`

padding-left: 20px;
padding-right: 20px;
padding-bottom: -20px;
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


    return (
        <Background>
<BtnOut />
            <HeaderGlobal />

            <ContainerTela>
                <ContainerTela.Header>
                    <ContainerTela.Header.Picture>

                    </ContainerTela.Header.Picture>


                    <ContainerTela.Header.SectionText>
                        <ContainerTela.Header.Nome>
                            Abelardo Pinto Júnior
                        </ContainerTela.Header.Nome>
                        <ContainerTela.Header.NumReg >
                            N° 4484 8308 0141
                        </ContainerTela.Header.NumReg>
                        <ContainerTela.Header.Bio>
                            biometria coletada
                        </ContainerTela.Header.Bio>
                    </ContainerTela.Header.SectionText>
                </ContainerTela.Header>


                <ContainerTela.Section>

                    <ContainerTela.SectionText1>
                        <ContainerTela.SectionText1.Title>
                            Data de nascimento
                        </ContainerTela.SectionText1.Title>

                        <ContainerTela.SectionText1.Value>
                            13/06/2000
                        </ContainerTela.SectionText1.Value>
                    </ContainerTela.SectionText1>
                    <ContainerTela.SectionText2>
                        <ContainerTela.SectionText2.SectionZona>
                            <ContainerTela.SectionText2.SectionZona.TitleZona>
                                Zona
                            </ContainerTela.SectionText2.SectionZona.TitleZona>
                            <ContainerTela.SectionText2.SectionZona.ValueZona>
                                434
                            </ContainerTela.SectionText2.SectionZona.ValueZona>
                        </ContainerTela.SectionText2.SectionZona>

                        <ContainerTela.SectionText2.SectionSecao>
                            <ContainerTela.SectionText2.SectionSecao.TitleSecao>
                                Seção
                            </ContainerTela.SectionText2.SectionSecao.TitleSecao>

                            <ContainerTela.SectionText2.SectionSecao.ValueSecao>
                                3423
                            </ContainerTela.SectionText2.SectionSecao.ValueSecao>

                        </ContainerTela.SectionText2.SectionSecao>
                    </ContainerTela.SectionText2>

                    <ContainerTela.SectionText3>
                        <ContainerTela.SectionText3.Municipio>

                            <ContainerTela.SectionText3.Municipio.Title>
                                Município/UF
                            </ContainerTela.SectionText3.Municipio.Title>
                            <ContainerTela.SectionText3.Municipio.Value>
                                Sumaré/SP
                            </ContainerTela.SectionText3.Municipio.Value>

                        </ContainerTela.SectionText3.Municipio>

                        <ContainerTela.SectionText3.Filiacao>
                            <ContainerTela.SectionText3.Filiacao.Title>
                                Filiação
                            </ContainerTela.SectionText3.Filiacao.Title>
                            <ContainerTela.SectionText3.Filiacao.Value>
                                Ana Maria Ribeiro
                            </ContainerTela.SectionText3.Filiacao.Value>
                        </ContainerTela.SectionText3.Filiacao>
                    </ContainerTela.SectionText3>
                </ContainerTela.Section>

                

            </ContainerTela>
        </Background>
    );
}

export default ScreenDashBoard;



