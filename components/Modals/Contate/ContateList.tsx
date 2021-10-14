import * as React from 'react';
import {Text,StyleSheet , Pressable, View  } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ButtonNavMenuContext } from './../../../contexts/buttonNavMenu';
import { ButtonContateContext } from './../../../contexts/buttonContate';

  
const ContateList = () => {
    
    const {toggleButtonContate: toggleButtonHistory} = useContext(ButtonContateContext);
    
const navigation = useNavigation();


    return (
             
        <View style={styles.modalView}>
        </View>
                   

        );
    };
    
    
    export default ContateList;
    
    
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        margin: "auto",
    
      },
      modalView: {
        width: "100%",
        height: "30%",
        alignItems: "flex-end",
        marginTop: 30,
        margin: "auto"
      },
    });