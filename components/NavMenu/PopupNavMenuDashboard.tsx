import React from 'react';
import { Text, Pressable, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StyleNavMenu from './NavMenu-Gerente/style';
import { ButtonNavMenuContext } from './../../contexts/buttonNavMenu';
import { useContext } from 'react';

const PopupNavMenuDashboard = () => {
    const {toggleButton} = useContext(ButtonNavMenuContext);
   
const navigation = useNavigation();
 const styles = StyleNavMenu

    return (

                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { toggleButton()}}
                            >
                                <Text style={styles.textStyle}>Trocar Foto</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { navigation.navigate('BoxMessages') , toggleButton()}}
                            >
                                <Text style={styles.textStyle}>Menssagens</Text>
                            </Pressable>
                        </View>
                 

    );
};


export default PopupNavMenuDashboard;




