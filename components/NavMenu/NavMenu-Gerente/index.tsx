import * as React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableHighlight, TouchableNativeFeedback } from "react-native"
import { useContext } from 'react';
import { NavMenuContext } from '../../../contexts/navMenu';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import PopupNavMenuSignIn from './../PopuNavMenuSignIn';
import PopupNavMenuDashboard from './../PopupNavMenuDashboard';
import PopupNavMenuRegister from './../PopupNavMenuRegister';
import PopupNavMenuForgotPass from './../PopupNavMenuForgotPass';
import { ButtonNavMenuContext } from '../../../contexts/buttonNavMenu';
import PopupNavMenuBoxMessages from './../PopupNavMenuBoxMessages';





const NavMenuGerente = (props) => {
  const {isEnabled,toggleButton} = useContext(ButtonNavMenuContext); 

  function navmenuCreate() {

    switch (props.statePage) {
      case 'SignIn': return <PopupNavMenuSignIn />
        break;
      case 'Dashboard': return <PopupNavMenuDashboard />
        break;
      case 'Register': return <PopupNavMenuRegister />
        break;
      case 'ForgotPass': return <PopupNavMenuForgotPass />
        break;
      case 'BoxMessages': return <PopupNavMenuBoxMessages />
        break;
      default: return null
        break;

    }

    console.log(props.statePage + 'sou a resposta do navMenuGerente');
  }

  return (

    <View style={styles.centeredView}>


      <Modal
        animationType="fade"
        transparent={true}
        visible={isEnabled}

        onRequestClose={() => {

          toggleButton();
        }}
      >
        <TouchableNativeFeedback
          onPress={() => {
            toggleButton();

          }}>
          <View style={styles.centeredViewInner}>
              

                

                  <View>
                    { navmenuCreate() }
                  </View>


                

              
          </View>
        </TouchableNativeFeedback >

      </Modal>


    </View>


  );
};
export default NavMenuGerente;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: "auto",

  },
  centeredViewInner: {
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    marginTop: 30,
    margin: "auto"
  },
});