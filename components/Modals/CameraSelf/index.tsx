import * as React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableHighlight, TouchableNativeFeedback } from "react-native"
import { useContext } from 'react';
import { FirstStepsContext } from './../../../contexts/firstStepsActions';
import CameraUser from './../../Camera/index';
import { useState } from 'react';






const CameraSelfModal = (props) => {
const {activeFirstStepsStage6} = useContext(FirstStepsContext)

    console.log(props.statePage + 'sou a resposta do navMenuGerente');
 

  return (

    <View style={styles.centeredView}>


      <Modal
        animationType="slide"
        transparent={false}
        visible={activeFirstStepsStage6}
        

        onRequestClose={() => {

         
        }}
      >
        
     
        <CameraUser frontVsBack='front'/>
        

      </Modal>

     
    </View>


  );
}
export default CameraSelfModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: "auto",

  },
  
});