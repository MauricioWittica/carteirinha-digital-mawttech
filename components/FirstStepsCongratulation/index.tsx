import React, { useState, useEffect, useContext, useRef } from "react";
import { StyleSheet, Text, View, BackHandler, Button, ScrollView } from 'react-native';

import { TouchableHighlight } from 'react-native';

import { FirstStepsContext } from '../../contexts/firstStepsActions';
import CongratulationRegisterCardIcon from "../icons/Lottie/CongratulationRegisterCard";
import SucessofullRegisterIcon from "../icons/Lottie/RegisterCard/index";
import RegisterCardIcon from '../icons/Lottie/RegisterCard/index';
import RegisterSelfIcon from "../icons/Lottie/RegisterSelf";
import { AuthContext } from './../../contexts/auth';





const FirstStepsCongratulation = () => {
    const {hiddenMessageRegisterSelf} = useContext(FirstStepsContext);
    const {firstLogin} = useContext(AuthContext)



    const nextFirstSteps = () => {
        hiddenMessageRegisterSelf();
        firstLogin()
    }

    return (
        <ScrollView>

            <View style={styles.container}>

                <View style={styles.textHeaderContainer}>

                    <Text style={styles.textTitle}>Parabéns!</Text>
                    <Text style={styles.textSubTitle}>Você concluiu a sua carteirinha digital.</Text>

                </View>

                <View style={styles.ImageCenterContainer}>
                    <CongratulationRegisterCardIcon/>
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

export default FirstStepsCongratulation;


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