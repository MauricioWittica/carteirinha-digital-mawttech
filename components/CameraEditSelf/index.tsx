import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";
import CameraContext from "../../contexts/camera";
import { ImageType } from "expo-camera/build/Camera.types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CameraUserEdit = (frontVSBack) => {
  const { setActiveCamEdit, setAvatarPicture } = useContext(CameraContext);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("É necessária permissão para acessar o rolo da câmera!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    console.log(pickerResult);
    await AsyncStorage.setItem(
      "@MAWTTECH_Camera:avatar_picture",
      JSON.stringify(pickerResult)
    );
    setAvatarPicture(pickerResult);
    setActiveCamEdit(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default CameraUserEdit;
