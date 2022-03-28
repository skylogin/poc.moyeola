import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { Colors } from "./icons/Constants";

export default function SplashScreen({ navigation }) {
  const onPress = () => navigation.navigate('Tab');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>모여라</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007147",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 40
  },
  title: {
    color: Colors.white,
    fontSize: 72,
    fontWeight: "bold",
    paddingBottom: 200
  }
});