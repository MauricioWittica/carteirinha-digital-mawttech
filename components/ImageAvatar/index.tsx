import * as MediaLibrary from 'expo-permissions';
import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { CameraContext } from './../../contexts/camera';



const ImageAvatar: React.FC = () => {
  const { avatarPicture } = useContext(CameraContext)

 

  const uri = avatarPicture?.uri
  if (avatarPicture?.uri !== undefined) {
    return (
      <>
        <Image style={styles.imageAvatar}
          source={{ uri }} />

      </>
    );

  } else {
    return (
      <>
        <Image style={styles.imageAvatar}
          source={require('../../assets/avatar_user_null.png')} />

      </>
    );
  }
}
export default ImageAvatar;


const styles = StyleSheet.create({
  imageAvatar: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'grey',
    borderWidth: 3,
    borderColor: '#919057',
    borderRadius: 25,
    bottom: 20,
    height: 220,
    width: 180,

  },

});