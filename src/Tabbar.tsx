import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { timing, withTransition } from "react-native-redash";
import { Value, block, onChange, set, useCode } from "react-native-reanimated";
import Tab from "./Tab";
import Particules from "./Particules";
import Weave from "./Weave";
import Compass from "./icons/Compass";
import Chat from "./icons/Chat";
import Camera from "./icons/Camera";
import Bell from "./icons/Bell";
import User from "./icons/User";
import { Colors, DURATION, ICON_SIZE, PADDING, SEGMENT } from "./icons/Constants";


const tabs = [
    { icon: <Compass />, title: "홈" },
    { icon: <Chat />, title: "쪽지" },
    { icon: <Bell />, title: "알림" },
    { icon: <User />, title: "내정보" },
    { icon: <Camera />, title: "글작성" },
];


export default () => {
  const active = new Value<number>(0);
  const transition = withTransition(active, { duration: DURATION });
  const activeTransition = new Value(0);

  useCode(
    () =>
      block([
        onChange(active, set(activeTransition, 0)),
        set(activeTransition, timing({ duration: DURATION })),
      ]),
    [active, activeTransition]
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({ icon, title }, index) => (
          <View key={index} style={styles.tab}>
            <Weave {...{ active, transition, index }} />
            <Tab
              onPress={() => active.setValue(index)}
              {...{ active, transition, index }}
            >
              {icon}  
            </Tab>
            <Text style={styles.title}>{title}</Text>
          </View>
        ))}
        <Particules {...{ transition, activeTransition }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: Colors.border,
    borderTopWidth: 3
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 7,
    color: Colors.selected,
    fontSize: 12,
    
  },
});