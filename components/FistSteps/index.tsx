import React, { useState, useEffect, useContext, useRef } from "react";
import { StyleSheet, Text, View, BackHandler, Button, ScrollView } from 'react-native';

import { TouchableHighlight } from 'react-native';
import RegisterUserIcon from "../icons/Lottie/RegisterUser";

import { FirstStepsContext } from '../../contexts/firstStepsActions';





const FirstSteps = () => {
    const { hiddenMessageIntroRegister, hiddenRegisterAccount} = useContext(FirstStepsContext);


    const nextFirstSteps = () => {
        console.log("Começando o processo de cadastro...")
        hiddenMessageIntroRegister();
    }

    return (
        <ScrollView>

            <View style={styles.container}>


                <View style={styles.textHeaderContainer}>

                    <Text style={styles.textTitle}>Seja Bem Vindo(a)!</Text>
                    <Text style={styles.textSubTitle}>Vamos aos primeiros passos.</Text>
                    <Text style={styles.textContentHeader}>
                    Você precisará preencher um pequeno formulário e tirar algumas fotos suas e de seus documentos para se registrar em nosso banco de dados, e ter acesso a sua carteirinha digital para Filiados PRTB.
                    </Text>

                </View>

                <View style={styles.ImageCenterContainer}>
                    <RegisterUserIcon />
                </View>



                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        activeOpacity={0.3}
                        underlayColor="#dddddd0"
                        onPress={() => { nextFirstSteps() }}>
                        <View style={styles.button}>
                            <Text>Começar</Text>
                        </View>
                    </TouchableHighlight>
                </View>


            </View>
        </ScrollView>
    );
}

export default FirstSteps;


const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        textHeaderContainer: {
            padding: 20,
        },
        textTitle: {
            fontSize: 30,
            marginBottom: 20,
            fontWeight: '600',
            textAlign: 'center',




        },
        textSubTitle: {
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',

            marginBottom: 20,
        },
        textContentHeader: {
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 20,

        },

        ImageCenterContainer: {
            flex: 1,
            height: 400,
            padding: 150,
        },

        buttonContainer: {
            flex: 1,
            backgroundColor: 'transparent',

            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            height: 50,
            width: '100%',

        },
        button: {
            flex: 0,
            alignSelf: 'flex-end',
            alignItems: 'center',
            borderRadius: 50,
            alignContent: 'center',
            justifyContent: 'center',
            height: 50,
            width: 200,
            backgroundColor: '#00ccff',


        },


    }
);