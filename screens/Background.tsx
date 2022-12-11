import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { bgColor } from "../constants/ConstantColor";

export default function Background({ children }: { children: any }) {
  return (
    <View style={styles.mainBody}>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex:1,
    backgroundColor: bgColor,
  },
  backgroundImage: {
    height: "100%",
  },
  children: {
    position: "absolute",
  },
});
