import React , {useContext} from "react";
import {View, TouchableNativeFeedback, Modal,StyleSheet } from 'react-native';
import { ButtonContateContext } from '../../../contexts/buttonContate';
import ContateList from './ContateList';


const Contate = ()=>{
    const {toggleButtonContate, isEnabledButtonContate} = useContext(ButtonContateContext);

    return(
        <View style={styles.centeredView}>
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={isEnabledButtonContate}
        
          onRequestClose={() => {
        
            toggleButtonContate();
          }}
        >
          <TouchableNativeFeedback
            onPress={() => { toggleButtonContate()
        
            }}>
            <View style={styles.centeredViewInner}>
                
        
                  
        
                    <View>
                      <ContateList/>
                    </View>
        
        
                  
        
                
            </View>
          </TouchableNativeFeedback >
        
        </Modal>
        
        
        </View>
        
        
        );
        };

export default Contate;
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