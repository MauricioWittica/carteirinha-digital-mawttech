import React from 'react';
import { Text, Pressable, View } from "react-native"
import StyleNavMenu from './NavMenu-Gerente/style';
import { ButtonNavMenuContext } from './../../contexts/buttonNavMenu';
import { useContext } from 'react';


const PopupNavMenuRegister= () => {
    const {toggleButton} = useContext(ButtonNavMenuContext);

const styles = StyleNavMenu;



    return (

                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { toggleButton()}}
                            >
                                <Text style={styles.textStyle}>Esqueci Minha Senhe</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button]}
   
                                onPress={() => { toggleButton()}}
                            >
                                <Text style={styles.textStyle}>Fazer Login</Text>
                            </Pressable>
                        </View>
                  


    );
};


export default PopupNavMenuRegister;
