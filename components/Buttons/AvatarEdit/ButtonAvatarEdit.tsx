import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/core';
import { IconButton } from 'react-native-paper';
import { Alert, StyleSheet } from 'react-native';
import { ImageEditIcon } from './../../icons/ImageEdit/index';
import { CameraContext } from './../../../contexts/camera';


const ButtonAvatarEdit : React.FC = () => {
    const navigation = useNavigation();
    const {setActiveCamEdit} = useContext(CameraContext)

    function handleCamEdit(){
        setActiveCamEdit(true)
    }

    return(
        <IconButton style={styles.iconButton} icon={({ size, color }) => (
            <ImageEditIcon size={32} color="#00a2ff" />)} onPress={() => {handleCamEdit()}} />
    );
}

export default ButtonAvatarEdit;

const styles = StyleSheet.create({

    iconButton: {
        top: -50,
        right: -85,
    }

});