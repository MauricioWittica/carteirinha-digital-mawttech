import React, { useState, useEffect, useContext, useRef } from "react";
import { StyleSheet, Text, View, BackHandler, Button, ScrollView } from 'react-native';

import { TouchableHighlight } from 'react-native';

import { FirstStepsContext } from '../../contexts/firstStepsActions';
import RegisterCardIcon from '../icons/Lottie/RegisterCard/index';
import SucessofullRegisterIcon from './../icons/Lottie/RegisterCard/index';





const FirstRegisterCard = () => {
    const { hiddenMessageIntroRegister, hiddenMessageRegisterCard} = useContext(FirstStepsContext);


    const nextFirstSteps = () => {
        hiddenMessageRegisterCard();
    }

    return (
        <ScrollView>

            <View style={styles.container}>


                <View style={styles.textHeaderContainer}>

                    <Text style={styles.textTitle}>Muito bem!</Text>
                    <Text style={styles.textSubTitle}>Sua carteira foi criada com sucesso.</Text>
                   

                </View>

                <View style={styles.ImageCenterContainer}>
                    <SucessofullRegisterIcon />
                </View>



                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        activeOpacity={0.3}
                        underlayColor="#dddddd0"
                        onPress={() => { nextFirstSteps() }}>
                        <View style={styles.button}>
                            <Text>Próximo</Text>
                        </View>
                    </TouchableHighlight>
                </View>


            </View>
        </ScrollView>
    );
}

export default FirstRegisterCard;


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
        },
        textHeaderContainer: {
        },
        textTitle: {
            fontSize: 30,
            marginBottom: 10,
            fontWeight: '600',
            textAlign: 'center',




        },
        textSubTitle: {
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',

            marginBottom: 10,
        },
        textContentHeader: {
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 10,

        },

        ImageCenterContainer: {
            flex: 1,
            height: 300,
            marginBottom : 50,

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