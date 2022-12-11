import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { primary } from "../constants/ConstantColor";

export default function FieldComponent(props: any) {
  return (
    <TextInput
      {...props}
      style={styles.textInput}
      placeholderTextColor="#ddd"
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 0,
    marginBottom: 20,
    backgroundColor: primary,
    paddingHorizontal: 10,
    borderRadius: 10,
    color:"#fff"
  },
});
