import React, { useState, useEffect, useContext, useRef } from "react";
import { StyleSheet, Text, View, BackHandler, Button, Modal, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { CameraContext } from '../../contexts/camera';
import { TouchableHighlight } from 'react-native';
import ActionCameraIcon from '../icons/Lottie/actionCamera/index';
import { FontAwesome } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FirstStepsContext } from './../../contexts/firstStepsActions';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import AuthContext from "../../contexts/auth";


interface ImageUser{
  albumId:string
  creationTime: number
  duration: number
  filename: string
  height: number
  id : string
  mediaType:string
  modificationTime:number
  uri: string
  width: number
}


const CameraUser = (frontVSBack) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.on)
  const [autoFocus, setAutoFocus] = useState(Camera.Constants.AutoFocus.on)
  const { setAvatarPicture, setPicture, avatarPicture, picture } = useContext(CameraContext);
  const { hiddenRegisterSelf } = useContext(FirstStepsContext);  
  const { saveSelf} = useContext(AuthContext);  
  const [open, setOpen] = useState(false)

  const cameraRef = useRef(null)



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();



  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {

    if (cameraRef) {
      let photo = await cameraRef.current.takePictureAsync();
      setPicture(photo);
      console.log(photo)
      setOpen(true)
      

    }
    console.log(picture)

  }

const message = ()=>{
  Alert.alert(
    '','salvo com sucesso!',[

      { text: 'OK', onPress: () =>  hiddenRegisterSelf()}
    ]
  )
}
  async function savePicture() {
    try {
    const asset = await MediaLibrary.createAssetAsync(picture.uri)
    const avatarPictureJson = {
      height: asset.height,
      uri: asset.uri,
      width: asset.width
    }
    setAvatarPicture(avatarPictureJson)
    //saveSelf(avatarPictureJson)
    console.log(asset)
    await AsyncStorage.setItem('@MAW_PRTB_Camera:avatar_picture', JSON.stringify(avatarPicture))
    message()
    saveSelf(asset.uri)
      
    } catch (error) {
      console.log('err', error)
      alert('Ouve um problema tente novamente mais tarde')
    }
  

  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera}
        type={type}
        ref={cameraRef}
        flashMode={flashMode}
        autoFocus={autoFocus}
        

      >

        <View style={styles.glassContainer}>

        </View>

        <View style={styles.controlContainer}>




          <View style={styles.buttonContainer2}>
            <TouchableHighlight
              activeOpacity={0.3}
              underlayColor="#dddddd0"
              onPress={() => { snap() }}>
              <View style={styles.button}>
                <ActionCameraIcon />
              </View>
            </TouchableHighlight>
          </View>

        </View>
      </Camera>

      {picture &&
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <Image
              style={{ width: "100%", height: 450, borderRadius: 20 }}
              source={{ uri: picture.uri }}
            />

            <View style={{ flexDirection: 'row' }}>
              <TouchableHighlight
                style={{ margin: 10 }} onPress={() => { setOpen(false) }}
                activeOpacity={0.3}
                underlayColor='#fff'>
                <FontAwesome name='window-close' size={36} color='#FF0000' />

              </TouchableHighlight>

              <TouchableHighlight
                style={{ margin: 10 }} onPress={() => { savePicture() }}
                activeOpacity={0.3}
                underlayColor="#dddddd0">
                <FontAwesome name='upload' size={36} color='#272727' />

              </TouchableHighlight>
            </View>

          </View>
        </Modal>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,

  },
  glassContainer: {
    flex: 1,
    flexDirection: 'column',
    height: '80%'

  },
  controlContainer: {
    flex: 0.2,
    width: '100%',
    flexDirection: "column",

  },

  buttonContainer1: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
    position: 'absolute',
    right: 0,
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 0,
    height: 70,
    width: '100%',
  },


  buttonContainer2: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    height: 70,
    width: '100%',


  },
  button: {
    flex: 0,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,

  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraUser;