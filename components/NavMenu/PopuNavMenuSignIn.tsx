import * as React from 'react';
import {Text, Pressable, View  } from "react-native"
import StyleNavMenu from './NavMenu-Gerente/style';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ButtonNavMenuContext } from './../../contexts/buttonNavMenu';
import { ButtonContateContext } from '../../contexts/buttonContate';
  
const PopupNavMenuSignIn = () => {
    const {toggleButton} = useContext(ButtonNavMenuContext);
    const {toggleButtonContate: toggleButtonHistory} = useContext(ButtonContateContext);
    
const navigation = useNavigation();
const styles = StyleNavMenu;

    return (
      

       
                        <View style={styles.modalView}>
                              <Pressable
                                style={[styles.button]}
                                onPress={() => { toggleButton() }}
                            >
                                <Text style={styles.textStyle}>Nossa Historia</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { navigation.navigate('Register') , toggleButton()}}
                            >
                                <Text style={styles.textStyle}>Cadastrar-se</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => {toggleButtonHistory(),  toggleButton()}}
                            >
                                <Text style={styles.textStyle}>Entrar em contato</Text>
                            </Pressable>
                          
                      
                        </View>
                   

    );
};


export default PopupNavMenuSignIn;



