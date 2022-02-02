import React from "react";

import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const MyHistory = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Sobre o Aplicativo </Text>

        <Text style={styles.subTitle}>MAWTTECH</Text>
        <Text></Text>
        <Text style={styles.text}>Carteirinha Digital </Text>
        <Text></Text>
        <Text style={styles.text}>
          Este aplicativo é um protótipo de apresentação de venda, sua licença
          não se atribui ao uso diário. A base de dados do aplicativo é limpa
          após as devidas apresentações do mesmo.
        </Text>
        <Text></Text>

        <View style={{ width: 200, height: 200, marginTop: 30 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/logotipo-mawttech.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyHistory;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    alignItems: "center",

    justifyContent: "center",
  },
  subTitle: {
    fontSize: 28,
    alignItems: "center",
  },
  text: {
    textAlign: "justify",
    fontSize: 16,
  },
});
