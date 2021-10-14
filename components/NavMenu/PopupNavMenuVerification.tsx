import React from 'react';
import { Text, Pressable, View} from "react-native"
import StyleNavMenu from './NavMenu-Gerente/style';

const PopupNavMenuVerification = () => {

const styles = StyleNavMenu;

    return (

       
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => { }}
                            >
                                <Text style={styles.textStyle}>Perfil</Text>
                            </Pressable>
                            
                        </View>
                   );
};


export default PopupNavMenuVerification;

