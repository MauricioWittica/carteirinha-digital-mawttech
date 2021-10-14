import  React from 'react';
import { StyleSheet, Text, Pressable, View,} from "react-native"
import StyleNavMenu from './NavMenu-Gerente/style';


const PopupNavMenuForgotPass = () => {
const styles = StyleNavMenu;


    return (

                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { }}
                            >
                                <Text style={styles.textStyle}>Cadastrar-se</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { }}
                            >
                                <Text style={styles.textStyle}>Fazer Login</Text>
                            </Pressable>
                        </View>
                   

    );
};


export default PopupNavMenuForgotPass;



