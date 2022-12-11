import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Route, useNavigation } from "@react-navigation/native";
import BtnComponent from "../components/BtnComponent";
import { btnBg, cvStyle, danger, light, success, textColor, violet } from "../constants/ConstantColor";
import DisplayAnImage from "../components/DisplayAnImage";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";

export default function HomeScreen() {
  const navi_name = useNavigation();
  return (
    <KeyboardAvoidingComponent>
      <View style={styles.inner}>
        <DisplayAnImage />
        <View style={styles.curvedStyle}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Welcome to</Text>
            <Text style={styles.text}>Doc on T@PP</Text>
            <Text style={styles.subText}>Let's get started</Text>
          </View>
          <View style={styles.btnContainer}>
            <BtnComponent
              bgColor={btnBg}
              textColor="#fff"
              btnLabel="Login"
              onPress={() => {
                navi_name.navigate("SignIn");
              }}
            ></BtnComponent>
            <BtnComponent
              bgColor="#25285E"
              textColor="#fff"
              btnLabel="Sign Up"
              onPress={() => {
                navi_name.navigate("SignUp");
              }}
            ></BtnComponent>
          </View>
        </View>
      </View>
    </KeyboardAvoidingComponent>
  );
}

const styles = StyleSheet.create({
  inner: {
    padding: 0,
    flex: 1,
  },
  curvedStyle: {
    flex: 1,
    backgroundColor: violet,
    borderTopLeftRadius: 100,
    padding: 25,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  text: {
    fontSize: 35,
    color: light,
  },
  subText: {
    fontSize: 17,
    color: light,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btnContainer: {
    alignItems: "center",
  },
});
