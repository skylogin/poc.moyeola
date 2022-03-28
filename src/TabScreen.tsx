import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Tabbar from "./Tabbar";
import { Colors } from "./icons/Constants";

export default function TabScreen({ navigation }) {
  const onPress = () => navigation.navigate('Splash');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Tabbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.background,
  },
  mainContainer: {
    flex:7, 
    backgroundColor: "#fff", 
    alignItems:"center", 
    justifyContent: "center"
  },
  tabContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});