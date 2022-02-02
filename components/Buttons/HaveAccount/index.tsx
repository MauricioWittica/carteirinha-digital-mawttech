import React, { useContext } from "react";
import { Alert, Button, TouchableHighlight, View, Text, StyleSheet } from "react-native";
import { FirstStepsContext } from "./../../../contexts/firstStepsActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HaveAccountButton: React.FC = () => {
  const { setShowFirstSteps } = useContext(FirstStepsContext);

  const onDone = async () => {
    await AsyncStorage.setItem("@MAW_PRTB_FirstStps:showFirstSteps", "hidden");
    setShowFirstSteps("hidden");
  };

  function handleSignOut() {
    Alert.alert("", "Realmente deseja sair para tela de login ?", [
      {
        text: "NÃO",
        onPress: () => console.log("NÃO on clicked!"),
        style: "cancel",
      },
      {
        text: "SIM",
        onPress: () => {
          onDone(), console.log("SIM on clicked!");
        },
      },
    ]);
  }
  return (
    <>
      <Button
        title="Já tenho conta"
        onPress={() => {
          handleSignOut();
        }}
      />
    </>
  );
};

export const HaveAccountNativeButton: React.FC = () => {
  const { setShowFirstSteps } = useContext(FirstStepsContext);

  const onDone = async () => {
    await AsyncStorage.setItem("@MAW_PRTB_FirstStps:showFirstSteps", "hidden");
    setShowFirstSteps("hidden");
  };

  function handleSignOut() {
    Alert.alert("", "Realmente deseja sair para tela de login ?", [
      {
        text: "NÃO",
        onPress: () => console.log("NÃO on clicked!"),
        style: "cancel",
      },
      {
        text: "SIM",
        onPress: () => {
          onDone(), console.log("SIM on clicked!");
        },
      },
    ]);
  }
  return (
    <>
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="#dddddd0"
        onPress={() => {
          handleSignOut();
        }}
      >
        <View style={styles.button}>
          <Text>Já tenho conta</Text>
        </View>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        height: 50,
        width: 200,
        backgroundColor: '#00ccff',


    },
})