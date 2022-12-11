import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function BtnComponent({
  onPress,
  bgColor,
  btnLabel,
  textColor,
}: {
  onPress: any;
  bgColor: string;
  btnLabel: string;
  textColor: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 150,
        paddingVertical: 5,
        marginBottom: 10
      }}
    >
      <Text style={[styles.btnLabel, { color: textColor}]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnOpacity: {},
  btnLabel: {
    fontSize: 17,
    fontWeight: "400"
  }
});
