import * as React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableHighlight, TouchableNativeFeedback } from "react-native"
import { useContext } from 'react';
import { FirstStepsContext } from './../../../contexts/firstStepsActions';
import CameraUser from './../../Camera/index';
import { useState } from 'react';
import CameraUserEdit from './../../CameraEditSelf/index';
import CameraContext from '../../../contexts/camera';
import CameraUserEdit1 from '../../Camera copy';






const CameraSelfEditModal = (props) => {
const {activeCamEdit} = useContext(CameraContext)

    console.log(props.statePage + 'sou a resposta do navMenuGerente');
 

  return (

    <View style={styles.centeredView}>


      <Modal
        animationType="slide"
        transparent={false}
        visible={activeCamEdit}
        

        onRequestClose={() => {

         
        }}
      >
        
     
        <CameraUserEdit1 frontVsBack='front'/>
        

      </Modal>

     
    </View>


  );
}
export default CameraSelfEditModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: "auto",

  },
  
});